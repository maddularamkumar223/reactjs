import { redirect } from "react-router-dom";
import { isAuth } from "./auth";

export let protectedRoutes = () => {
  if (!isAuth()) {
    return redirect("/login");
  }
  return null;
};
