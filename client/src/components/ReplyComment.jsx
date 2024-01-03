import React, { useState } from 'react';
import { Typography, TextField, Button, Avatar, Grid, Paper, IconButton } from '@mui/material';

const ReplyComment = ({ id, user, text, onReply }) => {
  const [isReplying, setReplying] = useState(false);
  const [replyText, setReplyText] = useState('');

  const handleReply = () => {
    setReplying(false);
    onReply(replyText);
    setReplyText('');
  };

  return (
    <Paper elevation={3} style={{ padding: '15px', marginTop: '15px', marginLeft: '50px' }}>
      <Grid container spacing={2}>
        <Grid item>
          <Avatar alt={user} src={`https://source.unsplash.com/50x50/?profile,person`} />
        </Grid>
        <Grid item>
          <Typography variant="body1" gutterBottom>
            <strong>{user}</strong>: {text}
          </Typography>
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

export default ReplyComment;
