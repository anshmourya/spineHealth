import Axios from "axios";
import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { alert } from "../helper/notification";

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
      if (res.data) setuser(res.data.user);
    } catch (error) {
      console.error("Couldn't get user");
      navigate("/login");
    }
  };
  const getLogin = async (user) => {
    try {
      const res = await Axios.post(
        `${import.meta.env.VITE_SERVER_URL}/login`,
        {
          username: user.username,
          password: user.password,
        },
        {
          withCredentials: true,
        }
      );
      alert(res.data.message);
      if (res.data) navigate("/dashboard");
    } catch (error) {
      console.error("Couldn't get user");
      alert("Couldn't get user try again");
      navigate("/login");
    }
  };
  // useEffect(() => {
  //   getUser();
  // }, []);

  return (
    <Auth.Provider value={{ user, getUser, getLogin }}>
      {children}
    </Auth.Provider>
  );
};
