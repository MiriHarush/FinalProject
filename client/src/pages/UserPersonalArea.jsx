import React from 'react';
import UserAsideTabs from '../components/UserAsideTabs';
import Box from '@mui/material/Box';

const UserPersonalArea = () => {

  const userDetails = {
    name: 'שם משתמש',
    email: 'user@example.com',
    otherDetails: 'פרטים נוספים כגון תפקיד, עיר, וכדומה',
  };

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
        <h2 style={{ color: '#333' }}>ברוכים הבאים, {userDetails.name}!</h2>
        <p style={{ color: '#666' }}>Email: {userDetails.email}</p>
        <p style={{ color: '#666' }}>{userDetails.otherDetails}</p>
      </Box>
      <UserAsideTabs/>
    </Box>
  );
};

const TabPanel = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`user-tabpanel-${index}`}
      aria-labelledby={`user-tab-${index}`}
      {...other}
    >
      {value === index && <Box>{children}</Box>}
    </div>
  );
}

export default UserPersonalArea;
