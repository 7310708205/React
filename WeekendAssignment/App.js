import './App.css';
import React, {useState} from 'react';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Dashboard from './dashboard/Dasboard';
import client from './dashboard/client';

function App() {
  const [isLogin, setisLogin] = useState(false);
  const Login=()=>{
    setisLogin(true);
  }
  const logout=()=>{
    setisLogin(false);
  }
  return (
    <Router>
       {isLogin?(<Link to="/Home" onClick={logout}>logout</Link>) : (
        <button onClick={Login}>login</button>
      )}

      {isLogin ?(
      <div class="nav-bar">
        <nav>
          {/* <Link to="/Login" class="login">Login</Link>  */}
          <Link to="/dashboard" class="login">Dashboard</Link> 
          <Link to="/client" class="login">Data</Link> 
        </nav>
        <Routes>
          {/* <Route path="/Login" element={<Login />}/> */}
          <Route path="/Dashboard" element={<Dashboard />}/>
          <Route path="client" element={<client/>}/>
        </Routes>
      </div>
      ) :(<div className="class">
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
    </div>)}</Router>
  );
}

export default App;
