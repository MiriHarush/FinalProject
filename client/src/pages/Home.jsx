// // Home.jsx
// import React, { useState } from 'react';
// import { Container, Typography, Grid, Card, CardContent, Button, Snackbar } from '@mui/material';
// import MuiAlert from '@mui/material/Alert';
// import { Link } from 'react-router-dom';
// import ForumIcon from '@mui/icons-material/Forum';


// const Home = () => {
//   const [popularCourses, setPopularCourses] = useState([
//     { id: 1, title: 'React Basics', enrollmentCount: 120 },
//     { id: 2, title: 'Advanced JavaScript', enrollmentCount: 95 },
//     { id: 3, title: 'Web Design Principles', enrollmentCount: 150 },
//   ]);

//   const [user, setUser] = useState(null);
//   const [snackbarOpen, setSnackbarOpen] = useState(false);

//   const handleEnroll = (courseId) => {
//     // Update enrollment count for the selected course
//     const updatedCourses = popularCourses.map((course) =>
//       course.id === courseId ? { ...course, enrollmentCount: course.enrollmentCount + 1 } : course
//     );
//     setPopularCourses(updatedCourses);

//     // Set the user state
//     setUser({ name: 'John Doe' });

//     // Show a success message
//     setSnackbarOpen(true);
//   };

//   const handleCloseSnackbar = () => {
//     setSnackbarOpen(false);
//   };

//   return (
//     <Container>
//       <Typography variant="h1" align="center" gutterBottom>
//         Welcome to Learning Spaces
//       </Typography>
//       <Typography variant="h2" align="center" gutterBottom>
//         Popular Courses
//       </Typography>
//       <Grid container spacing={3}>
//         {popularCourses.map((course) => (
//           <Grid key={course.id} item xs={12} sm={6} md={4}>
//             <Card>
//               <CardContent>
//                 <Typography variant="h5" component="div">
//                   {course.title}
//                 </Typography>
//                 <Typography color="text.secondary">Enrolled: {course.enrollmentCount}</Typography>
//                 <Button onClick={() => handleEnroll(course.id)} variant="contained" color="primary">
//                   Enroll
//                 </Button>
//               </CardContent>
//             </Card>
//           </Grid>
//         ))}
//       </Grid>

//       <Link to="/chat" style={{ textDecoration: 'none', color: 'inherit' }}>
//         <Button variant="contained" color="primary" startIcon={<ForumIcon />}>
//           לך לפורום
//         </Button>
//       </Link>

//       <Snackbar open={snackbarOpen} autoHideDuration={3000} onClose={handleCloseSnackbar}>
//         <MuiAlert onClose={handleCloseSnackbar} severity="success" sx={{ width: '100%' }}>
//           Enrolled successfully! Welcome, {user && user.name}!
//         </MuiAlert>
//       </Snackbar>
//     </Container>
//   );
// };

// export default Home;


import React, { useState, useEffect, useContext } from 'react';
import { Container, Typography, Button, Snackbar } from '@mui/material';
import MuiAlert from '@mui/material/Alert';
import { Link } from 'react-router-dom';
import ForumIcon from '@mui/icons-material/Forum';
import { CommentContext } from '../context/comments.context';

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

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      // אם יש תגובות נוספות, העבר לתגובה הבאה
      if (comments.length > 0) {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % comments.length);
      }
    }, 5000); // כל 5 שניות

    // ביטול ה-timeout בעת הרמת הקומפוננטה או כאשר מעבירים לתגובה הבאה
    return () => clearTimeout(timeoutId);
  }, [comments, currentIndex]);

  return (
    <Container>
      <Typography variant="h1" align="center" gutterBottom>
        Welcome to Learning Spaces
      </Typography>

      {/* Display current comment */}
      {comments?.map((comment)=>{
        <Typography variant="body1" align="center">
          <strong>{comment.userName}</strong>: {comment.contentComment}
        </Typography>
   }   )}

      <Link to="/chat" style={{ textDecoration: 'none', color: 'inherit' }}>
        <Button variant="contained" color="primary" startIcon={<ForumIcon />}>
          לך לפורום
        </Button>
      </Link>
    </Container>
  );
};

export default Home;
