import React, { createContext, useState, useContext } from 'react';

export const CommentContext = createContext();

export const CommentProvider = ({ children }) => {
  const [comments, setComments] = useState([
    { id: 1, user: 'John Doe', text: 'Great website! I love the content.', likes: 5, dislikes: 2, replies: [] },
    { id: 2, user: 'Jane Smith', text: 'The courses are amazing. Highly recommended!', likes: 3, dislikes: 1, replies: [] },
    // Add more sample comments as needed
  ]);

  const addComment = (text, user) => {
    const newComment = {
      id: comments.length + 1,
      user: user || 'Anonymous',
      text: text,
      likes: 0,
      dislikes: 0,
      replies: [],
    };
    setComments([...comments, newComment]);
  };

  const deleteComment = (commentId) => {
    const updatedComments = comments.filter((comment) => comment.id !== commentId);
    setComments(updatedComments);
  };

  const likeComment = (commentId) => {
    const updatedComments = comments.map((comment) =>
      comment.id === commentId ? { ...comment, likes: comment.likes + 1 } : comment
    );
    setComments(updatedComments);
  };

  const dislikeComment = (commentId) => {
    const updatedComments = comments.map((comment) =>
      comment.id === commentId ? { ...comment, dislikes: comment.dislikes + 1 } : comment
    );
    setComments(updatedComments);
  };

  const addReply = (text, user, commentId) => {
    const updatedComments = comments.map((comment) => {
      if (comment.id === commentId) {
        return {
          ...comment,
          replies: [
            ...comment.replies,
            {
              id: comment.replies.length + 1,
              user: user || 'Anonymous',
              text: text,
            },
          ],
        };
      }
      return comment;
    });
    setComments(updatedComments);
  };

  return (
    <CommentContext.Provider value={{ comments, addComment, deleteComment, likeComment, dislikeComment, addReply }}>
      {children}
    </CommentContext.Provider>
  );
};
