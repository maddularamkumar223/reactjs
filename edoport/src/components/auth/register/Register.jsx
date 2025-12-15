import React, { useContext, useState } from "react";
import CreateForm from "./../../form/CreateForm";
// import { WatchHandlers } from "./../../../../node_modules/chokidar/esm/handler.d";
import { authContext } from "../../context/AuthContext";

const Register = () => {
  let [registerDetails, setRegisterDetails] = useState({
    name: "",
    email: "",
    dob: "",
    password: "",
    contact: "",
    gender: "",
    address: "",
    role: "user",
  });

  let { addUser } = useContext(authContext);
  let { name, email, dob, password, contact, gender, address } =
    registerDetails;
  let registerData = [
    { name: "name", stateValue: name, type: "text" },
    { name: "email", stateValue: email, type: "email" },
    { name: "dob", stateValue: dob, type: "date" },
    { name: "password", stateValue: password, type: "password" },
    { name: "contact", stateValue: contact, type: "tel" },
    { name: "gender", stateValue: gender, type: "text" },
    { name: "address", stateValue: address, type: "text" },
  ];
  let handleChange = (e) => {
    let { name, value } = e.target;
    setRegisterDetails({ ...registerDetails, [name]: value });
  };

  let handleSubmit = (e) => {
    e.preventDefault();
    addUser(registerDetails);
    alert("Registration Successful");
    setRegisterDetails({
      name: "",
      email: "",
      dob: "",
      password: "",
      contact: "",
      gender: "",
      address: "",
    });
  };
  return (
    <>
      <CreateForm
        data={registerData}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    </>
  );
};

export default Register;
