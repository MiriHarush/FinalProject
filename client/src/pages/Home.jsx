import React, { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Typography, Grid, Card, CardContent, Button, Snackbar, Box } from '@mui/material';
import MuiAlert from '@mui/material/Alert';
import { Link } from 'react-router-dom';
import ForumIcon from '@mui/icons-material/Forum';
import SignUp from './SignUp';
import { CommentContext } from '../context/comments.context';
import { UserContext } from '../context/users.context';
import '../css/Home.css'

const Home = () => {
  const { getAllComments } = useContext(CommentContext);
  const [comments, setComments] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const { currentUser } = useContext(UserContext);
  const navigate = useNavigate();


  useEffect(() => {
    const fetchData = async () => {
      const commentsData = await getAllComments();
      setComments(commentsData.result);
    }
    fetchData();
  }, [])

  const handleEnroll = (courseId) => {
    const updatedCourses = popularCourses.map((course) =>
      course.id === courseId ? { ...course, enrollmentCount: course.enrollmentCount + 1 } : course
    );
    setPopularCourses(updatedCourses);
    setSnackbarOpen(true);
  };

  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
  };

  return (
    <>
    {console.log(currentUser)}
      {currentUser == null && (
        <div className='img' >
          <div style={{ flexDirection: 'row', gap: '20px', paddingTop: '10px' }}>
            {/* <LogIn /> */}
            <SignUp />
          </div>
        </div>
      )}


      {currentUser && (
        navigate('/userPersonalArea')
      )}
    </>
  );
};

export default Home;
