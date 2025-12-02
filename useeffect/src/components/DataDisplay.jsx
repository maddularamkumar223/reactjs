import React from "react";

const DataDisplay = ({ user, deleteData, handleEdit }) => {
  return (
    <div>
      {user.map((userData) => {
        return (
          <>
            <p>{userData.name}</p>
            <button onClick={() => handleEdit(userData)}>Edit</button>
            <button onClick={() => deleteData(userData.id)}>Delete</button>
          </>
        );
      })}
    </div>
  );
};

export default DataDisplay;
