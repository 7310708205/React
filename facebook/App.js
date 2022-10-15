import './App.css';
import React, { useState } from 'react';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Message from './pages/message';
import Friend from './pages/friend';
import Home from './pages/Home'
import Video from './pages/video';

function App() {
  const [isLogin, setisLogin] = useState(false);
  const LogIn=()=>{
    setisLogin(true);
  }
  const logout=()=>{
    setisLogin(false);
  }
  return (
    <Router>
      {isLogin?(<Link to="/Home" onClick={logout}>logout</Link>) : (
        <button onClick={LogIn}>login</button>
      )}

      {isLogin ?(
        <div>
          <nav class="nav-bar">
            <Link to="/Home">Home</Link> 
            <Link to="/video">Video</Link> 
            <Link to="/message">message</Link> 
            <Link to="/friend">friends</Link> 
          </nav>
          <Routes>
            <Route path="/Home" element={<Home />}/>
            <Route path="/video" element={<Video />}/>
            <Route path="/message" element={<Message />}/>
            <Route path="/friend" element={<Friend />}/>
          </Routes>
        </div>
      ):(<div>
        <div>Please login!!</div>
        <input placeholder='username' /> <br/>
        <input placeholder='password' />
      </div>)}
    </Router>
  );
}
export default App;