import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import Home from "./pages/home/Home";
import { Route, Routes } from "react-router-dom";
import NewPatient from "./pages/newPatient/NewPatient";
import Visit from "./pages/patientVist/Visit";
import VisitView from "./pages/visitView/VisitView";
import { ToastContainer } from "react-toastify";
import Login from "./pages/login/Login";
import PrivatePage from "./components/privateRoute/PrivatePage"; // Import PrivatePage component
import Event from "./pages/event/Event";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/"
          element={
            <PrivatePage>
              <Home />
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
