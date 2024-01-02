import React, { useState, useContext, useEffect } from 'react';
import { Grid, Typography, Tooltip, Fab, Container } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import SpaceModel from '../components/SpaceModal';
import SpaceDashboard from './SpaceDashboard';
import AddSpace from './AddSpace';
import { SpaceContext } from '../context/spaces.context';
import { useNavigate } from 'react-router-dom';


const SpacesDashboard = () => {
  console.log("spacesss");

  const { getAllSpaces } = useContext(SpaceContext);
  const [spaces, setSpaces] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const spacesData = await getAllSpaces();
      setSpaces(spacesData.result);
      }
      fetchData();
  }, [])


  useEffect(() => {
    console.log(spaces);
  }, [spaces])


  const [selectedSpace, setSelectedSpace] = useState(null);
  const [isAddingSpace, setIsAddingSpace] = useState(false);
  const [isConfirmingAdd, setIsConfirmingAdd] = useState(false);

  const handleSpaceClick = (space) => {
    setSelectedSpace(space);
    setIsAddingSpace(false);
    navigate('/spaceDashboard')
  };

  const handleAddSpaceClick = () => {
    setSelectedSpace(null);
    setIsConfirmingAdd(false);
    setIsAddingSpace(!isAddingSpace);
  };

  const handleConfirmAdd = () => {
    const newSpace = {
      id: spaces.length + 1,
      name: 'New Space',
      manager: 'New Manager',
    };

    setSpaces((prevSpaces) => [...prevSpaces, newSpace]);

    setIsConfirmingAdd(false);
  };


  return (
    <Container maxWidth="lg" style={{ marginTop: '20px', position: 'relative' }}>
      <Typography variant="h3" align="center" gutterBottom>
        Spaces Dashboard
      </Typography>
      <Grid container spacing={3}>
        {spaces?.map((space) => (
          <Grid key={space.id} item xs={12} sm={6} md={4} lg={3}>
            <SpaceModel {...space} onClick={() => handleSpaceClick(space)} />
          </Grid>
        ))}
        <Grid container item xs={12} alignItems="center" justifyContent="center" spacing={1}>
          <Grid item>
            <Tooltip title="Add New Space" placement="right">
              <Fab
                id="add-space-button"
                color="primary"
                aria-label="add"
                onClick={handleAddSpaceClick}
              >
                <AddIcon />
              </Fab>
            </Tooltip>
          </Grid>
          {isAddingSpace && (
            <AddSpace
              onAddSpace={() => setIsAddingSpace(false)}
              onConfirmAdd={handleConfirmAdd}
              open={isAddingSpace}
              anchorEl={document.getElementById('add-space-button')}
            />
          )}
        </Grid>
        <Grid item xs={12}>
          {/* {selectedSpace && <SpaceDashboard space={selectedSpace} />} */}
          {isAddingSpace && !isConfirmingAdd && (
            <AddSpace
              onAddSpace={() => setIsAddingSpace(false)}
              onConfirmAdd={handleConfirmAdd}
              open={isAddingSpace}
              anchorEl={document.getElementById('add-space-button')}
            />
          )}
          {isAddingSpace && isConfirmingAdd && (
            <Typography variant="h6">Confirming the addition of the space...</Typography>
          )}
        </Grid>
      </Grid>
    </Container>
  );
};

export default SpacesDashboard;



