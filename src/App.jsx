import "./App.css";
import "./styles/styles.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/dashboard/Dashboard";
import NewPatient from "./pages/newPatient/NewPatient";
import Visit from "./pages/patientVist/Visit";
import VisitView from "./pages/visitView/VisitView";
import Login from "./pages/login/Login";
import PrivatePage from "./components/privateRoute/PrivatePage"; // Import PrivatePage component
import Event from "./pages/event/Event";
import Home from "./pages/home/Home";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/dashboard"
          element={
            <PrivatePage>
              <Dashboard />
            </PrivatePage>
          }
        />
        <Route
          path="/newPatient"
          element={
            <PrivatePage>
              <NewPatient />
            </PrivatePage>
          }
        />
        <Route
          path="/visit/:id"
          element={
            <PrivatePage>
              <Visit />
            </PrivatePage>
          }
        />
        <Route
          path="/visitView"
          element={
            <PrivatePage>
              <VisitView />
            </PrivatePage>
          }
        />
        <Route
          path="/event"
          element={
            <PrivatePage>
              <Event />
            </PrivatePage>
          }
        />
      </Routes>
      <ToastContainer />
    </>
  );
};

export default App;
