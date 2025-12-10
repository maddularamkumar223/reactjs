import React, { useContext, useEffect, useState } from "react";
import CreateForm from "./../../form/CreateForm";
import { authContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  let [loginDetails, setLoginDetails] = useState({
    email: "",
    password: "",
  });
  let navigate = useNavigate();
  let { fetchUsers, validate, isLogin } = useContext(authContext);
  let { email, password } = loginDetails;
  let loginData = [
    { name: "email", stateValue: email },
    { name: "password", stateValue: password },
  ];
  let handleChange = (e) => {
    let { name, value } = e.target;
    setLoginDetails({ ...loginDetails, [name]: value });
  };
  useEffect(() => {
    fetchUsers();
  }, []);

  useEffect(() => {
    isLogin && navigate("/displayCourse");
  }, [isLogin]);

  let handleSubmit = () => {
    validate(email, password);
  };
  return (
    <div>
      <CreateForm
        data={loginData}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    </div>
  );
};

export default Login;
