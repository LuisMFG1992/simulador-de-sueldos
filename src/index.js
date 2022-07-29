import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Loggin from "./Pages/Loggin/Loggin/Loggin";
import Resgistration from "./Pages/Loggin/Registration/Resgistration";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/loggin" element={<Loggin />} />
        <Route path="/registration" element={<Resgistration />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
