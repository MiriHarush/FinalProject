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
    const commentID = currentComment.id;
    const comment = replyText;
     await replyComment(commentID , comment);
     setCurrentComment({ ...currentComment, replies: [...replies , { userName:currentUser.userName, comment:replyText }] });
     onUpdate();
     setReplying(false);
     setReplyText('');
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
                label="Reply"
                multiline
                rows={4}
                fullWidth
                value={replyText}
                onChange={(e) => setReplyText(e.target.value)}
                sx={{
                  '&:focus': {
                    borderColor: 'rgb(174, 124, 61)',
                  },
                  '& label.Mui-focused': {
                    color: 'rgb(174, 124, 61)',
                  },
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      borderColor: 'rgb(174, 124, 61)',
                    },
                    '&:hover fieldset': {
                      borderColor: 'rgb(174, 124, 61)',
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: 'rgb(174, 124, 61)',
                    },
                  },
                }}
              />
              <Button variant="contained" onClick={handleReply} style={{background:"rgb(174, 124, 61)"}}>
              Send a reply
                            </Button>
            </div>
          )}
          {currentComment.replies && currentComment.replies.map((reply) => (
            <ReplyComment
              key={reply._id}
              id={reply._id}
              user={reply.userName}
              profileImage={reply.profileImage}
              text={reply.comment}
            />
          ))}
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Comment;