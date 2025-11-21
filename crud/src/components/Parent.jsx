import React, { useState } from "react";
import Form from "./Form";
import DisplayDetails from "./DisplayDetails";
import { v4 as uuidv4 } from "uuid";

const Parent = () => {
  let [details, setDetails] = useState({
    id: uuidv4(),
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
      id: uuidv4(),
      productName: "",
      productPrice: "",
      productDescription: "",
    });
  };
  console.log(displayData);
  let updateProduct = (data) => {
    setDetails(data);
    let filterData = displayData.filter((value) => value.id != data.id);
    setDisplayData(filterData);
  };

  let handleDelete = (data) => {
    let filterData = displayData.filter((value) => value.id != data.id);
    setDisplayData(filterData);
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
        <DisplayDetails
          details={displayData}
          handleEdit={updateProduct}
          handleDelete={handleDelete}
        />
      </article>
    </section>
  );
};

export default Parent;
