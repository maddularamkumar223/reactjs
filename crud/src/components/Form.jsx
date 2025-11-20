import React from "react";

const Form = ({ details, handleChange, handleSubmit }) => {
  let { productName, productPrice, productDescription } = details;
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <aside>
          <label htmlFor="">Product Name</label>
          <input
            type="text"
            value={productName}
            name="productName"
            onChange={handleChange}
          />
        </aside>
        <aside>
          <label htmlFor="">Product Price</label>
          <input
            type="text"
            value={productPrice}
            name="productPrice"
            onChange={handleChange}
          />
        </aside>
        <aside>
          <label htmlFor="">Product Description</label>
          <textarea
            id=""
            value={productDescription}
            name="productDescription"
            onChange={handleChange}
          ></textarea>
        </aside>

        <aside>
          <button>Submit</button>
        </aside>
      </form>
    </div>
  );
};

export default Form;
