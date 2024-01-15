import React, { useState, useEffect } from 'react';
import { Container, Typography, TextField, List, ListItem, ListItemText, Button } from '@mui/material';
import io from "socket.io-client";

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [socket, setSocket] = useState(null);
  const [isUserMessage, setIsUserMessage] = useState(true);

  useEffect(() => {
    // Connect to the WebSocket server
    const newSocket = io('http://localhost:3001');
    setSocket(newSocket);

    // Cleanup on component unmount
    return () => {
      newSocket.disconnect();
    };
  }, []);

  useEffect(() => {
    if (socket) {
      // Listen for incoming messages
      socket.on('message', (message) => {
        setMessages((prevMessages) => [...prevMessages, { ...message, isUserMessage }]);
      });

      // Listen for user connection and disconnection
      socket.on('user-connected', (username) => {
        setMessages((prevMessages) => [
          ...prevMessages,
          { username: 'System', text: `${username} connected.`, isUserMessage: false },
        ]);
      });

      socket.on('user-disconnected', (username) => {
        setMessages((prevMessages) => [
          ...prevMessages,
          { username: 'System', text: `${username} disconnected.`, isUserMessage: false },
        ]);
      });
    }
  }, [socket]);

  const handleSendMessage = () => {
    if (socket && newMessage) {
      // Emit the message to the server
      socket.emit('message', { text: newMessage, isUserMessage });

      // Clear the input field
      setNewMessage('');
    }
  };

  return (
    <Container>
      <Typography variant="h1" align="center" gutterBottom>
        General Chat
      </Typography>

      <List style={{ maxHeight: '300px', overflowY: 'auto', marginBottom: '20px' }}>
        {messages.map((message, index) => (
          <ListItem key={index}>
            <ListItemText primary={`${message.username || 'System'}: ${message.text}`} />
          </ListItem>
        ))}
      </List>

      <TextField
        label="Type your message..."
        variant="outlined"
        fullWidth
        multiline
        rows={3}
        value={newMessage}
        onChange={(e) => setNewMessage(e.target.value)}
        style={{ marginBottom: '10px' }}
      />

      <Button variant="contained" color="primary" onClick={handleSendMessage}>
        Send
      </Button>
    </Container>
  );
};

export default Chat;
