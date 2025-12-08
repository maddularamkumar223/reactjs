import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  let navigate = useNavigate();
  let navigateLayout = () => {
    // navigate("/layout");
    navigate(-2);
  };
  return (
    <div>
      Home
      <button onClick={navigateLayout}>Back</button>
    </div>
  );
};

export default Home;
