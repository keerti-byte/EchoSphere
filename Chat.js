import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Chat = ({ partyId, user }) => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  useEffect(() => {
    // Fetch messages for the party
    const fetchMessages = async () => {
      try {
        const res = await axios.get(`/api/parties/${partyId}/messages`);
        setMessages(res.data);
      } catch (error) {
        console.error("Error fetching messages", error);
      }
    };
    
    fetchMessages();
    
    // Optionally, set up a WebSocket connection or polling to listen for new messages
    // const socket = new WebSocket('ws://your-websocket-url');
    // socket.onmessage = (event) => {
    //   const newMsg = JSON.parse(event.data);
    //   setMessages((prev) => [...prev, newMsg]);
    // };

    // Cleanup on unmount
    return () => {
      // socket.close();
    };
  }, [partyId]);

  const handleSendMessage = async () => {
    if (newMessage.trim() === '') return;

    const messageData = {
      content: newMessage,
      userId: user.id,
      username: user.username,
      partyId,
    };

    try {
      await axios.post(`/api/parties/${partyId}/messages`, messageData);
      setMessages((prev) => [...prev, messageData]);
      setNewMessage('');
    } catch (error) {
      console.error("Error sending message", error);
    }
  };

  return (
    <div className="chat">
      <h3>Chat</h3>
      <div className="messages">
        {messages.map((msg, index) => (
          <div key={index} className="message">
            <strong>{msg.username}: </strong>{msg.content}
          </div>
        ))}
      </div>
      <div className="message-input">
        <input 
          type="text" 
          value={newMessage} 
          onChange={(e) => setNewMessage(e.target.value)} 
          placeholder="Type your message..."
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
};

export default Chat;
