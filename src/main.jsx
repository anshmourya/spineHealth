import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
//constext api
import { PatientDataProvider } from "./hooks/Patient.jsx";
import { VisitDataProvider } from "./hooks/Visit.jsx";
import { AuthProvider } from "./hooks/Auth.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <PatientDataProvider>
          <VisitDataProvider>
            <App />
          </VisitDataProvider>
        </PatientDataProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
