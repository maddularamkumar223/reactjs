import React from "react";

const DisplayDetails = ({ details }) => {
  return (
    <>
      {details.map((value) => {
        return (
          <article>
            <p>Product Name: {value.productName}</p>
            <p>Product Price: {value.productPrice}</p>
            <p>Product Description: {value.productDescription}</p>
            <aside>
              <button>Edit</button>
              <button>Delete</button>
            </aside>
          </article>
        );
      })}
    </>
  );
};

export default DisplayDetails;
