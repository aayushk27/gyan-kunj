import Form from './components/Form';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './Pages/Home';
import Loginpage from './Pages/Loginpage';
import Signup from './Pages/Signup';
import './App.css';

function App() {
  return (
    // <BrowserRouter>
    //   <Routes>
    //     <Route exact path="/" component={Home} />
    //     <Route path="/login" component={Loginpage} />
    //     <Route path="/signup" component={Signup} />
    //   </Routes>
    // </BrowserRouter>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/login" element={<Loginpage />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
    // <Home />
    // <div className="app-container">
    // {/* <Loginpage /> */}
    // {/* <Signup /> */}
    // {/* <Navbar /> */}
    // {/* <Form /> */}
    // {/* <Footer /> */}
    // </div>
  );
}

export default App;
