// // // import React, { useContext, useState } from 'react';
// // // import { Paper, Grid, Avatar, Typography, IconButton, TextField, Button } from '@mui/material';
// // // import { CommentContext } from '../context/comments.context';
// // // import ReplyComment from './ReplyComment';


// // // const Comment = ({ id, user, text, likes, dislikes, replies }) => {
// // //   const { likeComment , dislikeComment} = useContext(CommentContext);
// // //   const [currentComment , setCurrentComment] = useState(null);
// // //   const [isReplying, setReplying] = useState(false);
// // //   const [replyText, setReplyText] = useState('');



// // //   const handleReply = () => {
// // //     setReplying(false);
// // //     onReply(id, replyText);
// // //     setReplyText('');
// // //   };

// // //   const onLike = async () => {
// // //     const updated = await likeComment(id , ( likes + 1 ));
// // //     setCurrentComment({...updated})
// // //   };

// // //   const onDislike = async () => {
// // //     const updated = await dislikeComment(id , ( dislikes + 1 ));
// // //     setCurrentComment({...updated})

// // //   };

// // //   const onReply = () => {
// // //     setReplying(false);
// // //     onReply(id, replyText);
// // //     setReplyText('');
// // //   };
// // //   return (
// // //     <Paper elevation={3} style={{ padding: '15px', marginTop: '15px' }}>
// // //       <Grid container spacing={2}>
// // //         <Grid item>
// // //           <Avatar alt={user} src={`https://source.unsplash.com/50x50/?profile,person`} />
// // //         </Grid>
// // //         <Grid item>
// // //           <Typography variant="body1" gutterBottom>
// // //             <strong>{user}</strong>: {text}
// // //           </Typography>
// // //           <div>
// // //             <IconButton color="primary" onClick={() => onLike(id)}>
// // //               👍 {likes > 0 ? likes : null}
// // //             </IconButton>
// // //             <IconButton color="error" onClick={() => onDislike(id)}>
// // //               👎 {dislikes > 0 ? dislikes : null}
// // //             </IconButton>
// // //             <IconButton onClick={() => setReplying(!isReplying)}>
// // //               ✍️ {replies ? replies.length : 0}
// // //             </IconButton>
// // //           </div>
// // //           {isReplying && (
// // //             <div>
// // //               <TextField
// // //                 label="תשובה"
// // //                 multiline
// // //                 rows={4}
// // //                 fullWidth
// // //                 value={comment}
// // //                 onChange={(e) => setReplyText(e.target.value)}
// // //               />
// // //               <Button variant="contained" color="primary" onClick={handleReply}>
// // //                 שלח תשובה
// // //               </Button>
// // //             </div>
// // //           )}
// // //           {replies && replies.map((reply) => (
// // //             <ReplyComment
// // //               key={reply._id}
// // //               id={reply._id}
// // //               user={reply.userName}
// // //               text={reply.comment}
// // //             />
// // //           ))}
// // //         </Grid>
// // //       </Grid>
// // //     </Paper>
// // //   );
// // // };

// // // export default Comment;

// // import React, { useContext, useState, useEffect } from 'react';
// // import { Paper, Grid, Avatar, Typography, IconButton, TextField, Button } from '@mui/material';
// // import { CommentContext } from '../context/comments.context';
// // import ReplyComment from './ReplyComment';

// // const Comment = ({ id, user, text, likes, dislikes, replies }) => {
// //   const { likeComment, dislikeComment, replyComment } = useContext(CommentContext);
// //   const [currentLikes, setCurrentLikes] = useState(likes);
// //   const [currentDislikes, setCurrentDislikes] = useState(dislikes);
// //   const [currentReplies, setCurrentReplies] = useState(replies);
// //   const [newReplies, setNewReplies] = useState([]);
// //   const [isReplying, setReplying] = useState(false);
// //   const [replyText, setReplyText] = useState('');

// //   const onLike = async () => {
// //     const updatedLikes = await likeComment(id, currentLikes + 1);
// //     setCurrentLikes(updatedLikes);
// //   };

// //   const onDislike = async () => {
// //     const updatedDislikes = await dislikeComment(id, currentDislikes + 1);
// //     setCurrentDislikes(updatedDislikes);
// //   };

// //   const onReply = async () => {
// //     const newReply = await replyComment(id, replyText);
// //     setNewReplies([...newReplies, newReply]);
// //     setReplyText('');
// //   };

// //   const updateReplies = () => {
// //     if (newReplies.length > 0) {
// //       setReplies([...currentReplies, ...newReplies]);
// //       setNewReplies([]);
// //     }
// //   };

// //   useEffect(() => {
// //     updateReplies();
// //   }, [currentReplies, newReplies]);

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
// //             <IconButton color="primary" onClick={onLike}>
// //               👍 {currentLikes > 0 ? currentLikes : null}
// //             </IconButton>
// //             <IconButton color="error" onClick={onDislike}>
// //               👎 {currentDislikes > 0 ? currentDislikes : null}
// //             </IconButton>
// //             <IconButton onClick={() => setReplying(!isReplying)}>
// //               ✍️ {currentReplies ? currentReplies.length : 0}
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
// //               <Button variant="contained" color="primary" onClick={onReply}>
// //                 שלח תשובה
// //               </Button>
// //             </div>
// //           )}
// //           {currentReplies && currentReplies.map((reply) => (
// //             <ReplyComment
// //               key={reply._id}
// //               id={reply._id}
// //               user={reply.userName}
// //               text={reply.contentComment}
// //             />
// //           ))}
// //         </Grid>
// //       </Grid>
// //     </Paper>
// //   );
// // };

// // export default Comment;

// // Comment.jsx
// // import React, { useContext, useState } from 'react';
// // import { Paper, Grid, Avatar, Typography, IconButton, TextField, Button } from '@mui/material';
// // import { CommentContext } from '../context/comments.context';
// // import ReplyComment from './ReplyComment';

// // const Comment = ({ id, user, text, likes, dislikes, replies }) => {
// //   const { likeComment, dislikeComment, replyComment } = useContext(CommentContext);
// //   const [currentComment, setCurrentComment] = useState(null);
// //   const [isReplying, setReplying] = useState(false);
// //   const [replyText, setReplyText] = useState('');

// //   const updateComment = (updatedComment) => {
// //     setCurrentComment({ ...updatedComment });
// //   };

// //   const onLike = async () => {
// //     const updated = await likeComment(id, likes + 1);
// //     setCurrentComment({...updated})
// //   };

// //   const onDislike = async () => {
// //     const updated = await dislikeComment(id, dislikes + 1);
// //     setCurrentComment({...updated})
// //   };

// //   const handleReply = async () => {
// //     setReplying(false);
// //     const updated = await replyComment(id, replyText);
// //     updateComment(updated);
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
// //             <IconButton color="primary" onClick={onLike}>
// //               👍 {likes > 0 ? likes : null}
// //             </IconButton>
// //             <IconButton color="error" onClick={onDislike}>
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
// //             <ReplyComment
// //               key={reply._id}
// //               id={reply._id}
// //               user={reply.userName}
// //               text={reply.comment}
// //             />
// //           ))}
// //         </Grid>
// //       </Grid>
// //     </Paper>
// //   );
// // };

// // export default Comment;

// import React, { useContext, useState } from 'react';
// import { Paper, Grid, Avatar, Typography, IconButton, TextField, Button } from '@mui/material';
// import { CommentContext } from '../context/comments.context';
// import ReplyComment from './ReplyComment';

// const Comment = ({ id, user, text, likes, dislikes, replies }) => {
//   const { likeComment, dislikeComment } = useContext(CommentContext);
//   const [currentComment, setCurrentComment] = useState({
//     id,
//     user,
//     text,
//     likes,
//     dislikes,
//     replies,
//   });
//   const [isReplying, setReplying] = useState(false);
//   const [replyText, setReplyText] = useState('');

//   const handleReply = () => {
//     setReplying(false);
//     onReply(id, replyText);
//     setReplyText('');
//   };

//   const onLike = async () => {
//     const updated = await likeComment(id, currentComment.likes + 1);
//     setCurrentComment({ ...currentComment, likes: likes + 1 });
//   };

//   const onDislike = async () => {
//     const updated = await dislikeComment(id, currentComment.dislikes + 1);
//     setCurrentComment({ ...currentComment, dislikes: dislikes + 1 });
//   };

//   const onReply = () => {
//     setReplying(false);
//     onReply(id, replyText);
//     setReplyText('');
//   };

//   return (
//     <Paper elevation={3} style={{ padding: '15px', marginTop: '15px' }}>
//       <Grid container spacing={2}>
//         <Grid item>
//           <Avatar alt={currentComment.user} src={`https://source.unsplash.com/50x50/?profile,person`} />
//         </Grid>
//         <Grid item>
//           <Typography variant="body1" gutterBottom>
//             <strong>{currentComment.user}</strong>: {currentComment.text}
//           </Typography>
//           <div>
//             <IconButton color="primary" onClick={onLike}>
//               👍 {currentComment.likes > 0 ? currentComment.likes : null}
//             </IconButton>
//             <IconButton color="error" onClick={onDislike}>
//               👎 {currentComment.dislikes > 0 ? currentComment.dislikes : null}
//             </IconButton>
//             <IconButton onClick={() => setReplying(!isReplying)}>
//               ✍️ {currentComment.replies ? currentComment.replies.length : 0}
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
//           {currentComment.replies && currentComment.replies.map((reply) => (
//             <ReplyComment
//               key={reply._id}
//               id={reply._id}
//               user={reply.userName}
//               text={reply.comment}
//             />
//           ))}
//         </Grid>
//       </Grid>
//     </Paper>
//   );
// };
// export default Comment;

import React, { useState, useContext } from 'react';
import { Container, Typography, TextField, Button, Grid, Paper, Avatar  } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import ReplyComment from './ReplyComment';
import { CommentContext } from '../context/comments.context';
import { UserContext } from '../context/users.context';
const Comment = ({ id, user, text, like, disLike, replies, onUpdate }) => {
  const { likeComment, dislikeComment, replyComment } = useContext(CommentContext);
  const {currentUser} = useContext(UserContext);
  const [currentComment, setCurrentComment] = useState({
    id,
    user,
    text,
    like,
    disLike,
    replies,
  });
  const [isReplying, setReplying] = useState(false);
  const [replyText, setReplyText] = useState('');

  const handleReply = async () => {
     await replyComment(currentComment.id , replyText);
     setCurrentComment({ ...currentComment, replies: [...replies , { userName:currentUser.userName, comment:replyText }] });
     onUpdate();
  };

  const onLike = async () => {
    const updated = await likeComment(id, currentComment.like + 1);
    setCurrentComment({ ...currentComment, like: currentComment.like + 1 });
    onUpdate();
  };

  const onDislike = async () => {
    const updated = await dislikeComment(id, currentComment.disLike + 1);
    setCurrentComment({ ...currentComment, disLike: currentComment.disLike + 1 });
    onUpdate();
  };

  return (
    <Paper elevation={3} style={{ padding: '15px', marginTop: '15px' }}>
      <Grid container spacing={2}>
        <Grid item>
          <Avatar alt={currentComment.user} src={`https://source.unsplash.com/50x50/?profile,person`} />
        </Grid>
        <Grid item>
          <Typography variant="body1" gutterBottom>
            <strong>{currentComment.user}</strong>: {currentComment.text}
          </Typography>
          <div>
            <IconButton color="primary" onClick={onLike}>
              👍 {currentComment.like > 0 ? currentComment.like : null}
            </IconButton>
            <IconButton color="error" onClick={onDislike}>
              👎 {currentComment.disLike > 0 ? currentComment.disLike : null}
            </IconButton>
            <IconButton onClick={() => setReplying(!isReplying)}>
              ✍️ {currentComment.replies ? currentComment.replies.length : 0}
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
          {currentComment.replies && currentComment.replies.map((reply) => (
            <ReplyComment
              key={reply._id}
              id={reply._id}
              user={reply.userName}
              text={reply.comment}
            />
          ))}
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Comment;
