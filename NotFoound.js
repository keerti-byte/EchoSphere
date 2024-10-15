import React from 'react';
import { useHistory } from 'react-router-dom'; // Import useHistory for navigation

const NotFound = () => {
    const history = useHistory();

    return (
        <div style={styles.container}>
            <h1 style={styles.heading}>404 Not Found</h1>
            <p style={styles.message}>Sorry, the page you are looking for does not exist.</p>
            <button style={styles.button} onClick={() => history.push('/')}>
                Go to Home
            </button>
        </div>
    );
};

// Styles for the component
const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        textAlign: 'center',
        backgroundColor: '#6A1B9A', // Deep Purple background
        color: 'white',
        padding: '20px',
    },
    heading: {
        fontSize: '48px',
        margin: '20px 0',
    },
    message: {
        fontSize: '20px',
        marginBottom: '20px',
    },
    button: {
        padding: '10px 20px',
        fontSize: '16px',
        backgroundColor: '#00BFFF', // Bright Teal for button
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        transition: 'background-color 0.3s ease',
    },
};

// Add hover effect for button
styles.button:hover = {
    backgroundColor: '#008CBA', // Darker teal for hover effect
};

export default NotFound;
