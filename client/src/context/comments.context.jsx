import React, { createContext, useState, useContext } from 'react';
import { axiosRequest } from '../utils/serverConnection';
import { UserContext } from './users.context';

export const CommentContext = createContext();

export const CommentProvider = ({ children }) => {
  const [comments, setComments] = useState([]);
  const { currentUser } = useContext(UserContext);

  const token = localStorage.getItem('userToken');
    const authorization = `Bearer ${token}`;  

  const getAllComments = async () => {
    try {
      const config = {
        method: 'get',
        url: 'http://localhost:3000/comments/getAllComments',
      };
      
      const allComments = await axiosRequest(config);
      setComments([ ...allComments.result]);  
      return allComments;
    } catch (error) {
      if (error.response && error.response.data && error.response.data.message) {
        console.error('Error fetching comments:', error.response.data.message);
      } else {
        console.error('An error occurred during fetching comments:', error);
      }
    }
  };

  const updateComment = (commentID, updatedData) => {
    setComments((comments) =>
      comments.map((comment) =>
        comment._id === commentID ? {  ...updatedData } : comment
      )
    );
    return comments;
  };
  
  const addComment = async ({ email, contentComment }) => {
    console.log(currentUser)
    console.log(email,contentComment,'add comment');
    try {
      const config = {  
        headers: {
        'Authorization': authorization,  
        'Content-Type': 'application/json',  
    },
        method: 'post',
        url: `http://localhost:3000/comments/createComment`,
        data:  { email, contentComment } 
      };
      const response = await axiosRequest(config);
   console.log(response,'added');
      return updateComment(response.result._id , response.result);
    
    } catch (error) {
      if (error.response && error.response.data && error.response.data.message) {
        console.error('Error fetching comments:', error.response.data.message);
      } else {
        console.error('An error occurred during fetching comments:', error);
      }
    }
  }

  const likeComment = async (commentID, like) => {
    try {
      const config = {
        method: 'patch',
        url: `http://localhost:3000/comments/updateLike/${commentID}`,
        data:  {like} 
      };
      const response = await axiosRequest(config);

      return updateComment(commentID , response.result);
    
    } catch (error) {
      if (error.response && error.response.data && error.response.data.message) {
        console.error('Error fetching comments:', error.response.data.message);
      } else {
        console.error('An error occurred during fetching comments:', error);
      }
    }
  };

  const dislikeComment = async (commentID, disLike) => {
    try {
      const config = {
        method: 'patch',
        url: `http://localhost:3000/comments/updateDisLike/${commentID}`,
        data: {disLike}
      };
      const response = await axiosRequest(config);
      return updateComment(commentID , response.result);

    
    } catch (error) {
      if (error.response && error.response.data && error.response.data.message) {
        console.error('Error fetching comments:', error.response.data.message);
      } else {
        console.error('An error occurred during fetching comments:', error);
      }
    }
  };

  const replyComment = async (commentID , comment) => {
     console.log(currentUser);
    const email =  currentUser.email
    try {
      const config = {
        method: 'patch',
        url: `http://localhost:3000/comments/addreply/${commentID}`,
        data: { email , comment } 
      };
      const response = await axiosRequest(config);
      return updateComment(commentID , response.result);

    
    } catch (error) {
      if (error.response && error.response.data && error.response.data.message) {
        console.error('Error fetching comments:', error.response.data.message);
      } else {
        console.error('An error occurred during fetching comments:', error);
      }
    }
  };


  return (
    <CommentContext.Provider value={{ comments, getAllComments, addComment , likeComment, dislikeComment , replyComment }}>
      {children}
    </CommentContext.Provider>
  );
};
