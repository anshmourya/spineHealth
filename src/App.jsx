import "./App.css";
import Home from "./pages/home/Home";
import { Route, Routes } from "react-router-dom";
import NewPatient from "./pages/newPatient/NewPatient";
import Visit from "./pages/patientVist/Visit";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/newPatient" element={<NewPatient />} />
        <Route path="/visit" element={<Visit />} />
      </Routes>
    </>
  );
};

export default App;
