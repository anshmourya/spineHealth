import axios from "axios";
import { createContext } from "react";
import { useNavigate } from "react-router-dom";

export const VisitData = createContext();

export const VisitDataProvider = ({ children }) => {
  const navigate = useNavigate();

  const addVisit = async (newVisit, pateintID) => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_SERVER_URL}/visit`,
        {
          newVisit,
          id: pateintID,
        }
      );

      response.data.error
        ? new Error(response.data.error)
        : console.log(response.data.message);
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  return (
    <VisitData.Provider value={{ addVisit }}>{children}</VisitData.Provider>
  );
};
