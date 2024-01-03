import React, { useContext, useState } from 'react';
import { Typography, TextField, Button, Avatar, Grid, Paper, IconButton } from '@mui/material';
import { UserContext } from '../context/users.context';
import { CommentContext } from '../context/comments.context';
import ReplyComment from './ReplyComment';

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
                    {/* {Array.isArray(replies) && replies.map((replyItem) => (
              <Comment
                key={replyItem.id}
                id={replyItem.id}
                user={replyItem.user}
                text={replyItem.text}
                likes={replyItem.likes}
                dislikes={replyItem.dislikes}
                replies={Array.isArray(replyItem.replies) ? replyItem.replies : []}
                onReply={() => { }}
                onLike={() => { }}
                onDislike={() => { }}
              />
            ))}
             */}
                    {Array.isArray(replies) && replies.length > 0 && (
                        <Typography variant="subtitle2" color="textSecondary" gutterBottom>
                            תגובות:
                        </Typography>
                    )}

                    {Array.isArray(replies) && replies.map((replyItem) => (
                        <ReplyComment
                            key={replyItem.id}
                            id={replyItem.id}
                            user={replyItem.user}
                            text={replyItem.text}
                            likes={replyItem.likes}
                            dislikes={replyItem.dislikes}
                            onReply={(replyText) => {
                                // Handle reply to the reply here
                            }}
                            onLike={() => {
                                // Handle like for the reply here
                            }}
                            onDislike={() => {
                                // Handle dislike for the reply here
                            }}
                        />
                    ))}

                </Grid>
            </Grid>
        </Paper>
    );
};
export default Comment;