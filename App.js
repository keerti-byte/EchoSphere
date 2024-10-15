import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


import Navbar from './components/Navbar'; 
import Home from './components/Home'; 
import Terms from './components/Terms'; 
import Privacy from './components/Privacy'; 
import Login from './components/Login'; 
import SignUp from './components/SignUp';
import Profile from './components/Profile'; 



const App = () => {
    return (
        
        <Router>
            <Navbar /> {/* Add the Navbar here so it shows on every page */}
            <Routes>
                {/* Define the routes for each page */}
                <Route path="/" element={<Home />} /> {/* Home page */}
                <Route path="/terms" element={<Terms />} /> {/* Terms page */}
                <Route path="/privacy" element={<Privacy />} /> {/* Privacy page */}
                <Route path="/login" element={<Login />} /> {/* Login page */}
                <Route path="/signup" element={<SignUp />} /> {/* Sign-Up page */}
                <Route path="/profile" element={<Profile />} /> {/* Profile page */}
                {/* Add more routes as necessary */}
            </Routes>
        </Router>
    );
};


export default App;
