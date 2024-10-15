import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Optional: for custom styling

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <Link to="/" className="logo">StreamNest</Link>
            </div>
            <ul className="navbar-links">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/terms">Terms and Conditions</Link>
                </li>
                <li>
                    <Link to="/privacy">Privacy Policy</Link>
                </li>
                <li>
                    <Link to="/create-party">Create Party</Link>
                </li>
                <li>
                    <Link to="/party-list">Party List</Link>
                </li>
                <li>
                    <Link to="/profile">Profile</Link>
                </li>
                <li>
                    <Link to="/login">Login</Link>
                </li>
                <li>
                    <Link to="/sign-up">Sign Up</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
