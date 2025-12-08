import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const FormData = () => {
  let [details, setDetails] = useState("");
  let navigate = useNavigate();

  let handleChange = (e) => {
    let { value } = e.target;
    setDetails(value);
  };

  let handleSubmit = (e) => {
    e.preventDefault();
    console.log(details);
    navigate("/layout");
  };
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="">Name</label>
        <input type="text" value={details} onChange={handleChange} />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default FormData;
