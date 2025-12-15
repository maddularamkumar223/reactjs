import axios from "axios";
import { createContext, useState } from "react";

export let authContext = createContext();

let AuthProvider = ({ children }) => {
  let [usersData, setUsersData] = useState({
    users: [],
    singleUser: null,
    isLogin: false,
  });
  let { users, singleUser, isLogin } = usersData;
  let addUser = async (data) => {
    await axios.post("http://localhost:3000/user", data);
  };

  let fetchUsers = async () => {
    let { data } = await axios.get("http://localhost:3000/user");
    setUsersData({ ...usersData, users: data });
  };

  let validate = (email, password) => {
    let data = users.find(
      (value) => value.email === email && value.password == password
    );
    if (data) {
      alert("Login Successful");
      setUsersData({ ...usersData, isLogin: true });
      sessionStorage.setItem("id", data.id);
      sessionStorage.setItem("role", data.role);
    } else {
      alert("Invalid Credentials");
    }
  };
  let userId = sessionStorage.getItem("id");
  let role = sessionStorage.getItem("role");
  return (
    <authContext.Provider
      value={{ addUser, fetchUsers, validate, isLogin, userId, role }}
    >
      {children}
    </authContext.Provider>
  );
};

export default AuthProvider;
