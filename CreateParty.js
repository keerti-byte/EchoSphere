import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CreateParty = ({ user }) => {
  const [partyName, setPartyName] = useState('');
  const [partyType, setPartyType] = useState('public');
  const [description, setDescription] = useState('');
  const [chatEnabled, setChatEnabled] = useState(true);
  const [musicians, setMusicians] = useState([]);
  const [selectedMusician, setSelectedMusician] = useState('');
  const [playlist, setPlaylist] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [duration, setDuration] = useState(30);
  const [scheduleDate, setScheduleDate] = useState('');
  const [scheduleTime, setScheduleTime] = useState('');
  const [partyLink, setPartyLink] = useState('');

  useEffect(() => {
    const fetchMusicians = async () => {
      try {
        const res = await axios.get('/api/musicians');
        setMusicians(res.data);
      } catch (error) {
        console.error("Error fetching musicians", error);
      }
    };
    fetchMusicians();
  }, []);

  const handleSearch = async () => {
    try {
      const res = await axios.get(`/api/videos/search?query=${searchQuery}`);
      setPlaylist(res.data.videos);
    } catch (error) {
      console.error("Error searching for videos", error);
    }
  };

  const handleCreateParty = async () => {
    const newParty = {
      name: partyName,
      type: partyType,
      description,
      chatEnabled,
      musician: selectedMusician,
      playlist,
      duration,
      isPremiumOnly: partyType === 'premium',
      isPrivate: partyType === 'private',
      schedule: scheduleDate && scheduleTime ? new Date(`${scheduleDate}T${scheduleTime}`) : null,
    };

    try {
      const res = await axios.post('/api/parties', newParty);
      setPartyLink(`https://streamnest.com/party/${res.data.id}`); // Assuming the backend returns the party id
      alert('Party created successfully!');
    } catch (error) {
      console.error("Error creating party", error);
      alert('Failed to create party');
    }
  };

  const handleShare = async () => {
    try {
      await navigator.share({
        title: `Join my party: ${partyName}`,
        url: partyLink,
      });
      alert('Party link shared!');
    } catch (error) {
      console.error("Error sharing party link", error);
      alert('Sharing failed!');
    }
  };

  return (
    <div className="create-party">
      <h2>Create a New Party</h2>
      {/* Form inputs for party details */}
      <button onClick={handleCreateParty}>Create Party</button>

      {/* Share Button */}
      {partyLink && (
        <button onClick={handleShare}>Share Party</button>
      )}
    </div>
  );
};

export default CreateParty;
