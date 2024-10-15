import React, { useState } from 'react';
import './MusicianSelect.css'; // Import your CSS for styling

const musiciansData = [
    { id: 1, name: 'Ariana Grande', image: 'https://link_to_ariana_image.jpg', subscribers: '50M' },
    { id: 2, name: 'BTS', image: 'https://link_to_bts_image.jpg', subscribers: '70M' },
    { id: 3, name: 'Ed Sheeran', image: 'https://link_to_ed_image.jpg', subscribers: '60M' },
    { id: 4, name: 'Taylor Swift', image: 'https://link_to_taylor_image.jpg', subscribers: '90M' },
    // Add more musicians as needed
];

const MusicianSelect = () => {
    const [selectedMusicians, setSelectedMusicians] = useState([]);

    const handleMusicianClick = (musician) => {
        if (selectedMusicians.includes(musician)) {
            setSelectedMusicians(selectedMusicians.filter((m) => m !== musician));
        } else if (selectedMusicians.length < 8) {
            setSelectedMusicians([...selectedMusicians, musician]);
        } else {
            alert('You can only select up to 8 musicians.');
        }
    };

    return (
        <div className="musician-select-container">
            <h2>Choose Your Favorite Musicians</h2>
            <div className="musician-grid">
                {musiciansData.map((musician) => (
                    <div
                        key={musician.id}
                        className={`musician-card ${selectedMusicians.includes(musician) ? 'selected' : ''}`}
                        onClick={() => handleMusicianClick(musician)}
                    >
                        <img src={musician.image} alt={musician.name} />
                        <h3>{musician.name}</h3>
                        <p>Subscribers: {musician.subscribers}</p>
                    </div>
                ))}
            </div>
            <button
                className="next-button"
                onClick={() => {
                    if (selectedMusicians.length < 8) {
                        alert('Please select 8 musicians to proceed.');
                    } else {
                        console.log('Selected Musicians:', selectedMusicians);
                        // Proceed to the next page or action
                    }
                }}
            >
                Next
            </button>
        </div>
    );
};

export default MusicianSelect;
