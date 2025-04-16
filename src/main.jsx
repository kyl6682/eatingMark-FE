import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { PinnedProvider } from "./contexts/PinnedContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <PinnedProvider>
      <App />
    </PinnedProvider>
  </StrictMode>
);
