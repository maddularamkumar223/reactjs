export let isAuth = () => {
  return !!sessionStorage.getItem("id");
};
