import React, { useContext } from "react";
import { messageContext } from "../context/MessageContext";

const Child3 = ({ message }) => {
  let data = useContext(messageContext);
  console.log(data);
  return (
    <div>
      {message}
      <p>{data}</p>
    </div>
  );
};

export default Child3;
