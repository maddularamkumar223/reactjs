import { createRoot } from "react-dom/client";
import App from "./App";
import MessageProvider from "./components/context/MessageContext";
import ThemeProvider from "./components/context/theme/TheameContext";
createRoot(document.getElementById("root")).render(
  <ThemeProvider>
    <MessageProvider>
      <App />
    </MessageProvider>
  </ThemeProvider>
);
