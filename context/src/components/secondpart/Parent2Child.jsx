import React, { useContext } from "react";
import { messageContext } from "../content/MessageContext";

const Parent2Child = () => {
  let data = useContext(messageContext);
  return <div>{data}</div>;
};

export default Parent2Child;
