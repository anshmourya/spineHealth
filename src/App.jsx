import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import Home from "./pages/home/Home";
import { Route, Routes } from "react-router-dom";
import NewPatient from "./pages/newPatient/NewPatient";
import Visit from "./pages/patientVist/Visit";
import VisitView from "./pages/visitView/VisitView";
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/newPatient" element={<NewPatient />} />
        <Route path="/visit" element={<Visit />} />
        <Route path="/visitView" element={<VisitView />} />
      </Routes>
      <ToastContainer />
    </>
  );
};

export default App;
