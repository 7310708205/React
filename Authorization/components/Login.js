import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const Login = () => {
    localStorage.setItem("Login", true);

    navigate("/");
  };

  useEffect(() => {
    let Login = localStorage.getItem("Login");

    if (Login) {
      navigate("/");
    }
  });

  return (
    <div>
      <lable>
        Username:
        <br />
      </lable>

      <button onClick={Login}>Login</button>
    </div>
  );
};

export default Login;