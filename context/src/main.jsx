import { createRoot } from "react-dom/client";
import App from "./App";
import MessageProvider from "./components/content/MessageContext";
createRoot(document.getElementById("root")).render(
    <MessageProvider>
        <App/>
    </MessageProvider>
);
