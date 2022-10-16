import React from "react";
//import { useNavigate} from "react-router-dom";

const Login = () => {
  return (
    <div className="class">
      <h2>Login Page</h2>
      <form>
        <label>
          <p>Username</p>
          <input type="text" />
        </label>
        <label>
          <p>Password</p>
          <input type="password" />
        </label>
        <br />
        <br />
        <button onClick={Login}>Login</button>
      </form>
    </div>
  );
};

export default Login;
