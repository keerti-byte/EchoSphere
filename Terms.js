// src/components/Terms.js
import React from 'react';
import './styles.css'; // Assuming you have a CSS file for styling

const Terms = () => {
  return (
    <div className="terms-container">
      <h1>Terms and Conditions</h1>
      <h2>Introduction</h2>
      <p>
        These terms and conditions govern your use of our website. By using our website, you accept these terms in full. 
        If you disagree with these terms or any part of these terms, you must not use our website.
      </p>

      <h2>License to Use Website</h2>
      <p>
        Unless otherwise stated, we or our licensors own the intellectual property rights in the website and material on the website. 
        Subject to the license below, all these intellectual property rights are reserved.
      </p>

      <h2>Acceptable Use</h2>
      <p>
        You must not use our website in any way that causes, or may cause, damage to the website or impairment of the availability 
        or accessibility of the website; or in any way which is unlawful, illegal, fraudulent or harmful, or in connection with 
        any unlawful, illegal, fraudulent or harmful purpose or activity.
      </p>

      <h2>Limitations of Liability</h2>
      <p>
        We will not be liable to you in respect of any losses arising out of any event or events beyond our reasonable control.
      </p>

      <h2>Variation</h2>
      <p>
        We may revise these terms and conditions from time to time. Revised terms and conditions will apply to the use of our website 
        from the date of the publication of the revised terms and conditions on our website.
      </p>

      <h2>Governing Law</h2>
      <p>
        These terms and conditions will be governed by and construed in accordance with the laws of [Your Country], and any disputes 
        relating to these terms and conditions will be subject to the exclusive jurisdiction of the courts of [Your Country].
      </p>
    </div>
  );
};

export default Terms;
