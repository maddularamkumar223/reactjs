import { createContext } from "react";

export let messageContext = createContext();
let message = "Some People Buy a new Vehicle from the context"
let MessageProvider = ({ children }) => {
  return <messageContext.Provider value={message}>{children}</messageContext.Provider>;
};
export default MessageProvider;
