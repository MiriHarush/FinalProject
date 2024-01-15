import React, { useState, useContext, useEffect } from 'react';
import { Container, Typography, TextField, Button, IconButton } from '@mui/material';
import { CommentContext } from '../context/comments.context';
import Comment from '../components/Comment';
import { UserContext } from '../context/users.context';
import Footer from '../components/Footer';

const Comments = () => {
  const [comments, setComments] = useState([]);
  const [commentUpdate, setCommentUpdate] = useState(0);
  const { getAllComments, addComment } = useContext(CommentContext);
  const { currentUser } = useContext(UserContext);

console.log(currentUser);

  const [newCommentText, setNewCommentText] = useState('');
  const [isCommenting, setIsCommenting] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const commentsData = await getAllComments();
      setComments(commentsData.result);
    };
    fetchData();
  }, [commentUpdate]);

  const handleCommentSubmit = async () => {
    const email = currentUser.email;
    const contentComment = newCommentText;
    await addComment({ email, contentComment });
    setNewCommentText('');
    setIsCommenting(false);
    setCommentUpdate(commentUpdate + 1);
  };

  return (
    <>
    <Container style={{ paddingTop: '50px' }}>
      {currentUser && (
        <div>
          <IconButton onClick={() => setIsCommenting(!isCommenting)}>
            ✍️ הוסף תגובה
          </IconButton>
          {isCommenting && (
            <div>
              <TextField
                label="תגובה"
                multiline
                rows={4}
                fullWidth
                value={newCommentText}
                onChange={(e) => setNewCommentText(e.target.value)}
              />
              <Button variant="contained" color="primary" onClick={handleCommentSubmit}>
                שלח תגובה
              </Button>
            </div>
          )}
        </div>
      )}
      {comments.map((comment) => (

        <Comment
          key={comment._id}
          id={comment._id}
          user={comment.userName}
          profileImage={comment.profileImage}
          text={comment.contentComment}
          like={comment.like}
          disLike={comment.disLike}
          replies={Array.isArray(comment.reply) ? comment.reply : []}
          onUpdate={() => setCommentUpdate(commentUpdate + 1)}
        />
      ))}
    </Container>
    <Footer/>
    </>
  );
};

export default Comments;



