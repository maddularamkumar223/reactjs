import { createRoot } from "react-dom/client";
import App from "./App";
import MessageProvider from "./components/context/MessageContext";
import ThemeProvider from "./components/context/theme/TheameContext";
import FormProvider from "./components/context/formContext/FormContext";
createRoot(document.getElementById("root")).render(
  <FormProvider>
    <ThemeProvider>
      <MessageProvider>
        <App />
      </MessageProvider>
    </ThemeProvider>
  </FormProvider>
);
