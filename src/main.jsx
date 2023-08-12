import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { PatientDataProvider } from "./hooks/Patient.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <PatientDataProvider>
      <App />
    </PatientDataProvider>
  </React.StrictMode>
);
