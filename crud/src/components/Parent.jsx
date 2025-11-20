import React, { useState } from "react";
import Form from "./Form";
import DisplayDetails from "./DisplayDetails";

const Parent = () => {
  let [details, setDetails] = useState({
    productName: "",
    productPrice: "",
    productDescription: "",
  });

  let [displayData, setDisplayData] = useState([]);

  let handleChange = (e) => {
    let { name, value } = e.target;
    setDetails({ ...details, [name]: value });
  };
  let handleSubmit = (e) => {
    e.preventDefault();
    setDisplayData([...displayData, details]);
    setDetails({
      productName: "",
      productPrice: "",
      productDescription: "",
    });
  };
  return (
    <section>
      <article>
        <Form
          details={details}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
      </article>
      <article>
        <DisplayDetails details={displayData} />
      </article>
    </section>
  );
};

export default Parent;
