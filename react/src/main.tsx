import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Routes from "./routes";

// biome-ignore lint: check it later
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Routes />
  </StrictMode>
);
