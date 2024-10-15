import React from 'react';

const PartyPage = ({ party }) => {
  const handleShare = async () => {
    const partyLink = `https://streamnest.com/party/${party.id}`;
    try {
      await navigator.share({
        title: `Join the party: ${party.name}`,
        url: partyLink,
      });
      alert('Party link shared!');
    } catch (error) {
      console.error("Error sharing party link", error);
      alert('Sharing failed!');
    }
  };

  return (
    <div className="party-page">
      <h1>{party.name}</h1>
      <button onClick={handleShare}>Share Party</button>
      {/* Display party video, chat, etc. */}
    </div>
  );
};

export default PartyPage;
