import { createContext, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const Patient = createContext();

export const PatientDataProvider = ({ children }) => {
  const navigate = useNavigate();
  const [patientData, setPaientData] = useState([]);

  const addPatient = async (e, NewPatient) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_SERVER_URL}/patient`,
        NewPatient
      );

      response.data.error ? new Error(response.data.error) : navigate("/");
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  const getAllPatients = async () => {
    console.log("calling getAllPatients");
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_SERVER_URL}/patient`
      );

      setPaientData(response.data.data);
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  const deletePatient = async (pateintID) => {
    try {
      const response = await axios.delete(
        `${import.meta.env.VITE_SERVER_URL}/patient/${pateintID}`
      );

      response.data.error ? new Error(response.data.error) : getAllPatients();
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  return (
    <Patient.Provider
      value={{ getAllPatients, patientData, deletePatient, addPatient }}
    >
      {children}
    </Patient.Provider>
  );
};
