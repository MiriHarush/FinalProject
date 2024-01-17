import React, { useState, useContext, useEffect } from 'react';
import { Container, Typography, TextField, Button, IconButton } from '@mui/material';
import { CommentContext } from '../context/comments.context';
import Comment from '../components/Comment';
import { UserContext } from '../context/users.context';
import Footer from '../components/Footer';
import { alpha, styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import FormControl from '@mui/material/FormControl';


const ValidationTextField = styled(TextField)({
  '& input:valid + fieldset': {
    borderColor: '#E0E3E7',
    borderWidth: 1,
  },
  '& input:invalid + fieldset': {
    borderColor: 'red',
    borderWidth: 1,
  },
  '& input:valid:focus + fieldset': {
    borderLeftWidth: 4,
    padding: '4px !important', // override inline-style
  },
});


const Comments = () => {
  const [comments, setComments] = useState([]);
  const [commentUpdate, setCommentUpdate] = useState(0);
  const { getAllComments, addComment } = useContext(CommentContext);
  const { currentUser } = useContext(UserContext);

  // setCurrentUser(JSON.parse(localStorage.getItem('user')));
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
      <Container style={{ paddingTop: '50px', minHeight: "800px" }}>
        {currentUser && (
          <div>
            <IconButton onClick={() => setIsCommenting(!isCommenting)}>
              ✍️ Add a comment
            </IconButton>
            {isCommenting && (
              <div>
                <TextField
                  label="Comment"
                  multiline
                  rows={4}
                  fullWidth
                  value={newCommentText}
                  onChange={(e) => setNewCommentText(e.target.value)}
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
                <Button variant="contained" onClick={handleCommentSubmit} style={{ background: "rgb(174, 124, 61)" }}>
                  Send a comment
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
      <Footer />
    </>
  );
};

export default Comments;



