import axios from "axios";
import { createContext, useState } from "react";

export let userContext = createContext();

let UserProvider = ({ children }) => {
  let [userDetails, setUserDetails] = useState({
    users: [],
    singleUser: {},
  });

  let { users, singleUser } = userDetails;
  console.log(userDetails);

  let addUser = async (data) => {
    await axios.post("http://localhost:3000/users", data);
  };

  let fetchUser = async () => {
    let { data } = await axios.get("http://localhost:3000/users");
    console.log(data);
    setUserDetails({ ...userDetails, users: data });
  };

  let deleteData = async (id) => {
    await axios.delete(`http://localhost:3000/users/${id}`);
    fetchUser();
  };

  let getSingleUser = async (id) => {
    let { data } = await axios.get(`http://localhost:3000/users/${id}`);
    setUserDetails({ ...userDetails, singleUser: data });
  };

  let editData = async (data) => {
    await axios.put(`http://localhost:3000/users/${singleUser.id}`, data);
  };
  return (
    <userContext.Provider
      value={{
        addUser,
        fetchUser,
        userDetails,
        deleteData,
        getSingleUser,
        singleUser,
        editData,
      }}
    >
      {children}
    </userContext.Provider>
  );
};

export default UserProvider;
