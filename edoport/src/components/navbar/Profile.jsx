import React from "react";
import CreateNavbar from "./CreateNavbar";

const Profile = () => {
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
    {
      name: "Logout",
      path: "#",
    },
  ];
  return (
    <section>
      <CreateNavbar data={profileData} />
    </section>
  );
};

export default Profile;
