import React, { useState } from 'react';
import { Container, Typography, TextField, Button, Avatar, Grid, Paper } from '@mui/material';

const Comment = ({ user, text }) => (
  <Paper elevation={3} style={{ padding: '15px', marginTop: '15px' }}>
    <Grid container spacing={2}>
      <Grid item>
        <Avatar alt={user} src={`https://source.unsplash.com/50x50/?profile,person`} />
      </Grid>
      <Grid item>
        <Typography variant="body1" gutterBottom>
          <strong>{user}</strong>: {text}
        </Typography>
      </Grid>
    </Grid>
  </Paper>
);

const Comments = () => {
  const [comments, setComments] = useState([
    { user: 'John Doe', text: 'Great website! I love the content.' },
    { user: 'Jane Smith', text: 'The courses are amazing. Highly recommended!' },
    // Add more sample comments as needed
  ]);

  const [newComment, setNewComment] = useState({ user: 'Anonymous', text: '' });

  const handleCommentSubmit = () => {
    setComments([...comments, newComment]);
    setNewComment({ user: 'Anonymous', text: '' });
  };

  return (
    <Container style={{ paddingTop: '50px' }}>
      <Typography variant="h2" align="center" gutterBottom>
        תגובות משתמשים
      </Typography>

      {comments.map((comment, index) => (
        <Comment key={index} user={comment.user} text={comment.text} />
      ))}

      <Paper elevation={3} style={{ padding: '20px', marginTop: '30px' }}>
        <Typography variant="h4" gutterBottom>
          הוספת תגובה
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              label="שם משתמש"
              fullWidth
              value={newComment.user}
              onChange={(e) => setNewComment({ ...newComment, user: e.target.value })}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="תוכן התגובה"
              multiline
              rows={4}
              fullWidth
              value={newComment.text}
              onChange={(e) => setNewComment({ ...newComment, text: e.target.value })}
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              variant="contained"
              color="primary"
              onClick={handleCommentSubmit}
              disabled={!newComment.text}
            >
              שלח תגובה
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default Comments;
