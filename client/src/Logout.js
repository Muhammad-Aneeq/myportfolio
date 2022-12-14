import React, { useEffect, useContext } from "react";
import { UserContext } from "./App";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();
  const { state, dispatch } = useContext(UserContext);
  useEffect(() => {
    fetch("/logout", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      credentials: "include",
    })
      .then((res) => {
        dispatch({ type: "USER", payload: false });
        navigate("/login");
        if (!res.status === 200) {
          throw new Error(res.error);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  });
  return <div></div>;
};

export default Logout;
