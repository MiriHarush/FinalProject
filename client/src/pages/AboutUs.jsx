// import React from 'react';
// import { Container, Typography, Grid, Button, Paper, CssBaseline } from '@mui/material';
// import { Link } from 'react-router-dom';
// import CreateIcon from '@mui/icons-material/Create';
// import ForumIcon from '@mui/icons-material/Forum';

// const AboutUs = () => {
//   return (
//     <Container style={{ paddingTop: '50px', fontFamily: 'Verdana, Geneva, Tahoma, sans-serif' }}>
//       <CssBaseline />

//       <Typography variant="h2" align="center" gutterBottom style={{ fontSize: '2.5rem' }}>
//         אודותינו
//       </Typography>

//       <Typography variant="body1" paragraph style={{ fontSize: '1.2rem' }}>
//         אנו מאמינים ביצירת חוויות לימודיות משותפות, המספקות השראה ויצירתיות. במסגרת הפלטפורמה שלנו, תוכל לצפות במגוון רחב של קורסים וליצור מרחבים משלך עם תכנים ייחודיים.
//       </Typography>

//       <Grid container spacing={3} justifyContent="center">
//         <Grid item xs={12} sm={6}>
//           <Button
//             variant="contained"
//             color="primary"
//             endIcon={<CreateIcon />}
//             component={Link}
//             to="/courses"
//             style={{
//               background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
//               color: 'white',
//               fontSize: '1.2rem',
//             }}
//           >
//             צפה בקורסים
//           </Button>
//         </Grid>
//         <Grid item xs={12} sm={6}>
//           <Button
//             variant="contained"
//             color="secondary"
//             endIcon={<ForumIcon />}
//             style={{ fontSize: '1.2rem' }}
//           >
//             צור מרחב
//           </Button>
//         </Grid>
//       </Grid>

//       <Paper elevation={3} style={{ padding: '20px', marginTop: '30px' }}>
//         <Typography variant="h4" gutterBottom style={{ fontSize: '1.8rem' }}>
//           יצירת חוויות משותפות
//         </Typography>
//         <Typography variant="body1" style={{ fontSize: '1.2rem' }}>
//           אנו מאמינים שהלמידה הטובה ביותר היא זו שנעשית יחד ובחוויה משותפת. יצירת קהילה מתמקדת בשיתוף ובהשפעה הדדית.
//         </Typography>
//       </Paper>
//     </Container>
//   );
// };

// export default AboutUs;

import React from 'react';
import { Container, Typography, Grid, Button, Paper, CssBaseline } from '@mui/material';
import { Link } from 'react-router-dom';
import CreateIcon from '@mui/icons-material/Create';
import ForumIcon from '@mui/icons-material/Forum';
import { useSpring, animated } from 'react-spring';

const AboutUs = () => {
  const fadeIn = useSpring({
    from: { opacity: 0, transform: 'translateY(30px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
  });

  return (
    <Container style={{ paddingTop: '50px', fontFamily: 'Verdana, Geneva, Tahoma, sans-serif' }}>
      <CssBaseline />

      <animated.div style={fadeIn}>
        <Typography variant="h2" align="center" gutterBottom style={{ fontSize: '2.5rem' }}>
          אודותינו
        </Typography>
      </animated.div>

      <animated.div style={fadeIn}>
        <Typography variant="body1" paragraph style={{ fontSize: '1.2rem' }}>
          אנו מאמינים ביצירת חוויות לימודיות משותפות, המספקות השראה ויצירתיות. במסגרת הפלטפורמה שלנו, תוכל לצפות במגוון רחב של קורסים וליצור מרחבים משלך עם תכנים ייחודיים.
        </Typography>
      </animated.div>

      <Grid container spacing={3} justifyContent="center">
        <Grid item xs={12} sm={6}>
          <animated.div style={fadeIn}>
            <Button
              variant="contained"
              color="primary"
              endIcon={<CreateIcon />}
              component={Link}
              to="/courses"
              style={{
                background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
                color: 'white',
                fontSize: '1.2rem',
              }}
            >
              צפה בקורסים
            </Button>
          </animated.div>
        </Grid>
        <Grid item xs={12} sm={6}>
          <animated.div style={fadeIn}>
            <Button
              variant="contained"
              color="secondary"
              endIcon={<ForumIcon />}
              style={{ fontSize: '1.2rem' }}
            >
              צור מרחב
            </Button>
          </animated.div>
        </Grid>
      </Grid>

      <animated.div style={fadeIn}>
        <Paper elevation={3} style={{ padding: '20px', marginTop: '30px' }}>
          <Typography variant="h4" gutterBottom style={{ fontSize: '1.8rem' }}>
            יצירת חוויות משותפות
          </Typography>
          <Typography variant="body1" style={{ fontSize: '1.2rem' }}>
            אנו מאמינים שהלמידה הטובה ביותר היא זו שנעשית יחד ובחוויה משותפת. יצירת קהילה מתמקדת בשיתוף ובהשפעה הדדית.
          </Typography>
        </Paper>
      </animated.div>
    </Container>
  );
};

export default AboutUs;
