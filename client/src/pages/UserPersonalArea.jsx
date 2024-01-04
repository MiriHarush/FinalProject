// // import React, { useContext } from 'react';
// // import UserAsideTabs from '../components/UserAsideTabs';
// // import Box from '@mui/material/Box';
// // import { UserContext } from '../context/users.context';

// // const UserPersonalArea = () => {
// //   const { currentUser } = useContext(UserContext);

// //   console.log('in current', currentUser);

// //   return (
// //     <Box
// //       sx={{
// //         display: 'flex',
// //         flexDirection: 'column',
// //         alignItems: 'center',
// //         marginTop: '30px',
// //         fontFamily: 'Arial, sans-serif',
// //       }}
// //     >
// //       <Box
// //         sx={{
// //           backgroundColor: '#f8f8f8',
// //           padding: '20px',
// //           borderRadius: '15px',
// //           boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
// //           marginBottom: '20px',
// //           textAlign: 'center',
// //         }}
// //       >
// //         <h2 style={{ color: '#333' }}>WELCOME, {currentUser.name}!</h2>
// //         <p style={{ color: '#666' }}>Email: {currentUser.email}</p>

// //         <p style={{ color: '#666' }}>User Name: {currentUser.userName}</p>
// //         <p style={{ color: '#666' }}>Phone: {currentUser.phone}</p>
// //         <p style={{ color: '#666' }}>How to contact? {currentUser.contact}</p>

// //         <p style={{ color: '#666' }}>User Name: {currentUser.userName}</p>
// //       </Box>
// //       <UserAsideTabs />
// //     </Box>
// //   );
// // };




// // export default UserPersonalArea;
// // import React, { useContext } from 'react';
// // import { Link } from 'react-router-dom';
// // import { Button, Container, Typography, Box, Grid, Paper, TextField } from '@mui/material';
// // import { UserContext } from '../context/users.context';
// // import UserAsideTabs from '../components/UserAsideTabs';
// // import { useComments } from '../context/comments.context';

// // const UserPersonalArea = () => {
// //   const { currentUser } = useContext(UserContext);
// //   const { addComment } = useComments();
// //   const [newCommentText, setNewCommentText] = React.useState('');

// //   const handleCommentSubmit = () => {
// //     addComment(newCommentText, currentUser ? currentUser.name : 'Anonymous');
// //     setNewCommentText('');
// //   };

// //   return (
// //     <Container style={{ paddingTop: '50px' }}>
// //       <Typography variant="h2" align="center" gutterBottom>
// //         אזור אישי
// //       </Typography>

// //       <Box
// //         sx={{
// //           backgroundColor: '#f8f8f8',
// //           padding: '20px',
// //           borderRadius: '15px',
// //           boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
// //           marginBottom: '20px',
// //           textAlign: 'center',
// //         }}
// //       >
// //         <Typography variant="h4" style={{ color: '#333' }}>
// //           ברוך הבא, {currentUser.name}!
// //         </Typography>
// //         <Typography variant="body1" style={{ color: '#666' }}>
// //           Email: {currentUser.email}
// //         </Typography>
// //         <Typography variant="body1" style={{ color: '#666' }}>
// //           User Name: {currentUser.userName}
// //         </Typography>
// //         <Typography variant="body1" style={{ color: '#666' }}>
// //           Phone: {currentUser.phone}
// //         </Typography>
// //         <Typography variant="body1" style={{ color: '#666' }}>
// //           How to contact? {currentUser.contact}
// //         </Typography>
// //       </Box>

// //       <UserAsideTabs />

// //       <Paper elevation={3} style={{ padding: '20px', marginTop: '30px' }}>
// //         <Typography variant="h4" gutterBottom>
// //           הוספת תגובה
// //         </Typography>
// //         <Grid container spacing={2}>
// //           <Grid item xs={12} sm={6}>
// //             <TextField
// //               label="שם משתמש"
// //               fullWidth
// //               value={currentUser.name}
// //               disabled
// //             />
// //           </Grid>
// //           <Grid item xs={12} sm={6}>
// //             <TextField
// //               label="תוכן התגובה"
// //               multiline
// //               rows={4}
// //               fullWidth
// //               value={newCommentText}
// //               onChange={(e) => setNewCommentText(e.target.value)}
// //             />
// //           </Grid>
// //           <Grid item xs={12}>
// //             <Button
// //               variant="contained"
// //               color="primary"
// //               onClick={handleCommentSubmit}
// //               disabled={!newCommentText}
// //             >
// //               שלח תגובה
// //             </Button>
// //           </Grid>
// //         </Grid>
// //       </Paper>
// //     </Container>
// //   );
// // };

// // export default UserPersonalArea;
// import React, { useContext } from 'react';
// import UserAsideTabs from '../components/UserAsideTabs';
// import AddComment from '../components/AddComment';
// import Comments from '../pages/Comments';
// import Box from '@mui/material/Box';
// import { UserContext } from '../context/users.context';

// const UserPersonalArea = () => {
//   const { currentUser } = useContext(UserContext);
//   const [generalReplyText, setGeneralReplyText] = useState('');
//   const [isGeneralReplying, setGeneralReplying] = useState(false);
  
//   const handleGeneralReply = () => {
//     // לטפל בהוספת תגובה כללית כאן
//     // השתמש בפונקציה המתאימה מההקשר שלך
//     addGeneralReply(generalReplyText, currentUser ? currentUser.name : 'Anonymous');
//     setGeneralReplyText('');
//     setGeneralReplying(false);
//   };
  
//   return (
//     <Box
//       sx={{
//         display: 'flex',
//         flexDirection: 'column',
//         alignItems: 'center',
//         marginTop: '30px',
//         fontFamily: 'Arial, sans-serif',
//       }}
//     >
//       {currentUser ? (
//         <>
//           <Box
//             sx={{
//               backgroundColor: '#f8f8f8',
//               padding: '20px',
//               borderRadius: '15px',
//               boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
//               marginBottom: '20px',
//               textAlign: 'center',
//             }}
//           >
//             <h2 style={{ color: '#333' }}>WELCOME, {currentUser.name}!</h2>
//             <p style={{ color: '#666' }}>Email: {currentUser.email}</p>
//             <p style={{ color: '#666' }}>User Name: {currentUser.userName}</p>
//             <p style={{ color: '#666' }}>Phone: {currentUser.phone}</p>
//           </Box>
//           <UserAsideTabs />
//           <IconButton onClick={() => setGeneralReplying(!isGeneralReplying)}>
//             ✍️ הוסף תגובה כללית
//           </IconButton>

//         </>
//       ) : <div>No such a user</div>}
//     </Box>
//   );
// };

// export default UserPersonalArea;
import React, { useContext, useState } from 'react';
import { Container, Typography, TextField, Button, Box, IconButton , Paper } from '@mui/material';
import { UserContext } from '../context/users.context';
import { CommentContext } from '../context/comments.context';
import UserAsideTabs from '../components/UserAsideTabs';
import Comment from '../components/Comment';
import ZoomIcon from '@mui/icons-material/VideoCall';
import SkypeIcon from '@mui/icons-material/Call';
import ZoomButton from '../components/ZoomButton';
import SkypeButton from '../components/SkypeButton';

const UserPersonalArea = () => {
  const { currentUser } = useContext(UserContext);
  const { comments, addComment, addReply, likeComment, dislikeComment, addGeneralReply } = useContext(CommentContext);
  const [newCommentText, setNewCommentText] = useState('');
  const [generalReplyText, setGeneralReplyText] = useState('');
  const [isGeneralReplying, setGeneralReplying] = useState(false);

  const handleCommentSubmit = () => {
    addComment(newCommentText, currentUser ? currentUser.name : 'Anonymous');
    setNewCommentText('');
  };

  const handleLikeComment = (commentId) => {
    likeComment(commentId);
  };

  const handleDislikeComment = (commentId) => {
    dislikeComment(commentId);
  };

  const handleReplyComment = (commentId, replyText) => {
    addReply(replyText, currentUser ? currentUser.name : 'Anonymous', commentId);
    setNewCommentText('');
  };

  const handleGeneralReply = () => {
    addGeneralReply(generalReplyText, currentUser ? currentUser.name : 'Anonymous');
    setGeneralReplyText('');
    setGeneralReplying(false);
  };

  // return (
  //   <Container style={{ paddingTop: '50px' }}>
  //     <Typography variant="h2" align="center" gutterBottom>
  //       אזור אישי
  //     </Typography>

  //     {currentUser ? (
  //       <>
  //         <Box
  //           sx={{
  //             backgroundColor: '#f8f8f8',
  //             padding: '20px',
  //             borderRadius: '15px',
  //             boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
  //             marginBottom: '20px',
  //             textAlign: 'center',
  //           }}
  //         >
  //           <h2 style={{ color: '#333' }}>WELCOME, {currentUser.name}!</h2>
  //           <p style={{ color: '#666' }}>Email: {currentUser.email}</p>
  //           <p style={{ color: '#666' }}>User Name: {currentUser.userName}</p>
  //           <p style={{ color: '#666' }}>Phone: {currentUser.phone}</p>
  //         </Box>

  //         <UserAsideTabs />

  //         <IconButton onClick={() => setGeneralReplying(!isGeneralReplying)}>
  //           ✍️ הוסף תגובה 
  //         </IconButton>

  //         {isGeneralReplying && (
  //           <div>
  //             <TextField
  //               label="תגובה"
  //               multiline
  //               rows={4}
  //               fullWidth
  //               value={generalReplyText}
  //               onChange={(e) => setGeneralReplyText(e.target.value)}
  //             />
  //             <Button variant="contained" color="primary" onClick={handleGeneralReply}>
  //               שלח תגובה 
  //             </Button>
  //           </div>
  //         )}

  //       </>
  //     ) : <div>No such a user</div>}
  //   </Container>
  // );
  return (
    <Container style={{ paddingTop: '50px' }}>
      <Typography variant="h2" align="center" gutterBottom>
        אזור אישי
      </Typography>
  
      {currentUser ? (
        <>
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
          </Box>
  
          <UserAsideTabs />
  
          
        {/* Zoom Button */}
        <IconButton onClick={handleZoomMeeting}>
          <ZoomIcon />
          התקשרות ב-Zoom
        </IconButton>

        {/* Skype Button */}
        <IconButton onClick={handleSkypeCall}>
          <SkypeIcon />
          התקשרות ב-Skype
        </IconButton>

          <IconButton onClick={() => setGeneralReplying(!isGeneralReplying)}>
            ✍️ הוסף תגובה 
          </IconButton>
  
          {isGeneralReplying && (
            <div>
              <TextField
                label="תגובה"
                multiline
                rows={4}
                fullWidth
                value={generalReplyText}
                onChange={(e) => setGeneralReplyText(e.target.value)}
              />
              <Button variant="contained" color="primary" onClick={handleGeneralReply}>
                שלח תגובה 
              </Button>
            </div>
          )}
  
        </>
      ) : <div>No such a user</div>}
    </Container>
  );
};

export default UserPersonalArea;
