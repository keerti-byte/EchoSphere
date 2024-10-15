import React from 'react';
import './OtherComponent.css'; // Importing the CSS file for styling

const OtherComponent = () => {
  return (
    <div className="other-component">
      <h2>Other Component</h2>
      <p>This is a placeholder for other features or information in your application.</p>
      <div className="feature-list">
        <div className="feature-item">
          <h3>Feature 1</h3>
          <p>Description of Feature 1. Here you can explain the feature in detail.</p>
        </div>
        <div className="feature-item">
          <h3>Feature 2</h3>
          <p>Description of Feature 2. This section could contain useful information.</p>
        </div>
        <div className="feature-item">
          <h3>Feature 3</h3>
          <p>Description of Feature 3. You can showcase more features here.</p>
        </div>
      </div>
      <button onClick={() => alert('Feature is clicked!')}>Learn More</button>
    </div>
  );
};

export default OtherComponent;
