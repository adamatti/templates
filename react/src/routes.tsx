import { BrowserRouter, Routes as ReactRoutes, Route } from "react-router-dom";
import AboutPage from "./pages/about.page";
import MainPage from "./pages/main.page";
import "./app.css";

export default function Routes() {
  return (
    <BrowserRouter>
      <ReactRoutes>
        <Route element={<MainPage />} path="/" />
        <Route element={<AboutPage />} path="/about" />
      </ReactRoutes>
    </BrowserRouter>
  );
}
