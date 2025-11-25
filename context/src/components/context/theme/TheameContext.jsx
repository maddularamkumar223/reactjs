import { createContext, useState } from "react";

export let themeContext = createContext();
let ThemeProvider = ({ children }) => {
  let [theme, setTheme] = useState(false);
  let dark = {
    backgroundColor: "black",
    color: "white",
  };
  let light = {
    backgroundColor: "white",
    color: "black",
  };
  let toggleTheme = () => {
    setTheme(!theme);
  };
  return (
    <themeContext.Provider value={{ dark, light, toggleTheme, theme }}>
      {children}
    </themeContext.Provider>
  );
};
export default ThemeProvider;
