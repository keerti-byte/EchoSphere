import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; // Include a CSS file for styling

const Home = () => {
    return (
        <div className="home-container">
            <header className="home-header">
                <h1>Welcome to StreamNest</h1>
                <p>Your one-stop platform for streaming music videos and joining live parties!</p>
            </header>

            <section className="home-features">
                <h2>Features</h2>
                <ul>
                    <li>Stream your favorite musicians' music videos</li>
                    <li>Join live streaming parties with friends and other fans</li>
                    <li>Create and host your own music streaming parties</li>
                    <li>Chat with other users during the parties</li>
                    <li>Follow your favorite musicians and get updates on their new releases</li>
                </ul>
            </section>

            <section className="home-actions">
                <h2>Get Started</h2>
                <Link to="/login" className="btn">Log In</Link>
                <Link to="/signup" className="btn">Sign Up</Link>
            </section>

            <footer className="home-footer">
                <p>&copy; 2024 StreamNest. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Home;
