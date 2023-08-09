import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Loginpage from './Pages/Loginpage';
import Signup from './Pages/Signup';
import Dashboard from './Pages/Dashboard';
import './App.css';

function App() {
  const [user, setUser] = useState('Aayush');

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route
          path="/login"
          element={<Loginpage user={user} setUser={setUser} />}
        />
        <Route
          path="/signup"
          element={<Signup user={user} setUser={setUser} />}
        />
        <Route path="/dashboard" element={<Dashboard user={user}/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
