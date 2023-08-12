import { createContext, useState } from "react";
import axios from "axios";
export const Patient = createContext();

export const PatientDataProvider = ({ children }) => {
  const [patientData, setPaientData] = useState(null);

  const getAllPatients = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_SERVER_URL}/patient`
      );

      setPaientData(response.data.data);
    } catch (error) {
      console.error(error);
      throw new Error(error);
    }
  };

  return (
    <Patient.Provider value={{ getAllPatients, patientData }}>
      {children}
    </Patient.Provider>
  );
};
