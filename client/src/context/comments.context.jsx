import React, { createContext, useState, useContext } from 'react';
import { axiosRequest } from '../utils/serverConnection'
export const CommentContext = createContext();

export const CommentProvider = ({ children }) => {
  const [comments, setComments] = useState(null);

  const getAllComments = async () => {
    try {
      const config = {
        method: 'get',
        url: 'http://localhost:3000/comments/getAllComments',
      };
      
      const allComments = await axiosRequest(config);
      console.log(allComments.result);
       setComments({...allComments.result});  
       return allComments;
    } catch (error) {
      // Handle errors
      if (error.response && error.response.data && error.response.data.message) {
        console.error('Error fetching comments:', error.response.data.message);
      } else {
        console.error('An error occurred during fetching comments:', error);
      }
    }
  };

  const likeComment = async (commentID) => {
    try {
      const config = {
        method: 'patch',
        url: `http://localhost:3000/comments/updateLike/${commentID}`,
      };
      const response = await axiosRequest(config);
      console.log(response.result);
    
    } catch (error) {
      // Handle errors
      if (error.response && error.response.data && error.response.data.message) {
        console.error('Error fetching comments:', error.response.data.message);
      } else {
        console.error('An error occurred during fetching comments:', error);
      }
    }
  };

  const dislikeComment = async (commentID) => {
    try {
      const config = {
        method: 'patch',
        url: `http://localhost:3000/comments/updateDisLike/${commentID}`,
      };
      const response = await axiosRequest(config);
      console.log(response.result);
    
    } catch (error) {
      // Handle errors
      if (error.response && error.response.data && error.response.data.message) {
        console.error('Error fetching comments:', error.response.data.message);
      } else {
        console.error('An error occurred during fetching comments:', error);
      }
    }
  };
  

//   const addComment = async (text, user) => {
//     try {
//       const config = {
//         method: 'post',
//         url: 'http://localhost:3000/comments/createComment',
//         data:{}
//       };
      
//       const allComments = await axiosRequest(config);
//       console.log('get all func',allComments);
//       setComments(...allComments)
//       console.log('comments from  cntx' , allComments);
//     } catch (error) {
//       // Handle login errors
//       if (error.response && error.response.data && error.response.data.message) {
//         setLoginError(error.response.data.message);
//       } else {
//         setLoginError('An error occurred during login.');
//       }
//     };
  
//     //http://localhost:3000/comments/createComment
//     //מקבל בbody: email,contentComment
// //ומחזיר : email, userName, contentComment, like, disLike, _id", reply: []
//     const newComment = {
//       id: comments.length + 1,
//       user: user || 'Anonymous',
//       text: text,
//       likes: 0,
//       dislikes: 0,
//       replies: [],
//     };
//     setComments([...comments, newComment]);
//   };
     

  
//   const deleteComment = (commentId) => {
//     const updatedComments = comments.filter((comment) => comment.id !== commentId);
//     setComments(updatedComments);
//   };

//   const likeComment = (commentId) => {
//     const updatedComments = comments.map((comment) =>
//       comment.id === commentId ? { ...comment, likes: comment.likes + 1 } : comment
//     );
//     setComments(updatedComments);
//   };

//   const dislikeComment = (commentId) => {
//     const updatedComments = comments.map((comment) =>
//       comment.id === commentId ? { ...comment, dislikes: comment.dislikes + 1 } : comment
//     );
//     setComments(updatedComments);
//   };

//   const addReply = (text, user, commentId) => {
//     //   add reply: http://localhost:3000/comments/addreply/65951a321a0f2dee687cdc7b
// // מקבל ID בparams
// // ןב body מקבל : email , comment
// //  מחזיר אובייקט כמו ה create comment
//     const updatedComments = comments.map((comment) => {
//       if (comment.id === commentId) {
//         return {
//           ...comment,
//           replies: [
//             ...comment.replies,
//             {
//               id: comment.replies.length + 1,
//               user: user || 'Anonymous',
//               text: text,
//             },
//           ],
//         };
//       }
//       return comment;
//     });
//     setComments(updatedComments);
//   };
//, addComment, deleteComment, likeComment, dislikeComment, addReply
  return (
    <CommentContext.Provider value={{ comments, getAllComments , likeComment , dislikeComment }}>
      {children}
    </CommentContext.Provider>
  );
};
