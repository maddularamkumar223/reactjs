import React from "react";

const DisplayFormData = ({ details: { email, password } }) => {
  return (
    <div>
      <h1>{email}</h1>
      <h2>{password}</h2>
    </div>
  );
};

export default DisplayFormData;
