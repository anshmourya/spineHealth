import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { alert, success } from "../helper/notification";

export const Patient = createContext();

export const PatientDataProvider = ({ children }) => {
  const navigate = useNavigate();
  const [patientData, setPaientData] = useState([]);

  const addPatient = async (NewPatient) => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_SERVER_URL}/patient`,
        NewPatient
      );

      response.data.error
        ? new Error(response.data.error)
        : success(response.data.message);
      navigate("/");
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

  const editPatient = async (editPatientData) => {
    try {
      const response = await axios.put(
        `${import.meta.env.VITE_SERVER_URL}/patient`,
        editPatientData
      );

      response.data.error
        ? new Error(response.data.error)
        : success(response.data.message);
      navigate("/");
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
      success(response.data.message);
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  return (
    <Patient.Provider
      value={{
        getAllPatients,
        patientData,
        deletePatient,
        addPatient,
        editPatient,
      }}
    >
      {children}
    </Patient.Provider>
  );
};