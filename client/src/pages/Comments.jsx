// // // // import React, { useState } from 'react';
// // // // import { Container, Typography, TextField, Button, Avatar, Grid, Paper } from '@mui/material';

// // // // const Comment = ({ user, text }) => (
// // // //   <Paper elevation={3} style={{ padding: '15px', marginTop: '15px' }}>
// // // //     <Grid container spacing={2}>
// // // //       <Grid item>
// // // //         <Avatar alt={user} src={`https://source.unsplash.com/50x50/?profile,person`} />
// // // //       </Grid>
// // // //       <Grid item>
// // // //         <Typography variant="body1" gutterBottom>
// // // //           <strong>{user}</strong>: {text}
// // // //         </Typography>
// // // //       </Grid>
// // // //     </Grid>
// // // //   </Paper>
// // // // );

// // // // const Comments = () => {
// // // //   const [comments, setComments] = useState([
// // // //     { user: 'John Doe', text: 'Great website! I love the content.' },
// // // //     { user: 'Jane Smith', text: 'The courses are amazing. Highly recommended!' },
// // // //     // Add more sample comments as needed
// // // //   ]);

// // // //   const [newComment, setNewComment] = useState({ user: 'Anonymous', text: '' });

// // // //   const handleCommentSubmit = () => {
// // // //     setComments([...comments, newComment]);
// // // //     setNewComment({ user: 'Anonymous', text: '' });
// // // //   };

// // // //   return (
// // // //     <Container style={{ paddingTop: '50px' }}>
// // // //       <Typography variant="h2" align="center" gutterBottom>
// // // //         תגובות משתמשים
// // // //       </Typography>

// // // //       {comments.map((comment, index) => (
// // // //         <Comment key={index} user={comment.user} text={comment.text} />
// // // //       ))}

// // // //       <Paper elevation={3} style={{ padding: '20px', marginTop: '30px' }}>
// // // //         <Typography variant="h4" gutterBottom>
// // // //           הוספת תגובה
// // // //         </Typography>
// // // //         <Grid container spacing={2}>
// // // //           <Grid item xs={12} sm={6}>
// // // //             <TextField
// // // //               label="שם משתמש"
// // // //               fullWidth
// // // //               value={newComment.user}
// // // //               onChange={(e) => setNewComment({ ...newComment, user: e.target.value })}
// // // //             />
// // // //           </Grid>
// // // //           <Grid item xs={12} sm={6}>
// // // //             <TextField
// // // //               label="תוכן התגובה"
// // // //               multiline
// // // //               rows={4}
// // // //               fullWidth
// // // //               value={newComment.text}
// // // //               onChange={(e) => setNewComment({ ...newComment, text: e.target.value })}
// // // //             />
// // // //           </Grid>
// // // //           <Grid item xs={12}>
// // // //             <Button
// // // //               variant="contained"
// // // //               color="primary"
// // // //               onClick={handleCommentSubmit}
// // // //               disabled={!newComment.text}
// // // //             >
// // // //               שלח תגובה
// // // //             </Button>
// // // //           </Grid>
// // // //         </Grid>
// // // //       </Paper>
// // // //     </Container>
// // // //   );
// // // // };

// // // // export default Comments;

// // // import React, { useState, useContext } from 'react';
// // // import { Container, Typography, TextField, Button, Avatar, Grid, Paper } from '@mui/material';
// // // import { CommentsContext } from '../context/comments.context';

// // // const Comment = ({ user, text, onDelete }) => (
// // //   <Paper elevation={3} style={{ padding: '15px', marginTop: '15px' }}>
// // //     <Grid container spacing={2}>
// // //       <Grid item>
// // //         <Avatar alt={user} src={`https://source.unsplash.com/50x50/?profile,person`} />
// // //       </Grid>
// // //       <Grid item>
// // //         <Typography variant="body1" gutterBottom>
// // //           <strong>{user}</strong>: {text}
// // //         </Typography>
// // //         {onDelete && (
// // //           <Button variant="outlined" color="secondary" size="small" onClick={onDelete}>
// // //             Delete
// // //           </Button>
// // //         )}
// // //       </Grid>
// // //     </Grid>
// // //   </Paper>
// // // );

// // // const Comments = () => {
// // //   const { comments, addComment, deleteComment } = useContext(CommentsContext);
// // //   const [newComment, setNewComment] = useState({ user: '', text: '' });

// // //   const handleCommentSubmit = () => {
// // //     addComment(newComment.text);
// // //     setNewComment({ user: '', text: '' });
// // //   };

// // //   const handleCommentDelete = (commentId) => {
// // //     deleteComment(commentId);
// // //   };

// // //   return (
// // //     <Container style={{ paddingTop: '50px' }}>
// // //       <Typography variant="h2" align="center" gutterBottom>
// // //         תגובות משתמשים
// // //       </Typography>

// // //       {comments.map((comment) => (
// // //         <Comment
// // //           key={comment.id}
// // //           user={comment.user}
// // //           text={comment.text}
// // //           onDelete={() => handleCommentDelete(comment.id)}
// // //         />
// // //       ))}

// // //       <Paper elevation={3} style={{ padding: '20px', marginTop: '30px' }}>
// // //         <Typography variant="h4" gutterBottom>
// // //           הוספת תגובה
// // //         </Typography>
// // //         <Grid container spacing={2}>
// // //           <Grid item xs={12} sm={6}>
// // //             <TextField
// // //               label="שם משתמש"
// // //               fullWidth
// // //               value={newComment.user}
// // //               onChange={(e) => setNewComment({ ...newComment, user: e.target.value })}
// // //             />
// // //           </Grid>
// // //           <Grid item xs={12} sm={6}>
// // //             <TextField
// // //               label="תוכן התגובה"
// // //               multiline
// // //               rows={4}
// // //               fullWidth
// // //               value={newComment.text}
// // //               onChange={(e) => setNewComment({ ...newComment, text: e.target.value })}
// // //             />
// // //           </Grid>
// // //           <Grid item xs={12}>
// // //             <Button
// // //               variant="contained"
// // //               color="primary"
// // //               onClick={handleCommentSubmit}
// // //               disabled={!newComment.text}
// // //             >
// // //               שלח תגובה
// // //             </Button>
// // //           </Grid>
// // //         </Grid>
// // //       </Paper>
// // //     </Container>
// // //   );
// // // };

// // // export default Comments;

// // import React, { useContext } from 'react';
// // import { Container, Typography, TextField, Button, Avatar, Grid, Paper } from '@mui/material';
// // import { UserContext } from '../context/users.context';
// // import { CommentContext } from '../context/comments.context';

// // const Comment = ({ user, text, onDelete }) => (
// //   <Paper elevation={3} style={{ padding: '15px', marginTop: '15px' }}>
// //     <Grid container spacing={2}>
// //       <Grid item>
// //         <Avatar alt={user} src={`https://source.unsplash.com/50x50/?profile,person`} />
// //       </Grid>
// //       <Grid item>
// //         <Typography variant="body1" gutterBottom>
// //           <strong>{user}</strong>: {text}
// //         </Typography>
// //         {onDelete && (
// //           <Button variant="outlined" color="error" onClick={onDelete}>
// //             Delete
// //           </Button>
// //         )}
// //       </Grid>
// //     </Grid>
// //   </Paper>
// // );

// // const Comments = () => {
// //   const { currentUser } = useContext(UserContext);
// //   const { comments, addComment, deleteComment } = useContext(CommentContext);
// //   const [newCommentText, setNewCommentText] = React.useState('');

// //   const handleCommentSubmit = () => {
// //     addComment(newCommentText, currentUser ? currentUser.name : 'Anonymous');
// //     setNewCommentText('');
// //   };

// //   return (
// //     <Container style={{ paddingTop: '50px' }}>
// //       <Typography variant="h2" align="center" gutterBottom>
// //         תגובות משתמשים
// //       </Typography>

// //       {comments.map((comment, index) => (
// //         <Comment
// //           key={index}
// //           user={comment.user}
// //           text={comment.text}
// //           onDelete={() => deleteComment(comment.id)}
// //         />
// //       ))}

// //       {currentUser && (
// //         <Paper elevation={3} style={{ padding: '20px', marginTop: '30px' }}>
// //           <Typography variant="h4" gutterBottom>
// //             הוספת תגובה
// //           </Typography>
// //           <Grid container spacing={2}>
// //             <Grid item xs={12} sm={6}>
// //               <TextField
// //                 label="שם משתמש"
// //                 fullWidth
// //                 value={currentUser.name}
// //                 disabled
// //               />
// //             </Grid>
// //             <Grid item xs={12} sm={6}>
// //               <TextField
// //                 label="תוכן התגובה"
// //                 multiline
// //                 rows={4}
// //                 fullWidth
// //                 value={newCommentText}
// //                 onChange={(e) => setNewCommentText(e.target.value)}
// //               />
// //             </Grid>
// //             <Grid item xs={12}>
// //               <Button
// //                 variant="contained"
// //                 color="primary"
// //                 onClick={handleCommentSubmit}
// //                 disabled={!newCommentText}
// //               >
// //                 שלח תגובה
// //               </Button>
// //             </Grid>
// //           </Grid>
// //         </Paper>
// //       )}
// //     </Container>
// //   );
// // };

// // export default Comments;

// import React, { useContext , useState } from 'react';
// import { Container, Typography, TextField, Button, Avatar, Grid, Paper, IconButton } from '@mui/material';
// import { UserContext } from '../context/users.context';
// import { CommentContext } from '../context/comments.context';

// const Comment = ({ id, user, text, likes, dislikes, replies, onReply, onLike, onDislike }) => {
//   const [isReplying, setReplying] = useState(false);
//   const [replyText, setReplyText] = useState('');

//   const handleReply = () => {
//     setReplying(false);
//     onReply(id, replyText);
//     setReplyText('');
//   };

//   return (
//     <Paper elevation={3} style={{ padding: '15px', marginTop: '15px' }}>
//       <Grid container spacing={2}>
//         <Grid item>
//           <Avatar alt={user} src={`https://source.unsplash.com/50x50/?profile,person`} />
//         </Grid>
//         <Grid item>
//           <Typography variant="body1" gutterBottom>
//             <strong>{user}</strong>: {text}
//           </Typography>
//           <div>
//             <IconButton color="primary" onClick={() => onLike(id)}>
//               👍 {likes > 0 ? likes : null}
//             </IconButton>
//             <IconButton color="error" onClick={() => onDislike(id)}>
//               👎 {dislikes > 0 ? dislikes : null}
//             </IconButton>
//             <IconButton onClick={() => setReplying(!isReplying)}>
//               ✍️ {replies ? replies.length : 0}
//             </IconButton>
//           </div>
//           {isReplying && (
//             <div>
//               <TextField
//                 label="תשובה"
//                 multiline
//                 rows={4}
//                 fullWidth
//                 value={replyText}
//                 onChange={(e) => setReplyText(e.target.value)}
//               />
//               <Button variant="contained" color="primary" onClick={handleReply}>
//                 שלח תשובה
//               </Button>
//             </div>
//           )}
//         </Grid>
//       </Grid>
//     </Paper>
//   );
// };


// const Comments = () => {
//   const { currentUser } = useContext(UserContext);
//   const { comments, addComment, addReply, likeComment, dislikeComment } = useContext(CommentContext);
//   const [newCommentText, setNewCommentText] = React.useState('');

//   const handleCommentSubmit = () => {
//     addComment(newCommentText, currentUser ? currentUser.name : 'Anonymous');
//     setNewCommentText('');
//   };

//   const handleLikeComment = (commentId) => {
//     likeComment(commentId);
//   };

//   const handleDislikeComment = (commentId) => {
//     dislikeComment(commentId);
//   };

//   const handleReplyComment = (commentId) => {
//     addReply('Reply text', currentUser ? currentUser.name : 'Anonymous', commentId);
//   };

//   return (
//     <Container style={{ paddingTop: '50px' }}>
//       <Typography variant="h2" align="center" gutterBottom>
//         תגובות משתמשים
//       </Typography>

//       {comments.map((comment) => (
//         <Comment
//           key={comment.id}
//           id={comment.id}
//           user={comment.user}
//           text={comment.text}
//           likes={comment.likes}
//           replies={comment.replies ? comment.replies.length : 0}
//           onReply={handleReplyComment}
//           onLike={handleLikeComment}
//           onDislike={handleDislikeComment}
//         />
//       ))}

//       {currentUser && (
//         <Paper elevation={3} style={{ padding: '20px', marginTop: '30px' }}>
//           <Typography variant="h4" gutterBottom>
//             הוספת תגובה
//           </Typography>
//           <Grid container spacing={2}>
//             <Grid item xs={12} sm={6}>
//               <TextField
//                 label="שם משתמש"
//                 fullWidth
//                 value={currentUser.name}
//                 disabled
//               />
//             </Grid>
//             <Grid item xs={12} sm={6}>
//               <TextField
//                 label="תוכן התגובה"
//                 multiline
//                 rows={4}
//                 fullWidth
//                 value={newCommentText}
//                 onChange={(e) => setNewCommentText(e.target.value)}
//               />
//             </Grid>
//             <Grid item xs={12}>
//               <Button
//                 variant="contained"
//                 color="primary"
//                 onClick={handleCommentSubmit}
//                 disabled={!newCommentText}
//               >
//                 שלח תגובה
//               </Button>
//             </Grid>
//           </Grid>
//         </Paper>
//       )}
//     </Container>
//   );
// };

// export default Comments;
import React, { useContext, useState } from 'react';
import { Container, Typography, TextField, Button, Avatar, Grid, Paper, IconButton } from '@mui/material';
import { UserContext } from '../context/users.context';
import { CommentContext } from '../context/comments.context';

const Comment = ({ id, user, text, likes, dislikes, replies, onReply, onLike, onDislike }) => {
  const [isReplying, setReplying] = useState(false);
  const [replyText, setReplyText] = useState('');

  const handleReply = () => {
    setReplying(false);
    onReply(id, replyText);
    setReplyText('');
  };

  return (
    <Paper elevation={3} style={{ padding: '15px', marginTop: '15px' }}>
      <Grid container spacing={2}>
        <Grid item>
          <Avatar alt={user} src={`https://source.unsplash.com/50x50/?profile,person`} />
        </Grid>
        <Grid item>
          <Typography variant="body1" gutterBottom>
            <strong>{user}</strong>: {text}
          </Typography>
          <div>
            <IconButton color="primary" onClick={() => onLike(id)}>
              👍 {likes > 0 ? likes : null}
            </IconButton>
            <IconButton color="error" onClick={() => onDislike(id)}>
              👎 {dislikes > 0 ? dislikes : null}
            </IconButton>
            <IconButton onClick={() => setReplying(!isReplying)}>
              ✍️ {replies ? replies.length : 0}
            </IconButton>
          </div>
          {isReplying && (
            <div>
              <TextField
                label="תשובה"
                multiline
                rows={4}
                fullWidth
                value={replyText}
                onChange={(e) => setReplyText(e.target.value)}
              />
              <Button variant="contained" color="primary" onClick={handleReply}>
                שלח תשובה
              </Button>
            </div>
          )}
        </Grid>
      </Grid>
    </Paper>
  );
};

const Comments = () => {
  const { currentUser } = useContext(UserContext);
  const { comments, addComment, addReply, likeComment, dislikeComment } = useContext(CommentContext);
  const [newCommentText, setNewCommentText] = React.useState('');

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

  const handleReplyComment = (commentId) => {
    addReply(commentId, 'Reply text', currentUser ? currentUser.name : 'Anonymous');
  };

  return (
    <Container style={{ paddingTop: '50px' }}>
      <Typography variant="h2" align="center" gutterBottom>
        תגובות משתמשים
      </Typography>

      {comments.map((comment) => (
        <Comment
          key={comment.id}
          id={comment.id}
          user={comment.user}
          text={comment.text}
          likes={comment.likes}
          dislikes={comment.dislikes}
          replies={comment.replies ? comment.replies.length : 0}
          onReply={handleReplyComment}
          onLike={handleLikeComment}
          onDislike={handleDislikeComment}
        />
      ))}

      {currentUser && (
        <Paper elevation={3} style={{ padding: '20px', marginTop: '30px' }}>
          <Typography variant="h4" gutterBottom>
            הוספת תגובה
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                label="שם משתמש"
                fullWidth
                value={currentUser.name}
                disabled
              />
            </Grid>
            <Grid item xs={12} sm={6}>
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
              <Button
                variant="contained"
                color="primary"
                onClick={handleCommentSubmit}
                disabled={!newCommentText}
              >
                שלח תגובה
              </Button>
            </Grid>
          </Grid>
        </Paper>
      )}
    </Container>
  );
};

export default Comments;
