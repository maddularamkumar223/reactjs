import React, { useContext } from "react";
import { formContext } from "../../context/formContext/FormContext";

const Register = () => {
  let { name, contact, email, password, handleChange, handleSubmit } =
    useContext(formContext);
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <aside>
          <label htmlFor="">Name</label>
          <input type="text" name="name" value={name} onChange={handleChange} />
        </aside>
        <aside>
          <label htmlFor="">Email</label>
          <input
            type="text"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </aside>
        <aside>
          <label htmlFor="">Password</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
            id=""
          />
        </aside>
        <aside>
          <label htmlFor="">Contact No </label>
          <input
            type="text"
            name="contact"
            value={contact}
            onChange={handleChange}
          />
        </aside>
        <aside>
          <button>Submit</button>
        </aside>
      </form>
    </div>
  );
};

export default Register;
