import React, { useContext } from "react";
import { formContext } from "../../context/formContext/FormContext";

const Login = () => {
  let { email, password, handleChange, handleSubmit } = useContext(formContext);
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <aside>
          <label htmlFor="">Username or Email</label>
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
            type="text"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </aside>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Login;
