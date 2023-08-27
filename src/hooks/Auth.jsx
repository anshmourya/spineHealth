import Axios from "axios";
import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const Auth = createContext();

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [user, setuser] = useState(null);

  const getUser = async () => {
    try {
      const res = await Axios.get(
        `${import.meta.env.VITE_SERVER_URL}/success`,
        {
          withCredentials: true,
        }
      );
      console.log(res.data);
      if (res.data) setuser(res.data.user);
    } catch (error) {
      console.error("Couldn't get user");
      navigate("/login");
    }
  };
  const getLogin = async (user) => {
    console.log("auth", user);
    try {
      const res = await Axios.post(
        `${import.meta.env.VITE_SERVER_URL}/login`,
        {
          username: "spineHealth",
          password: "12345678",
        },
        {
          withCredentials: true,
        }
      );
      if (res.data) navigate("/");
    } catch (error) {
      console.error("Couldn't get user");
      navigate("/login");
    }
  };
  useEffect(() => {
    getUser();
  }, []);

  useEffect(() => {
    console.log(user);
  }, [user]);
  return (
    <Auth.Provider value={{ user, getUser, getLogin }}>
      {children}
    </Auth.Provider>
  );
};
