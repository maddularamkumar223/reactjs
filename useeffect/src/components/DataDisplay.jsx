import React from "react";

const DataDisplay = ({ user }) => {
  return (
    <div>
      {user.map((userData) => {
        return (
          <>
            <p>{userData.name}</p>
            <button>Edit</button>
            <button>Delete</button>
          </>
        );
      })}
    </div>
  );
};

export default DataDisplay;
