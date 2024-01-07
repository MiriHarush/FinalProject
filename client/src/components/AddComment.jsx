// import React, { useContext, useState } from 'react';
// import { Grid, TextField, Button } from '@mui/material';
// import { UserContext } from '../context/users.context';
// import { CommentContext } from '../context/comments.context';

// const AddComment = () => {
//   const { currentUser } = useContext(UserContext);
//   const { addComment } = useContext(CommentContext);
//   const [newCommentText, setNewCommentText] = useState('');

//   const handleCommentSubmit = () => {
//     if (currentUser) {
//       // Add comment only if user is logged in
//       addComment(newCommentText, currentUser.name);
//       setNewCommentText('');
//     }
//   };

//   return (
//     <Grid container spacing={2}>
//       <Grid item xs={12} sm={6}>
//         <TextField
//           label="שם משתמש"
//           fullWidth
//           value={currentUser ? currentUser.name : 'Anonymous'}
//           disabled
//         />
//       </Grid>
//       <Grid item xs={12} sm={6}>
//         <TextField
//           label="תוכן התגובה"
//           multiline
//           rows={4}
//           fullWidth
//           value={newCommentText}
//           onChange={(e) => setNewCommentText(e.target.value)}
//         />
//       </Grid>
//       <Grid item xs={12}>
//         <Button
//           variant="contained"
//           color="primary"
//           onClick={handleCommentSubmit}
//           disabled={!newCommentText || !currentUser}
//         >
//           שלח תגובה
//         </Button>
//       </Grid>
//     </Grid>
//   );
// };

// export default AddComment;
import React, { useContext, useState } from 'react';
import { Grid, TextField, Button } from '@mui/material';
import { UserContext } from '../context/users.context';
import { CommentContext } from '../context/comments.context';

const AddComment = () => {
  const { currentUser } = useContext(UserContext);
  const { addComment } = useContext(CommentContext);
  const [newCommentText, setNewCommentText] = useState('');

  const handleCommentSubmit = () => {
    if (currentUser) {
      const commentData = {
        text: newCommentText,
        username: currentUser.name,
        email: currentUser.email, // הוספת שדה המכיל את האימייל
      };
      // Add comment only if user is logged in
      addComment(commentData);
      setNewCommentText('');
    }
  };

  return (
    <Grid container spacing={2}>
      {/* <Grid item xs={12} sm={6}>
        <TextField
          label="שם משתמש"
          fullWidth
          value={currentUser ? currentUser.name : 'Anonymous'}
          disabled
        />
      </Grid> */}
      <Grid item xs={12} sm={6}>
        {/* שדה נסתר המכיל את השם המלא של המשתמש */}
        <TextField
          label="שם משתמש"
          fullWidth
          value={currentUser ? currentUser.name : 'Anonymous'}
          disabled
          style={{ display: 'none' }}
        />
        <TextField
          label="תוכן התגובה"
          multiline
          rows={4}
          fullWidth
          value={newCommentText}
          onChange={(e) => setNewCommentText(e.target.value)}
        />
      </Grid>
      <Grid item xs={12}>
        {/* שדה נסתר המכיל את האימייל של המשתמש */}
        <TextField
          label="אימייל"
          fullWidth
          value={currentUser ? currentUser.email : ''}
          disabled
          style={{ display: 'none' }}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={handleCommentSubmit}
          disabled={!newCommentText || !currentUser}
        >
          שלח תגובה
        </Button>
      </Grid>
    </Grid>
  );
};

export default AddComment;
