import { Route, BrowserRouter, Routes as ReactRoutes } from "react-router-dom";
import MainPage from "./pages/main.page";
import AboutPage from "./pages/about.page";
import "./app.css"

export default function Routes() {
    return (
        <BrowserRouter>
            <ReactRoutes>
                <Route path="/" element={<MainPage />} />
                <Route path="/about" element={<AboutPage />} />
            </ReactRoutes>
        </BrowserRouter>
    )
}