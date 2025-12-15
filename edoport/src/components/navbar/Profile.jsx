import { useContext, useEffect, useState } from "react";
import CreateNavbar from "./CreateNavbar";
import { useNavigate } from "react-router-dom";
import { authContext } from "./../context/AuthContext";

const Profile = () => {
  let [data, setData] = useState({
    profile: [],
  });

  let { userId } = useContext(authContext);

  let { profile } = data;
  let navigate = useNavigate();
  let profileData = [
    {
      name: "Notification",
      path: "#",
    },
    {
      name: "Log In",
      path: "/login",
    },
    {
      name: "Sign In",
      path: "/register",
    },
  ];
  let profileDataLogin = [
    {
      name: "Notification",
      path: "#",
    },
    {
      name: "Log Out",
      path: "#",
    },
  ];
  let profileDataSetting = () => {
    if (userId) {
      setData({ ...data, profile: profileDataLogin });
    } else {
      setData({ ...data, profile: profileData });
    }
  };

  let removeId = () => {
    sessionStorage.removeItem("id");
    sessionStorage.removeItem("role");
    navigate("/login");
  };
  useEffect(() => {
    profileDataSetting();
  }, [userId]);

  console.log(userId);
  return (
    <section>
      <CreateNavbar data={profile} removeId={removeId} />
    </section>
  );
};

export default Profile;
