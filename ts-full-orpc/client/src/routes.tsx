import { BrowserRouter, Routes as ReactRoutes, Route } from "react-router-dom";
import MainPage from "./pages/main.page";
import TodoPage from "./pages/todo.page";
import "./app.css";

export default function Routes() {
  return (
    <BrowserRouter>
      <ReactRoutes>
        <Route element={<MainPage />} path="/" />
        <Route element={<TodoPage />} path="/todo" />
      </ReactRoutes>
    </BrowserRouter>
  );
}
