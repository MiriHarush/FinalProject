// import React, { useState, useContext, useEffect } from 'react';
// import { Grid, Typography, Tooltip, Fab, Container } from '@mui/material';
// import AddIcon from '@mui/icons-material/Add';
// import SpaceModel from '../components/SpaceModal';
// import SpaceDashboard from './SpaceDashboard';
// import AddSpace from './AddSpace';
// import { SpaceContext } from '../context/spaces.context';
// import { useNavigate } from 'react-router-dom';

// const SpacesDashboard = () => {
//   const { getAllSpaces, updateCurrentSpace, addSpace } = useContext(SpaceContext);
//   const [spaces, setSpaces] = useState([]);
//   const [selectedSpace, setSelectedSpace] = useState(null);
//   const [isAddingSpace, setIsAddingSpace] = useState(false);
//   const [isConfirmingAdd, setIsConfirmingAdd] = useState(false);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchData = async () => {
//       const spacesData = await getAllSpaces();
//       setSpaces(spacesData.result);
//     }
//     fetchData();
//   }, [isAddingSpace])

//   const handleSpaceClick = async (space) => {
//     setSelectedSpace(space);
//     setIsAddingSpace(false);
//     updateCurrentSpace(space);
//     navigate('/spaceDashboard')
//   };

//   const handleAddSpaceClick = () => {
//     setSelectedSpace(null);
//     setIsConfirmingAdd(false);
//     setIsAddingSpace(!isAddingSpace);
//   };

//   const handleConfirmAdd = async (name) => {
//     console.log(name);

//     const space = await addSpace(name);
//     console.log("space", space);
//     if (space.success === 'true')
//     {
//       setSpaces((prevSpaces) => [...prevSpaces, space]);

//     }
//     setIsConfirmingAdd(false);
//   };


//   return (
//     <Container maxWidth="lg" style={{ marginTop: '20px', position: 'relative' }}>
//       <Typography variant="h3" align="center" gutterBottom>
//         Spaces Dashboard
//       </Typography>
//       <Grid container spacing={3}>
//         {spaces?.map((space) => (
//           <Grid key={space.id} item xs={12} sm={6} md={4} lg={3}>
//             <SpaceModel {...space} onClick={() => handleSpaceClick(space)} />
//           </Grid>
//         ))}
//         <Grid container item xs={12} alignItems="center" justifyContent="center" spacing={1}>
//           <Grid item>
//             <Tooltip title="Add New Space" placement="right">
//               <Fab
//                 id="add-space-button"
//                 color="primary"
//                 aria-label="add"
//                 onClick={handleAddSpaceClick}
//               >
//                 <AddIcon />
//               </Fab>
//             </Tooltip>
//           </Grid>
//           {isAddingSpace && (
//             <AddSpace
//               onAddSpace={() => setIsAddingSpace(false)}
//               onConfirmAdd={handleConfirmAdd}
//               open={isAddingSpace}
//               anchorEl={document.getElementById('add-space-button')}
//             />
//           )}
//         </Grid>
//         <Grid item xs={12}>
//           {isAddingSpace && !isConfirmingAdd && (
//             <AddSpace
//               onAddSpace={() => setIsAddingSpace(false)}
//               onConfirmAdd={handleConfirmAdd}
//               open={isAddingSpace}
//               anchorEl={document.getElementById('add-space-button')}
//             />
//           )}
//           {isAddingSpace && isConfirmingAdd && (
//             <Typography variant="h6">Confirming the addition of the space...</Typography>
//           )}
//         </Grid>
//       </Grid>
//     </Container>
//   );
// };

// export default SpacesDashboard;


import React, { useState, useContext, useEffect } from 'react';
import { Grid, Typography, Tooltip, Fab, Container, Card, CardContent } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import SpaceModel from '../components/SpaceModal';
import SpaceDashboard from './SpaceDashboard';
import AddSpace from './AddSpace';
import { SpaceContext } from '../context/spaces.context';
import { useNavigate } from 'react-router-dom';



const SpacesDashboard = () => {
  const { getAllSpaces, updateCurrentSpace, addSpace } = useContext(SpaceContext);
  const [spaces, setSpaces] = useState([]);
  const [selectedSpace, setSelectedSpace] = useState(null);
  const [isAddingSpace, setIsAddingSpace] = useState(false);
  const [isConfirmingAdd, setIsConfirmingAdd] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const spacesData = await getAllSpaces();
      setSpaces(spacesData.result);
    }
    fetchData();
  }, [isAddingSpace])

  const handleSpaceClick = async (space) => {
    setSelectedSpace(space);
    setIsAddingSpace(false);
    updateCurrentSpace(space);
    navigate('/spaceDashboard')
  };

  const handleAddSpaceClick = () => {
    setSelectedSpace(null);
    setIsConfirmingAdd(false);
    setIsAddingSpace(!isAddingSpace);
  };

  const handleConfirmAdd = async (name) => {
    const space = await addSpace(name);
    console.log("space", space);
    if (space.success === 'true') {
      setSpaces((prevSpaces) => [...prevSpaces, space]);
    }
    setIsConfirmingAdd(false);
  };

  return (
    <Container maxWidth="lg" style={{ marginTop: '20px', position: 'relative' }}>
      <Typography variant="h3" align="center" gutterBottom>
        Spaces Dashboard
      </Typography>
      <Grid container spacing={3}>
        {spaces?.map((space) => (
          <Grid key={space.id} item xs={12} sm={6} md={4} lg={5}>
            {/* <Card> */}
              <CardContent>
                <SpaceModel {...space} onClick={() => handleSpaceClick(space)} />
              </CardContent>
            {/* </Card> */}
          </Grid>
        ))}
        <Grid container item xs={12} alignItems="center" justifyContent="center" spacing={1}>
          <Grid item>
            <Tooltip title="Add New Space" placement="right">
              <Fab
                id="add-space-button"
                aria-label="add"
                onClick={handleAddSpaceClick}
                style={{
                  backgroundColor: 'rgb(174, 124, 61)',
                  color: 'white',
                  '&:hover': {
                    backgroundColor: '#d7be9e',
                  },
                }}
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
