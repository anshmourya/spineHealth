import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter, Routes } from "react-router-dom";
//constext api
import { PatientDataProvider } from "./hooks/Patient.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <PatientDataProvider>
        <App />
      </PatientDataProvider>
    </BrowserRouter>
  </React.StrictMode>
);
