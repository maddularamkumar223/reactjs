import React, { useContext, useEffect } from "react";
import { userContext } from "./context/UserProvider";

const DisplayData = () => {
  let { userDetails, fetchUser, deleteData, getSingleUser } =
    useContext(userContext);
  console.log(userDetails);
  useEffect(() => {
    fetchUser();
  }, []);
  return (
    <div>
      {userDetails.users.map((value) => {
        return (
          <>
            <p>Name: {value.name}</p>
            <button
              onClick={() => {
                getSingleUser(value.id);
              }}
            >
              Edit
            </button>
            <button
              onClick={() => {
                deleteData(value.id);
              }}
            >
              Delete
            </button>
          </>
        );
      })}
    </div>
  );
};

export default DisplayData;
