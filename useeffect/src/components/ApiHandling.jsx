import React, { useEffect, useState } from "react";
import Form from "./Form";
import DataDisplay from "./DataDisplay";

const ApiHandling = () => {
  // ! Creating the state
  let [details, setDetails] = useState({
    name: "",
    user: [],
    loading: false,
    editId: "",
    isEdit: false,
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

  // ! DeleteData
  let deleteData = async (id) => {
    await fetch(`http://localhost:3000/names/${id}`, {
      method: "DELETE",
    });
    setDetails({ ...details, loading: !details.loading });
  };

  // ! Edit Data

  let handleEdit = (data) => {
    setDetails({ ...details, name: data.name, editId: data.id, isEdit: true });
  };

  let updateData = async (id, data) => {
    await fetch(`http://localhost:3000/names/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ name: data }),
    });
    setDetails({
      ...details,
      loading: !details.loading,
      name: "",
      isEdit: false,
    });
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
    details.isEdit
      ? await updateData(details.editId, details.name)
      : await addUser(details.name);
  };
  return (
    <div>
      <Form
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        name={details.name}
      />
      <DataDisplay
        user={details.user}
        deleteData={deleteData}
        handleEdit={handleEdit}
      />
    </div>
  );
};

export default ApiHandling;
