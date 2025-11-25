import { createContext, useState } from "react";

export let formContext = createContext();

let FormProvider = ({ children }) => {
  let [details, setDetails] = useState({
    name: "",
    email: "",
    contact: "",
    password: "",
  });

  let handleChange = (e) => {
    let { name, value } = e.target;
    setDetails({ ...details, [name]: value });
  };

  let handleSubmit = (e) => {
    e.preventDefault();
    console.log(details);
    setDetails({
      name: "",
      email: "",
      contact: "",
      password: "",
    });
  };
  let { name, email, contact, password } = details;
  return (
    <formContext.Provider
      value={{ name, email, contact, password, handleChange, handleSubmit }}
    >
      {children}
    </formContext.Provider>
  );
};

export default FormProvider;
