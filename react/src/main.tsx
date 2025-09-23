import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./app.tsx";

// biome-ignore lint: check it later
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
