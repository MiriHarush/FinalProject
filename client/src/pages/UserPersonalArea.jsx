import React, { useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

const UserPersonalArea = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

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
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="user tabs"
        sx={{
          width: '70%',
          backgroundColor: '#fff',
          borderRadius: '15px',
          boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
          alignSelf: 'center',
        }}
      >
        <Tab label="הזמנות" />
        <Tab label="יצירת מרחבים" />
        <Tab label="מרחבים משותפים" />
      </Tabs>
      <TabPanel value={value} index={0}>
        <div
          style={{
            backgroundColor: '#f8f8f8',
            borderRadius: '0 0 15px 15px',
            marginTop: '5px',
            padding: '20px',
            boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
            color: '#333',
          }}
        >
          תוכן מסך הזמנות
        </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <div
          style={{
            backgroundColor: '#f8f8f8',
            borderRadius: '0 0 15px 15px',
            marginTop: '5px',
            padding: '20px',
            boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
            color: '#333',
          }}
        >
          תוכן מסך יצירת מרחבים
        </div>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <div
          style={{
            backgroundColor: '#f8f8f8',
            borderRadius: '0 0 15px 15px',
            marginTop: '5px',
            padding: '20px',
            boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
            color: '#333',
          }}
        >
          תוכן מסך מרחבים משותפים
        </div>
      </TabPanel>
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
