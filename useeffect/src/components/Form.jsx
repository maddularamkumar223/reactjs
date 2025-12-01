import React from "react";

const Form = ({ name, handleChange, handleSubmit }) => {
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="">Name</label>
        <input type="text" name="name" value={name} onChange={handleChange} />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Form;
