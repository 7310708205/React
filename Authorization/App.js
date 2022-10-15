import './App.css';
import React from 'react';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import About from './components/About';
import Home from './components/Home';
import Login from './components/Login';
import Protected from './components/Protected';
import Profile from './components/Profile';

function App() {
  return (
    <Router>
      <nav>
        <Link to="/Home">Home</Link>
        <Link to="/About">About</Link>
        <Link to="/Login">Login</Link>
        <Link to="/Profile">Profile</Link>
      </nav>
      <Routes>
        <Route path="/Home" element={<Protected Component={Home}/>}/>
        <Route path="/About" element={<Protected Component={About}/>}/>
        <Route path="/Profile" element={<Protected Component={Profile}/>}/>
        <Route path="/Login" element={<Login/>}/>
      </Routes>
    </Router>
  );
}
export default App;

