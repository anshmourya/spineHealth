import React, { useContext, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { Auth } from "../../hooks/Auth";

function PrivatePage({ children }) {
  const { user, getUser } = useContext(Auth);
  console.log(user);
  useEffect(() => {
    !user && getUser();
  }, []);
  return <>{user ? children : <h1>no data</h1>}</>;
}

export default PrivatePage;
