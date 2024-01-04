// // import React, { useContext, useState } from 'react';
// // import { Container, Typography, TextField, Button, Avatar, Grid, Paper, IconButton } from '@mui/material';
// // import { UserContext } from '../context/users.context';
// // import { CommentContext } from '../context/comments.context';

// // const Comment = ({ id, user, text, likes, dislikes, replies, onReply, onLike, onDislike }) => {
// //   const [isReplying, setReplying] = useState(false);
// //   const [replyText, setReplyText] = useState('');

// //   const handleReply = () => {
// //     setReplying(false);
// //     onReply(id, replyText);
// //     setReplyText('');
// //   };

// //   return (
// //     <Paper elevation={3} style={{ padding: '15px', marginTop: '15px' }}>
// //       <Grid container spacing={2}>
// //         <Grid item>
// //           <Avatar alt={user} src={`https://source.unsplash.com/50x50/?profile,person`} />
// //         </Grid>
// //         <Grid item>
// //           <Typography variant="body1" gutterBottom>
// //             <strong>{user}</strong>: {text}
// //           </Typography>
// //           <div>
// //             <IconButton color="primary" onClick={() => onLike(id)}>
// //               👍 {likes > 0 ? likes : null}
// //             </IconButton>
// //             <IconButton color="error" onClick={() => onDislike(id)}>
// //               👎 {dislikes > 0 ? dislikes : null}
// //             </IconButton>
// //             <IconButton onClick={() => setReplying(!isReplying)}>
// //               ✍️ {replies ? replies.length : 0}
// //             </IconButton>
// //           </div>
// //           {isReplying && (
// //             <div>
// //               <TextField
// //                 label="תשובה"
// //                 multiline
// //                 rows={4}
// //                 fullWidth
// //                 value={replyText}
// //                 onChange={(e) => setReplyText(e.target.value)}
// //               />
// //               <Button variant="contained" color="primary" onClick={handleReply}>
// //                 שלח תשובה
// //               </Button>
// //             </div>
// //           )}
// //           {replies && replies.map((reply) => (
// //             <Comment
// //               key={reply.id}
// //               id={reply.id}
// //               user={reply.user}
// //               text={reply.text}
// //               likes={reply.likes}
// //               dislikes={reply.dislikes}
// //               replies={reply.replies ? reply.replies.length : 0}
// //               onReply={() => { }}
// //               onLike={() => { }}
// //               onDislike={() => { }}
// //             />
// //           ))}
// //         </Grid>
// //       </Grid>
// //     </Paper>
// //   );
// // };

// // const Comments = () => {
// //   const { currentUser } = useContext(UserContext);
// //   const { comments, addComment, addReply, likeComment, dislikeComment } = useContext(CommentContext);
// //   const [newCommentText, setNewCommentText] = React.useState('');

// //   const handleCommentSubmit = () => {
// //     addComment(newCommentText, currentUser ? currentUser.name : 'Anonymous');
// //     setNewCommentText('');
// //   };

// //   const handleLikeComment = (commentId) => {
// //     likeComment(commentId);
// //   };

// //   const handleDislikeComment = (commentId) => {
// //     dislikeComment(commentId);
// //   };

// //   const handleReplyComment = (commentId, replyText) => {
// //     addReply(replyText, currentUser ? currentUser.name : 'Anonymous', commentId);
// //     setNewCommentText('');
// //   };


// //   return (
// //     <Container style={{ paddingTop: '50px' }}>
// //       <Typography variant="h2" align="center" gutterBottom>
// //         תגובות משתמשים
// //       </Typography>

// //       {comments.map((comment) => (
// //         <Comment
// //           key={comment.id}
// //           id={comment.id}
// //           user={comment.user}
// //           text={comment.text}
// //           likes={comment.likes}
// //           dislikes={comment.dislikes}
// //           replies={comment.replies ? comment.replies.length : 0}
// //           onReply={handleReplyComment}
// //           onLike={handleLikeComment}
// //           onDislike={handleDislikeComment}
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
// import React, { useContext, useState , useEffect} from 'react';
// import { Container, Typography, TextField, Button, Avatar, Grid, Paper, IconButton } from '@mui/material';
// import Comment from '../components/Comment';
// import { UserContext } from '../context/users.context';
// import { CommentContext } from '../context/comments.context';


// const Comments = () => {
//   const [allComments , setAllComments] = useState([]);
//   const { currentUser } = useContext(UserContext);
//  // const { comments, addComment, addReply, likeComment, dislikeComment } = useContext(CommentContext);

//   const { comments , getAllComments } = useContext(CommentContext);
//   const [newCommentText, setNewCommentText] = React.useState('');
// useEffect(async () => {
//   await setAllComments(getAllComments());
//   return () => {
    
//   };
// }, [])


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

//   const handleReplyComment = (commentId, replyText) => {
//     addReply(replyText, currentUser ? currentUser.name : 'Anonymous', commentId);
//     setNewCommentText('');
//   };

//   return (
//     <Container style={{ paddingTop: '50px' }}>
//       <Typography variant="h2" align="center" gutterBottom>
//         תגובות משתמשים
//       </Typography>
    
//       {/* {comments.map((comment) => (
//         <Comment
//           key={comment.id}
//           id={comment.id}
//           user={comment.user}
//           text={comment.text}
//           likes={comment.likes}
//           dislikes={comment.dislikes}
//           replies={Array.isArray(comment.replies) ? comment.replies : []}
//           onReply={handleReplyComment}
//           onLike={handleLikeComment}
//           onDislike={handleDislikeComment}
//         />
//       ))} */}

//       {/* {currentUser && (
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
//       )} */}
//     </Container>
//   );
// };

// export default Comments;
// Comments.js
import React, { useContext, useState, useEffect } from 'react';
import { Container, Typography, TextField, Button, Grid, Paper } from '@mui/material';
import Comment from '../components/Comment'; // Assuming Comment.js is in the same directory
import { CommentContext } from '../context/comments.context';

const Comments = () => {
  const [newCommentText, setNewCommentText] = React.useState('');
  const [comments, setComments] = React.useState([]);
  const { getAllComments  } = useContext(CommentContext);


  useEffect(() => {
    const fetchData = async () => {
      const commentsData = await getAllComments();
      setComments(commentsData.result)
    }
    fetchData();

  }, [])

  const handleCommentSubmit = () => {
    addComment(newCommentText, currentUser ? currentUser.name : 'Anonymous');
    setNewCommentText('');
  };

  // const handleLikeComment = (commentId) => {
  //   likeComment(commentId);
  // };

  // const handleDislikeComment = (commentId) => {
  //   dislikeComment(commentId);
  // };

  // const handleReplyComment = (commentId, replyText) => {
  //   addReply(replyText, currentUser ? currentUser.name : 'Anonymous', commentId);
  //   setNewCommentText('');
  // };

  return (
    <Container style={{ paddingTop: '50px' }}>
      <Typography variant="h2" align="center" gutterBottom>
        תגובות משתמשים
      </Typography>
      {comments && comments.map((comment) => (
  <Comment
    key={comment._id}
    id={comment._id}
    user={comment.userName}
    text={comment.contentComment}
    likes={comment.like}
    dislikes={comment.disLike}
    replies={Array.isArray(comment.reply) ? comment.reply : []}
    // onReply={handleReplyComment}
    // onLike={handleLikeComment}
    // onDislike={handleDislikeComment}
  />
))}

    </Container>
  );
};

export default Comments;
