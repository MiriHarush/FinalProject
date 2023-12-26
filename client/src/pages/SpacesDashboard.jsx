// // import React, { useState, useEffect, useRef } from 'react';
// // import { Grid, Typography, Tooltip, Fab, Container, Paper } from '@mui/material';
// // import AddIcon from '@mui/icons-material/Add';
// // import SpaceModel from '../components/SpaceModal';
// // import SpaceDashboard from './SpaceDashboard';
// // import AddSpace from './AddSpace';
// // import AddCourse from './AddCourse';

// // const SpacesDashboard = () => {
// //   const [selectedSpace, setSelectedSpace] = useState(null);
// //   const [isAddingSpace, setIsAddingSpace] = useState(false);
// //   const [isConfirmingAdd, setIsConfirmingAdd] = useState(false);

// //   const addSpaceButtonRef = useRef();

// //   const spaces = [
// //     { id: 1, name: 'Space 1', manager: 'Manager 1' },
// //     { id: 2, name: 'Space 2', manager: 'Manager 2' },
// //   ];

// //   const handleSpaceClick = (space) => {
// //     setSelectedSpace(space);
// //     setIsConfirmingAdd(false);
// //     setIsAddingSpace(false);
// //   };

// //   const handleAddSpaceClick = () => {
// //     setSelectedSpace(null);
// //     setIsAddingSpace(!isAddingSpace);
// //   };

// //   const handleConfirmAdd = () => {
// //     setIsConfirmingAdd(false);
// //     // Handle the confirmed addition, e.g., add the space to the spaces array
// //     // You can also fetch data from an API, update the state, etc.
// //   };

// //   // useEffect(() => {
// //   //   if (isAddingSpace && addSpaceButtonRef.current) {
// //   //     addSpaceButtonRef.current.click();
// //   //   }
// //   // }, [isAddingSpace]);

// //   return (
// //     <Container maxWidth="lg" style={{ marginTop: '20px' }}>
// //       <Typography variant="h3" align="center" gutterBottom>
// //         Spaces Dashboard
// //       </Typography>
// //       <Grid container spacing={3}>
// //         {spaces.map((space) => (
// //           <Grid key={space.id} item xs={12} sm={6} md={4} lg={3}>
// //             <SpaceModel {...space} onClick={() => handleSpaceClick(space)} />
// //           </Grid>
// //         ))}
// //         <Grid container item xs={12} alignItems="center" justifyContent="center" spacing={1}>
// //           <Grid item>
// //             <Tooltip title="Add New Space" placement="right">
// //               <Fab
// //                 // ref={addSpaceButtonRef}
// //                 color="primary"
// //                 aria-label="add"
// //                 onClick={handleAddSpaceClick}
// //               >
// //                 <AddIcon />
// //               </Fab>
// //             </Tooltip>
// //           </Grid>
// //         </Grid>
// //         <Grid item xs={12}>
// //           {selectedSpace && <SpaceDashboard space={selectedSpace} />}
// //           {isAddingSpace && <AddSpace onAddSpace={() => setIsAddingSpace(false)} open={isAddingSpace} />}
// //           {/* {selectedSpace && !isAddingSpace && <AddCourse spaceId={selectedSpace?.id} />} */}
// //         </Grid>
// //       </Grid>
// //     </Container>
// //   );
// // };

// // export default SpacesDashboard;

// // SpacesDashboard.jsx
// import React, { useState } from 'react';
// import { Grid, Typography, Tooltip, Fab, Container } from '@mui/material';
// import AddIcon from '@mui/icons-material/Add';
// import SpaceModel from '../components/SpaceModal';
// import SpaceDashboard from './SpaceDashboard';
// import AddSpace from './AddSpace';

// const SpacesDashboard = () => {
//   const [selectedSpace, setSelectedSpace] = useState(null);
//   const [isAddingSpace, setIsAddingSpace] = useState(false);
//   const [isConfirmingAdd, setIsConfirmingAdd] = useState(false);

//   const spaces = [
//     { id: 1, name: 'Space 1', manager: 'Manager 1' },
//     { id: 2, name: 'Space 2', manager: 'Manager 2' },
//   ];

//   const handleSpaceClick = (space) => {
//     setSelectedSpace(space);
//     setIsAddingSpace(false);
//   };

//   const handleAddSpaceClick = () => {
//     setSelectedSpace(null);
//     setIsConfirmingAdd(false);
//     setIsAddingSpace(!isAddingSpace);
//   };

//   const handleConfirmAdd = () => {
//     setIsConfirmingAdd(false);
//     // Handle the confirmed addition, e.g., add the space to the spaces array
//     // You can also fetch data from an API, update the state, etc.
//   };

//   return (
//     <Container maxWidth="lg" style={{ marginTop: '20px' }}>
//       <Typography variant="h3" align="center" gutterBottom>
//         Spaces Dashboard
//       </Typography>
//       <Grid container spacing={3}>
//         {spaces.map((space) => (
//           <Grid key={space.id} item xs={12} sm={6} md={4} lg={3}>
//             <SpaceModel {...space} onClick={() => handleSpaceClick(space)} />
//           </Grid>
//         ))}
//         <Grid container item xs={12} alignItems="center" justifyContent="center" spacing={1}>
//           <Grid item>
//             <Tooltip title="Add New Space" placement="right">
//               <Fab color="primary" aria-label="add" onClick={handleAddSpaceClick}>
//                 <AddIcon />
//               </Fab>
//             </Tooltip>
//           </Grid>
//         </Grid>
//         <Grid item xs={12}>
//           {selectedSpace && <SpaceDashboard space={selectedSpace} />}
//           {isAddingSpace && !isConfirmingAdd && (
//             <AddSpace
//               onAddSpace={() => setIsAddingSpace(false)}
//               onConfirmAdd={() => setIsConfirmingAdd(true)}
//               open={isAddingSpace}
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

import React, { useState } from 'react';
import { Grid, Typography, Tooltip, Fab, Container } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import SpaceModel from '../components/SpaceModal';
import SpaceDashboard from './SpaceDashboard';
import AddSpace from './AddSpace';

const SpacesDashboard = () => {
  const [spaces, setSpaces] = useState([
    { id: 1, name: 'Space 1', manager: 'Manager 1' },
    { id: 2, name: 'Space 2', manager: 'Manager 2' },
  ]);
  const [selectedSpace, setSelectedSpace] = useState(null);
  const [isAddingSpace, setIsAddingSpace] = useState(false);
  const [isConfirmingAdd, setIsConfirmingAdd] = useState(false);

  const handleSpaceClick = (space) => {
    setSelectedSpace(space);
    setIsAddingSpace(false);
  };

  const handleAddSpaceClick = () => {
    setSelectedSpace(null);
    setIsConfirmingAdd(false);
    setIsAddingSpace(!isAddingSpace);
  };

  const handleConfirmAdd = () => {
    const newSpace = {
      id: spaces.length + 1, // Generate a new ID (you may have a different logic)
      name: 'New Space', // Replace with the actual name from your form or state
      manager: 'New Manager', // Replace with the actual manager from your form or state
    };

    setSpaces((prevSpaces) => [...prevSpaces, newSpace]);

    setIsConfirmingAdd(false);
  };

  return (
    <Container maxWidth="lg" style={{ marginTop: '20px' }}>
      <Typography variant="h3" align="center" gutterBottom>
        Spaces Dashboard
      </Typography>
      <Grid container spacing={3}>
        {spaces.map((space) => (
          <Grid key={space.id} item xs={12} sm={6} md={4} lg={3}>
            <SpaceModel {...space} onClick={() => handleSpaceClick(space)} />
          </Grid>
        ))}
        <Grid container item xs={12} alignItems="center" justifyContent="center" spacing={1}>
          <Grid item>
            <Tooltip title="Add New Space" placement="right">
              <Fab color="primary" aria-label="add" onClick={handleAddSpaceClick}>
                <AddIcon />
              </Fab>
            </Tooltip>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          {selectedSpace && <SpaceDashboard space={selectedSpace} />}
          {isAddingSpace && !isConfirmingAdd && (
            <AddSpace
              onAddSpace={() => setIsAddingSpace(false)}
              onConfirmAdd={handleConfirmAdd}
              open={isAddingSpace}
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
