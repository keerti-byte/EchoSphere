import React from 'react';
import axios from 'axios';

const PartyList = ({ parties }) => {
  const handleShare = async (partyLink) => {
    try {
      await navigator.share({
        title: 'Join this party!',
        url: partyLink,
      });
      alert('Party link shared!');
    } catch (error) {
      console.error("Error sharing party link", error);
      alert('Sharing failed!');
    }
  };

  return (
    <div className="party-list">
      <h2>Available Parties</h2>
      {parties.map((party) => (
        <div key={party.id} className="party-item">
          <h3>{party.name}</h3>
          <button onClick={() => handleShare(`https://streamnest.com/party/${party.id}`)}>Share Party</button>
          {/* Additional party details and join button here */}
        </div>
      ))}
    </div>
  );
};

export default PartyList;
