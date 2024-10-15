import React, { useState } from 'react';
import './UserProfile.css'; // Assuming you have a CSS file for styles

const UserProfile = () => {
  // Sample state for user profile data
  const [username, setUsername] = useState('JohnDoe');
  const [bio, setBio] = useState('Music lover and streamer');
  const [profilePicture, setProfilePicture] = useState(null);

  // Handler for file upload
  const handleProfilePictureChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setProfilePicture(URL.createObjectURL(file));
    }
  };

  // Handler for saving profile changes
  const handleSave = () => {
    // Here you would typically send the updated data to your backend
    console.log('Profile updated:', { username, bio, profilePicture });
    alert('Profile updated successfully!');
  };

  return (
    <div className="user-profile">
      <h2>User Profile</h2>
      <div className="profile-picture">
        {profilePicture ? (
          <img src={profilePicture} alt="Profile" />
        ) : (
          <div className="placeholder">No Image</div>
        )}
        <input
          type="file"
          accept="image/*"
          onChange={handleProfilePictureChange}
        />
      </div>
      <div className="profile-info">
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <label>
          Bio:
          <textarea
            value={bio}
            onChange={(e) => setBio(e.target.value)}
          ></textarea>
        </label>
        <button onClick={handleSave}>Save Changes</button>
      </div>
    </div>
  );
};

export default UserProfile;
