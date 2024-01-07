import React, { useState, useContext } from 'react';
import { Container, Typography, TextField, Button, Grid, Paper, Avatar  } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import ReplyComment from './ReplyComment';
import { CommentContext } from '../context/comments.context';
import { UserContext } from '../context/users.context';
const Comment = ({ id, user, profileImage, text, like, disLike, replies, onUpdate }) => {
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
          <Avatar alt={currentComment.user} src={`${profileImage}`} />
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
// import React, { useState, useContext } from 'react';
// import { Container, Typography, TextField, Button, Grid, Paper, Avatar } from '@mui/material';
// import IconButton from '@mui/material/IconButton';
// import ReplyComment from './ReplyComment';
// import { CommentContext } from '../context/comments.context';
// import { UserContext } from '../context/users.context';

// const Comment = ({ id, user, profileImage, text, like, disLike, replies, onUpdate }) => {
//   const { likeComment, dislikeComment, replyComment } = useContext(CommentContext);
//   const { currentUser } = useContext(UserContext);
//   const [currentComment, setCurrentComment] = useState({
//     id,
//     user,
//     profileImage,
//     text,
//     like,
//     disLike,
//     replies,
//   });
//   const [isReplying, setReplying] = useState(false);
//   const [replyText, setReplyText] = useState('');
//   const [isFormVisible, setFormVisible] = useState(false); // הוספתי משתנה לניהול המצב של הטופס

//   const handleReply = async () => {
//     await replyComment(currentComment.id, replyText);
//     setCurrentComment({ ...currentComment, replies: [...replies, { userName: currentUser.userName, comment: replyText }] });
//     onUpdate();
//     setFormVisible(false); // עכשיו, לאחר ששלחו תשובה, נסתיר את הטופס
//   };

//   const onLike = async () => {
//     const updated = await likeComment(id, currentComment.like + 1);
//     setCurrentComment({ ...currentComment, like: currentComment.like + 1 });
//     onUpdate();
//   };

//   const onDislike = async () => {
//     const updated = await dislikeComment(id, currentComment.disLike + 1);
//     setCurrentComment({ ...currentComment, disLike: currentComment.disLike + 1 });
//     onUpdate();
//   };

//   return (
//     <Paper elevation={3} style={{ padding: '15px', marginTop: '15px' }}>
//       <Grid container spacing={2}>
//         <Grid item>
//           <Avatar alt={currentComment.user} src={`${profileImage}`} />
//         </Grid>
//         <Grid item>
//           <Typography variant="body1" gutterBottom>
//             <strong>{currentComment.user}</strong>: {currentComment.text}
//           </Typography>
//           <div>
//             <IconButton color="primary" onClick={onLike}>
//               👍 {currentComment.like > 0 ? currentComment.like : null}
//             </IconButton>
//             <IconButton color="error" onClick={onDislike}>
//               👎 {currentComment.disLike > 0 ? currentComment.disLike : null}
//             </IconButton>
//             <IconButton onClick={() => setReplying(!isReplying)}>
//               ✍️ {currentComment.replies ? currentComment.replies.length : 0}
//             </IconButton>
//           </div>
//           {isReplying && (
//             <div>
//               {isFormVisible ? (
//                 <>
//                   <TextField
//                     label="תשובה"
//                     multiline
//                     rows={4}
//                     fullWidth
//                     value={replyText}
//                     onChange={(e) => setReplyText(e.target.value)}
//                   />
//                   <Button variant="contained" color="primary" onClick={handleReply}>
//                     שלח תשובה
//                   </Button>
//                   {/* הוספתי את התנאי הבא: אם התשובה נשלחה, נסתיר את הטופס */}
//                   {!replyText && (
//                     <Button variant="outlined" color="primary" onClick={() => setFormVisible(false)}>
//                       בטל
//                     </Button>
//                   )}
//                 </>
//               ) : (
//                 <Button variant="contained" color="primary" onClick={() => setFormVisible(true)}>
//                   הוסף תשובה
//                 </Button>
//               )}
//             </div>
//           )}
//           {currentComment.replies &&
//             currentComment.replies.map((reply) => (
//               <ReplyComment key={reply._id} user={reply.userName} text={reply.comment} />
//             ))}
//         </Grid>
//       </Grid>
//     </Paper>
//   );
// };

// export default Comment;
