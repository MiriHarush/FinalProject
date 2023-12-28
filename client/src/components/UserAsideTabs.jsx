import React, { useState } from 'react';
import TabContext from '@mui/lab/TabContext';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import TabPanel from '@mui/lab/TabPanel';
import Typography from '@mui/material/Typography';

const UserAsideTabs = () => {
  const [value, setValue] = useState('0');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <TabContext value={value}>
      <Box>
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"  // Make the tabs scrollable
          scrollButtons="auto"  // Automatically show/hide scroll buttons
          aria-label="user tabs"
          sx={{
            width: '70%',
            backgroundColor: '#fff',
            borderRadius: '15px',
            boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
            alignSelf: 'center',
            overflowX: 'auto',  // Allow horizontal scrolling
          }}
        >
          <Tab label="Invitations" value="0" />
          <Tab label="My spaces" value="1" />
          <Tab label="Spaces I In" value="2" />
        </Tabs>

        {/* Panel for the first tab */}
        <TabPanel value="0">
          <Typography variant="h6">תוכן מסך הזמנות</Typography>
          <p>Additional content goes here...</p>
        </TabPanel>

        {/* Additional TabPanel components for other tabs... */}
      </Box>
    </TabContext>
  );
};

export default UserAsideTabs;
