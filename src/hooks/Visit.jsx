import axios from "axios";
import { createContext } from "react";
import { useNavigate } from "react-router-dom";
import { alert, success } from "../helper/notification";

export const VisitData = createContext();

export const VisitDataProvider = ({ children }) => {
  const navigate = useNavigate();

  const addVisit = async (newVisit, pateintID) => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_SERVER_URL}/visit`,
        {
          ...newVisit,
          id: pateintID,
        }
      );

      response.data.error
        ? alert(response.data.message)
        : success(response.data.message);
      navigate("/");
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  const VisitView = async (patientId) => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_SERVER_URL}/visit/${patientId}`
      );
      return response.data.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  const editVisit = async (editVistData, patientId, visitId) => {
    try {
      const response = await axios.put(
        `${import.meta.env.VITE_SERVER_URL}/visit/${patientId}/${visitId}`,
        editVistData
      );

      response.data.error
        ? alert(response.data.message)
        : success(response.data.message);
      navigate(`/`);
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  const deleteVisit = async (patientId, visitId) => {
    try {
      const response = await axios.delete(
        `${import.meta.env.VITE_SERVER_URL}/visit/${patientId}/${visitId}`
      );

      response.data.error
        ? alert(response.data.message)
        : success(response.data.message);
      navigate(`/`);
    } catch (error) {
      console.error(error);
      throw error;
    }
  };
  return (
    <VisitData.Provider value={{ addVisit, VisitView, editVisit, deleteVisit }}>
      {children}
    </VisitData.Provider>
  );
};
