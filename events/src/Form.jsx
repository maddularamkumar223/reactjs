import React from "react";

const Form = ({ handleSubmit }) => {
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="">Name</label>
        <input type="text" />
        <label htmlFor="">Email</label>
        <input type="text" />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Form;
