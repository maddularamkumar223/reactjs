import React from "react";

const DisplayDetails = ({ details, handleEdit, handleDelete }) => {
  return (
    <>
      {details.map((value) => {
        return (
          <article>
            <p>Product Name: {value.productName}</p>
            <p>Product Price: {value.productPrice}</p>
            <p>Product Description: {value.productDescription}</p>
            <aside>
              <button
                onClick={() => {
                  handleEdit(value);
                }}
              >
                Edit
              </button>
              <button onClick={() => handleDelete(value)}>Delete</button>
            </aside>
          </article>
        );
      })}
    </>
  );
};

export default DisplayDetails;
