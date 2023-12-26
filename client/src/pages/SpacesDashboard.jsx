import React, { useState } from 'react';
import { Grid, Typography, Tooltip, Fab } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import SpaceModel from '../components/SpaceModal';
import SpaceDashboard from './SpaceDashboard';
import AddSpace from './AddSpace';
import AddCourse from './AddCourse'; // import the AddCourse component

const SpacesDashboard = () => {
  const [selectedSpace, setSelectedSpace] = useState(null);
  const [isAddingSpace, setIsAddingSpace] = useState(false);

  const spaces = [
    { id: 1, name: 'Space 1', manager: 'Manager 1' },
    { id: 2, name: 'Space 2', manager: 'Manager 2' },
  ];

  const handleSpaceClick = (space) => {
    setSelectedSpace(space);
    setIsAddingSpace(false); // Close the AddSpace form when a space is clicked
  };

  const handleAddSpaceClick = () => {
    console.log('add space click');
    setSelectedSpace(null); // Close the selected space details
    setIsAddingSpace(!isAddingSpace); // Toggle the AddSpace form
  };

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Typography variant="h3">Spaces Dashboard</Typography>
      </Grid>
      {spaces.map((space) => (
        <Grid key={space.id} item xs={12} sm={6} md={4} lg={3}>
          <SpaceModel {...space} onClick={() => handleSpaceClick(space)} />
        </Grid>
      ))}
      <Grid container item xs={12} alignItems="center" spacing={1}>
        <Grid item>
          <Tooltip title="Add New Space" placement="right">
            <Typography variant="h6">Add New Space</Typography>
            <Fab color="primary" aria-label="add" onClick={handleAddSpaceClick}>
              <AddIcon />
            </Fab>
          </Tooltip>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        {selectedSpace && <SpaceDashboard space={selectedSpace} />}
        {isAddingSpace && <AddSpace onAddSpace={() => setIsAddingSpace(false)} />}
        {selectedSpace && !isAddingSpace && <AddCourse spaceId={selectedSpace?.id} />}
      </Grid>
    </Grid>
  );
};

export default SpacesDashboard;
