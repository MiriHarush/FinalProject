import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Typography, TextField, Button, Box, IconButton, Paper, Avatar } from '@mui/material';
import { UserContext } from '../context/users.context';
import { CommentContext } from '../context/comments.context';
import UserAsideTabs from '../components/UserAsideTabs';
import Comment from '../components/Comment';
import ZoomIcon from '@mui/icons-material/VideoCall';
import SkypeIcon from '@mui/icons-material/Call';
import ZoomButton from '../components/ZoomButton';
import SkypeButton from '../components/SkypeButton';
import Footer from '../components/Footer';
import { width } from '@mui/system';
import '../css/UserPersonalArea.css';

const UserPersonalArea = () => {
  const { currentUser, logout } = useContext(UserContext);
  const [generalReplyText, setGeneralReplyText] = useState('');
  const [isGeneralReplying, setGeneralReplying] = useState(false);
  const navigate = useNavigate();

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

  // const handleLogout = () => {
  //  logout();
  //  navigate('/')
  // };

  return (
    //     <Container style={{ paddingTop: '50px' }}>
    //       <Typography variant="h2" align="center" gutterBottom>

    //         <Avatar alt="User Avatar" src={currentUser.profileImage} />
    //         <Button variant="outlined" color="secondary" onClick={handleLogout}>
    //           LOG OUT
    //         </Button>
    // Welcome to your space 🤗   </Typography>

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


    //           {/* Zoom Button */}
    //           {/* <IconButton onClick={handleZoomMeeting}>
    //           <ZoomIcon />
    //           התקשרות ב-Zoom
    //         </IconButton> */}

    //           {/* Skype Button */}
    //           {/* <IconButton onClick={handleSkypeCall}>
    //           <SkypeIcon />
    //           התקשרות ב-Skype
    //         </IconButton> */}



    //         </>
    //       ) : <div>No such a user</div>}
    //     </Container>
    // type="submit"
    // variant="contained"
    // color="primary"
    // style={{ background: 'rgb(174, 124, 61)' }}


    <>
      <div className='bgColor'>
        <Container style={{ paddingTop: '50px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <p style={{ color: 'rgb(174, 124, 61)', marginRight: '10px' }}> {currentUser.userName}</p>
            <Avatar alt="User Avatar" src={currentUser.profileImage} style={{ marginRight: '950px' }} />
          </div>

          <Typography variant="h2" gutterBottom style={{ color: 'rgb(174, 124, 61)' }}>
            Hi  {currentUser.userName} , Welcome to the personal area
          </Typography>
          <div style={{ width: '100%' }}>
            {currentUser ? (
              <>
                <UserAsideTabs />
              </>
            ) : <div>No such a user</div>}
          </div>
        </Container>
        <Footer />
      </div>
    </>
  );
};

export default UserPersonalArea;
