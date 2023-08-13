import "./App.css";
import Home from "./pages/home/Home";
import { Route, Routes } from "react-router-dom";
import NewPatient from "./pages/newPatient/NewPatient";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/newPatient" element={<NewPatient />} />
      </Routes>
    </>
  );
};

export default App;
