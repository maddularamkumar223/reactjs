import React, { useEffect, useState } from "react";
import { addProduct, fetchProducts } from "../redux/product/productThunkApi";
import { useDispatch, useSelector } from "react-redux";

const ApiDataDisplaying = () => {
  let [productDetails, setProductDetails] = useState({
    productName: "",
    price: "",
    description: "",
    quantity: "",
  });
  let { productName, price, quantity, description } = productDetails;

  let dispatch = useDispatch();
  let errorMessage = useSelector((state) => state.productApiStore.error);
  let pendingMessage = useSelector((state) => state.productApiStore.pending);
  let productsData = useSelector((state) => state.productApiStore.productsList);
  console.log(productsData);

  let handleChange = (e) => {
    let { name, value } = e.target;
    setProductDetails({ ...productDetails, [name]: value });
  };

  let handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addProduct(productDetails));
    console.log("Form Submitted");
    setProductDetails({
      productName: "",
      price: "",
      description: "",
      quantity: "",
    });
    console.log(errorMessage);
    console.log(pendingMessage);
  };
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
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
              <button>Edit</button>
              <button>Delete</button>
            </article>
          );
        })}
      </section>
    </div>
  );
};

export default ApiDataDisplaying;
