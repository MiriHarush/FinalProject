import React, { useContext } from 'react';
import UserAsideTabs from '../components/UserAsideTabs';
import Box from '@mui/material/Box';
import { UserContext } from '../context/users.context';


const UserPersonalArea = () => {
  const { currentUser } = useContext(UserContext);
  
  console.log('in current', currentUser);

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: '30px',
        fontFamily: 'Arial, sans-serif',
      }}
    >
      <Box
        sx={{
          backgroundColor: '#f8f8f8',
          padding: '20px',
          borderRadius: '15px',
          boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
          marginBottom: '20px',
          textAlign: 'center',
        }}
      >
        <h2 style={{ color: '#333' }}>WELCOME, {currentUser.name}!</h2>
        <p style={{ color: '#666' }}>Email: {currentUser.email}</p>
        <p style={{ color: '#666' }}>User Name: {currentUser.userName}</p>
        <p style={{ color: '#666' }}>Phone: {currentUser.phone}</p>
        <p style={{ color: '#666' }}>How to contact? {currentUser.contact}</p>

      </Box>
      <UserAsideTabs/>
    </Box>
  );
};



export default UserPersonalArea;
