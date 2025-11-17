import React, { useRef, useState } from "react";
import DisplayFormData from "./DisplayFormData";

const UncontrolledFroms = () => {
  let [formData, setFormData] = useState();
  let [isDisplay, setIsDisplay] = useState(false);
  let email = useRef();
  let password = useRef();

  let handleSubmit = (e) => {
    e.preventDefault();
    let details = {
      email: email.current.value,
      password: password.current.value,
    };
    console.log(details);
    setIsDisplay(true);
    setFormData(details);
    email.current.value = "";
    password.current.value = "";
  };
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <article>
          <label htmlFor="">User Name</label>
          <input type="text" ref={email} />
        </article>
        <article>
          <label htmlFor="">Password</label>
          <input type="password" ref={password} />
        </article>
        <article>
          <button>Submit</button>
        </article>
      </form>

      <section>{isDisplay && <DisplayFormData details={formData} />}</section>
    </div>
  );
};

export default UncontrolledFroms;
