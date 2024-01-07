// // // // import React, { useContext, useState, useEffect } from 'react';
// // // // import { Container, Typography, TextField, Button, Grid, Paper } from '@mui/material';
// // // // import Comment from '../components/Comment'; // Assuming Comment.js is in the same directory
// // // // import { CommentContext } from '../context/comments.context';

// // // // const Comments = () => {
// // // //   const [newCommentText, setNewCommentText] = React.useState('');
// // // //   const [comments, setComments] = React.useState([]);
// // // //   const { getAllComments  } = useContext(CommentContext);


// // // //   useEffect(() => {
// // // //     const fetchData = async () => {
// // // //       const commentsData = await getAllComments();
// // // //       setComments(commentsData.result)
// // // //     }
// // // //     fetchData();

// // // //   }, [])

// // // //   const handleCommentSubmit = () => {
// // // //     addComment(newCommentText, currentUser ? currentUser.name : 'Anonymous');
// // // //     setNewCommentText('');
// // // //   };

// // // //   return (
// // // //     <Container style={{ paddingTop: '50px' }}>
// // // //       <Typography variant="h2" align="center" gutterBottom>
// // // //         תגובות משתמשים
// // // //       </Typography>
// // // //       {comments && comments.map((comment) => (
// // // //   <Comment
// // // //     key={comment._id}
// // // //     id={comment._id}
// // // //     user={comment.userName}
// // // //     text={comment.contentComment}
// // // //     likes={comment.like}
// // // //     dislikes={comment.disLike}
// // // //     replies={Array.isArray(comment.reply) ? comment.reply : []}
// // // //   />
// // // // ))}

// // // //     </Container>
// // // //   );
// // // // };

// // // // export default Comments;

// // // import React, { useContext, useEffect } from 'react';
// // // import { Container, Typography } from '@mui/material';
// // // import Comment from '../components/Comment';
// // // import { CommentContext } from '../context/comments.context';

// // // const Comments = () => {
// // //   const [comments, setComments] = React.useState([]);
// // //   const { getAllComments } = useContext(CommentContext);

// // //   useEffect(() => {
// // //     const fetchData = async () => {
// // //       const commentsData = await getAllComments();
// // //       setComments(commentsData.result);
// // //     };
// // //     fetchData();
// // //   }, []);

// // //   return (
// // //     <Container style={{ paddingTop: '50px' }}>
// // //       <Typography variant="h2" align="center" gutterBottom>
// // //         תגובות משתמשים
// // //       </Typography>
// // //       {comments && comments.map((comment) => (
// // //         <Comment
// // //           key={comment._id}
// // //           id={comment._id}
// // //           user={comment.userName}
// // //           text={comment.contentComment}
// // //           likes={comment.like}
// // //           dislikes={comment.disLike}
// // //           replies={Array.isArray(comment.reply) ? comment.reply : []}
// // //         />
// // //       ))}
// // //     </Container>
// // //   );
// // // };

// // // export default Comments;
// // // Comments.jsx
// // import React, { useContext, useState, useEffect } from 'react';
// // import { Container, Typography, TextField, Button, Grid, Paper } from '@mui/material';
// // import Comment from '../components/Comment';
// // import { CommentContext } from '../context/comments.context';

// // const Comments = () => {
// //   const [newCommentText, setNewCommentText] = React.useState('');
// //   const [comments, setComments] = React.useState([]);
// //   const { getAllComments, addComment  } = useContext(CommentContext);

// //   useEffect(() => {
// //     const fetchData = async () => {
// //       const commentsData = await getAllComments();
// //       setComments(commentsData.result);
// //     };
// //     fetchData();
// //   }, []);

// //   const handleCommentSubmit = async () => {
// //     await addComment(newCommentText, currentUser ? currentUser.name : 'Anonymous');
// //     setNewCommentText('');
// //   };

// //   return (
// //     <Container style={{ paddingTop: '50px' }}>
// //       <Typography variant="h2" align="center" gutterBottom>
// //         תגובות משתמשים
// //       </Typography>
// //       {comments && comments.map((comment) => (
// //         <Comment
// //           key={comment._id}
// //           id={comment._id}
// //           user={comment.userName}
// //           text={comment.contentComment}
// //           likes={comment.like}
// //           dislikes={comment.disLike}
// //           replies={Array.isArray(comment.reply) ? comment.reply : []}
// //         />
// //       ))}
// //       <div>
// //         <TextField
// //           label="תגובה חדשה"
// //           multiline
// //           rows={4}
// //           fullWidth
// //           value={newCommentText}
// //           onChange={(e) => setNewCommentText(e.target.value)}
// //         />
// //         <Button variant="contained" color="primary" onClick={handleCommentSubmit}>
// //           שלח תגובה
// //         </Button>
// //       </div>
// //     </Container>
// //   );
// // };

// // export default Comments;
// import React, { useState, useContext, useEffect } from 'react';
// import { Container, Typography, TextField, Button, Grid, Paper } from '@mui/material';
// import { CommentContext } from '../context/comments.context';
// import Comment from '../components/Comment';

// const Comments = () => {
//   const [comments, setComments] = useState([]);
//   const [commentUpdate, setCommentUpdate] = useState(0);
//   const { getAllComments, addComment, likeComment, dislikeComment } = useContext(CommentContext);

//   useEffect(() => {
//     const fetchData = async () => {
//       const commentsData = await getAllComments();
//       setComments(commentsData.result);
//     };
//     fetchData();
//   }, [commentUpdate]);


  

//   return (
   
//     <Container style={{ paddingTop: '50px' }}>
//                {/* <IconButton onClick={() => setGeneralReplying(!isGeneralReplying)}>
//             ✍️ הוסף תגובה
//           </IconButton>

//           {isGeneralReplying && (
//             <div>
//               <TextField
//                 label="תגובה"
//                 multiline
//                 rows={4}
//                 fullWidth
//                 value={generalReplyText}
//                 onChange={(e) => setGeneralReplyText(e.target.value)}
//               />
//               <Button variant="contained" color="primary" onClick={handleGeneralReply}>
//                 שלח תגובה
//               </Button>
//             </div>
//           )} */}
//       {comments.map((comment) => (
//         <Comment
//           key={comment._id}
//           id={comment._id}
//           user={comment.userName}
//           text={comment.contentComment}
//           like={comment.like}
//           disLike={comment.disLike}
//           replies={Array.isArray(comment.reply) ? comment.reply : []}
//           onUpdate={() =>  setCommentUpdate(commentUpdate + 1) }
//         />
//       ))}
//     </Container>
//   );
// };

// export default Comments;
import React, { useState, useContext, useEffect } from 'react';
import { Container, Typography, TextField, Button, IconButton } from '@mui/material';
import { CommentContext } from '../context/comments.context';
import Comment from '../components/Comment';
import { UserContext } from '../context/users.context';

const Comments = () => {
  const [comments, setComments] = useState([]);
  const [commentUpdate, setCommentUpdate] = useState(0);
  const { getAllComments, addComment , likeComment, dislikeComment } = useContext(CommentContext);
  const { currentUser } = useContext(UserContext);

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
    await addComment({  email , contentComment });
    setNewCommentText('');
    setIsCommenting(false);
    setCommentUpdate(commentUpdate + 1);
  };

  return (
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
  );
};

export default Comments;
