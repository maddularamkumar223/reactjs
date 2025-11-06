import React, { useState } from "react";
import ClassProps from "./ClassProps";
import Data from "./Data";
import FunctionProp from "./FunctionProp";
import DetailsData from "./DetailsData";
import Counter from "./Counter";
import DefaultProps from "./DefaultProps";
import Parent from "./Parent";

const App = () => {
  // let [count, setCount] = useState(0);

  // let inc = () => setCount(count + 1);
  // let dec = () => count > 0 && setCount(count - 1);
  // let details = {
  //   userName: "Nithesh",
  //   isAvailable: false,
  // };

  // let employDetails = [
  //   {
  //     employName: "Vinay",
  //     isAvailable: true,
  //   },
  //   {
  //     employName: "Abhinav",
  //     isAvailable: false,
  //   },
  //   {
  //     employName: "Prashanth",
  //     isAvailable: false,
  //   },
  //   {
  //     employName: "Naveen",
  //     isAvailable: true,
  //   },
  // ];
  return (
    <div>
      {/* <ClassProps userName="Ravi" age={23} />
      <ClassProps userName="Nitesh" age={30} />
      <ClassProps userName="Shankanth" age={60} />
      <Data /> */}
      {/* 
      <FunctionProp userName="Ravi" age={30} />
      <DetailsData userDetails={details} />
      <DetailsData employeesData={employDetails}/> */}

      {/* <Counter count={count} inc={inc} dec={dec} /> */}
      {/* <Counter countData={{ count, inc, dec }} /> */}
      {/* <DefaultProps userName="Ravi" /> */}
      {/* <DefaultProps /> */}
      {/* <DefaultProps userName = "Priya" /> */}
      <Parent userName = "Ravi" />
    </div>
  );
};

export default App;
