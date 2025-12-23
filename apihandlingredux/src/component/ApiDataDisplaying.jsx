import React, { useEffect, useState } from "react";
import {
  addProduct,
  deleteProductData,
  editProductData,
  fetchProducts,
} from "../redux/product/productThunkApi";
import { useDispatch, useSelector } from "react-redux";
import { updateSingleProduct } from "../redux/product/productApiSlice";

const ApiDataDisplaying = () => {
  let [productDetails, setProductDetails] = useState({
    productName: "",
    price: "",
    description: "",
    quantity: "",
  });
  let { productName, price, quantity, description } = productDetails;

  let singleProduct = useSelector(
    (state) => state.productApiStore.singleProduct
  );

  let isEdit = useSelector((state) => state.productApiStore.isEdit);
  let dispatch = useDispatch();
  let productsData = useSelector((state) => state.productApiStore.productsList);

  let handleChange = (e) => {
    let { name, value } = e.target;
    setProductDetails({ ...productDetails, [name]: value });
  };

  let handleSubmit = (e) => {
    e.preventDefault();
    if (isEdit) {
      dispatch(
        editProductData({ id: singleProduct.id, product: productDetails })
      );
    } else {
      dispatch(addProduct(productDetails));
    }
    console.log("Form Submitted");
    setProductDetails({
      productName: "",
      price: "",
      description: "",
      quantity: "",
    });
  };
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  useEffect(() => {
    singleProduct &&
      setProductDetails({
        productName: singleProduct.productName,
        price: singleProduct.price,
        description: singleProduct.description,
        quantity: singleProduct.quantity,
      });
  }, [singleProduct]);
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <aside>
          <label htmlFor="">Product Name</label>
          <input
            type="text"
            name="productName"
            value={productName}
            onChange={handleChange}
          />
        </aside>
        <aside>
          <label htmlFor="">Price</label>
          <input
            type="text"
            name="price"
            value={price}
            onChange={handleChange}
          />
        </aside>
        <aside>
          <label htmlFor="">Quantity</label>
          <input
            type="text"
            name="quantity"
            value={quantity}
            onChange={handleChange}
          />
        </aside>
        <aside>
          <label htmlFor="">Description</label>
          <input
            type="text"
            name="description"
            value={description}
            onChange={handleChange}
          />
        </aside>
        <aside>
          <button>Submit</button>
        </aside>
      </form>

      <hr />

      <h1>Products</h1>

      <section>
        {productsData?.map((product) => {
          return (
            <article>
              <p>Product Name : {product.productName}</p>
              <p>Product Price: {product.price}</p>
              <p>Product Quantity: {product.quantity}</p>
              <p>Product Description: {product.description}</p>
              <button onClick={() => dispatch(updateSingleProduct(product.id))}>
                Edit
              </button>
              <button onClick={() => dispatch(deleteProductData(product.id))}>
                Delete
              </button>
            </article>
          );
        })}
      </section>
    </div>
  );
};

export default ApiDataDisplaying;
