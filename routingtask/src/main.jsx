import { createRoot } from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.min";
import UserProvider from "./components/context/UserProvider";

createRoot(document.getElementById("root")).render(
  <UserProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </UserProvider>
);
