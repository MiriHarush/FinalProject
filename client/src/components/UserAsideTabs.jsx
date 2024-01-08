import React, { useState } from 'react';
import TabContext from '@mui/lab/TabContext';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import TabPanel from '@mui/lab/TabPanel';
import Typography from '@mui/material/Typography';
import InvitationModal from '../components/InvitationModal';
import SpacesDashboard from '../pages/SpacesDashboard';
import Invitations from './Invitations';


const UserAsideTabs = () => {

  const inviteData = { instructorName: "aaa", courseName: "bbb" };

  const [value, setValue] = useState('0');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    // <TabContext value={value}>
    //   <Box>
    //     <Tabs
    //       value={value}
    //       onChange={handleChange}
    //       variant="scrollable"  // Make the tabs scrollable
    //       scrollButtons="auto"  // Automatically show/hide scroll buttons
    //       aria-label="user tabs"
    //       sx={{
    //         width: '70%',
    //         backgroundColor: '#fff',
    //         borderRadius: '15px',
    //         boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
    //         alignSelf: 'center',
    //         overflowX: 'auto',  // Allow horizontal scrolling
    //       }}
    //     >
    //       <Tab label="Invitations" value="0" />
    //       <Tab label="My spaces" value="1" />
    //     </Tabs>

    //     {/* Panel for the first tab */}
    //     <TabPanel value="0">
    //       <Invitations/>
    //     </TabPanel>

    //     <TabPanel value="1">
    //       <SpacesDashboard />
    //     </TabPanel>

    //   </Box>
    // </TabContext>


    <TabContext value={value}>
  <Box >
    <Tabs
      value={value}
      onChange={handleChange}
      // variant="scrollable"
      scrollButtons="auto"
      aria-label="user tabs"
      sx={{
        width: '100%',
        backgroundColor: '#fff',
        borderRadius: '15px',
        boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
        alignSelf: 'center',
        overflowX: 'auto',
      }}
     > 
      <Tab label="Invitations" value="0" />
      <Tab label="My spaces" value="1" />
    </Tabs>

    <div style={{ padding: '20px', marginTop: '20px', backgroundColor: '#f8f8f8', borderRadius: '15px', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)' }}>
      {/* Panel for the first tab */}
      {value === '0' && <Invitations />}
      {/* Panel for the second tab */}
      {value === '1' && <SpacesDashboard />}
    </div>
  </Box>
 </TabContext>

  

  );
};

export default UserAsideTabs;
