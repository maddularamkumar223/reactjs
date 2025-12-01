import React, { useEffect, useState } from "react";
import Form from "./Form";
import DataDisplay from "./DataDisplay";

const ApiHandling = () => {
  // ! Creating the state
  let [details, setDetails] = useState({
    name: "",
    user: [],
    loading: false,
  });

  // ! Fetch the api data
  let fetchUsers = async () => {
    let response = await fetch("http://localhost:3000/names");
    let data = await response.json();
    setDetails({ ...details, user: data });
  };
  //   ! Creating the data
  let addUser = async (data) => {
    await fetch("http://localhost:3000/names", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ name: data }),
    });
    setDetails({ ...details, loading: !details.loading, name: "" });
  };

  //! handling api by using the useEffect

  useEffect(() => {
    fetchUsers();
  }, [details.loading]);

  //   ! Handle change for the form
  let handleChange = (e) => {
    let { name, value } = e.target;
    setDetails({ ...details, [name]: value });
  };

  //   ! Handle submit for the form
  let handleSubmit = async (e) => {
    e.preventDefault();
    console.log(details.name);
    await addUser(details.name);
  };
  console.log(details);
  return (
    <div>
      <Form
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        name={details.name}
      />
      <DataDisplay user={details.user} />
    </div>
  );
};

export default ApiHandling;
