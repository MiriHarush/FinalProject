// Home.jsx
import React, { useState } from 'react';
import { Container, Typography, Grid, Card, CardContent, Button, Snackbar } from '@mui/material';
import MuiAlert from '@mui/material/Alert';
import { Link } from 'react-router-dom';
import ForumIcon from '@mui/icons-material/Forum';

const Home = () => {
  const [popularCourses, setPopularCourses] = useState([
    { id: 1, title: 'React Basics', enrollmentCount: 120 },
    { id: 2, title: 'Advanced JavaScript', enrollmentCount: 95 },
    { id: 3, title: 'Web Design Principles', enrollmentCount: 150 },
  ]);

  const [user, setUser] = useState(null);
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const handleEnroll = (courseId) => {
    // Update enrollment count for the selected course
    const updatedCourses = popularCourses.map((course) =>
      course.id === courseId ? { ...course, enrollmentCount: course.enrollmentCount + 1 } : course
    );
    setPopularCourses(updatedCourses);

    // Set the user state
    setUser({ name: 'John Doe' });

    // Show a success message
    setSnackbarOpen(true);
  };

  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
  };

  return (
    <Container>
      <Typography variant="h1" align="center" gutterBottom>
        Welcome to Learning Spaces
      </Typography>
      <Typography variant="h2" align="center" gutterBottom>
        Popular Courses
      </Typography>
      <Grid container spacing={3}>
        {popularCourses.map((course) => (
          <Grid key={course.id} item xs={12} sm={6} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h5" component="div">
                  {course.title}
                </Typography>
                <Typography color="text.secondary">Enrolled: {course.enrollmentCount}</Typography>
                <Button onClick={() => handleEnroll(course.id)} variant="contained" color="primary">
                  Enroll
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Link to="/chat" style={{ textDecoration: 'none', color: 'inherit' }}>
        <Button variant="contained" color="primary" startIcon={<ForumIcon />}>
          לך לפורום
        </Button>
      </Link>

      <Snackbar open={snackbarOpen} autoHideDuration={3000} onClose={handleCloseSnackbar}>
        <MuiAlert onClose={handleCloseSnackbar} severity="success" sx={{ width: '100%' }}>
          Enrolled successfully! Welcome, {user && user.name}!
        </MuiAlert>
      </Snackbar>
    </Container>
  );
};

export default Home;
