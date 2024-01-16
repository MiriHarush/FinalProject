import React, { useState, useContext, useEffect } from 'react';
import { Container, Typography, Grid, Card, CardContent, Button, Snackbar } from '@mui/material';
import MuiAlert from '@mui/material/Alert';
import { Link } from 'react-router-dom';
import ForumIcon from '@mui/icons-material/Forum';
import SignUp from './SignUp';
import LogIn from './LogIn';
import { CommentContext } from '../context/comments.context';
import '../css/Home.css'

const Home = () => {
  const { getAllComments } = useContext(CommentContext);
  const [comments, setComments] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

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
    // <Container>
    //   <Typography variant="h1" align="center" gutterBottom>
    //     Welcome to Learning Spaces
    //   </Typography>
    //   <Typography variant="h2" align="center" gutterBottom>
    //     Popular Courses
    //   </Typography>
    //   <Grid container spacing={3}>
    //     {popularCourses.map((course) => (
    //       <Grid key={course.id} item xs={12} sm={6} md={4}>
    //         <Card>
    //           <CardContent>
    //             <Typography variant="h5" component="div">
    //               {course.title}
    //             </Typography>
    //             <Typography color="text.secondary">Enrolled: {course.enrollmentCount}</Typography>
    //             <Button onClick={() => handleEnroll(course.id)} variant="contained" color="primary">
    //               Enroll
    //             </Button>
    //           </CardContent>
    //         </Card>
    //       </Grid>
    //     ))}
    //   </Grid>

    //   <Link to="/chat" style={{ textDecoration: 'none', color: 'inherit' }}>
    //     <Button variant="contained" color="primary" startIcon={<ForumIcon />}>
    //       לך לפורום
    //     </Button>
    //   </Link>

    //   <Snackbar open={snackbarOpen} autoHideDuration={3000} onClose={handleCloseSnackbar}>
    //     <MuiAlert onClose={handleCloseSnackbar} severity="success" sx={{ width: '100%' }}>
    //       Enrolled successfully! Welcome, {user && user.name}!
    //     </MuiAlert>
    //   </Snackbar>
    // </Container>

    <div className='img' style={{ textAlign: 'center' }}>
      {/* <img
      src="../img/logob.png"
      alt="baner"
      style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
    /> */}

      <div style={{ display: 'flex', flexDirection: 'row', gap: '20px', justifyContent: 'center', paddingTop: '10px' }}>
        {/* <Link to="/signup" style={{ marginRight: '20px' }}>
        SIGN UP
      </Link>
      <Link to="/login">
        LOGIN 
      </Link> */}
        <SignUp />
        <LogIn />
      </div>
    </div>
  );
};

export default Home;
