import React from 'react';
import { Container, Typography, Paper, CssBaseline } from '@mui/material';
import { useSpring, animated } from 'react-spring';

const AboutUs = () => {
  const fadeIn = useSpring({
    from: { opacity: 0, transform: 'translateY(30px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
  });

  return (
    <Container style={{ paddingTop: '50px', fontFamily: 'Arial, sans-serif', textAlign: 'center' }}>
      <CssBaseline />

      <animated.div style={fadeIn}>
        <Typography variant="h2" gutterBottom style={{ fontSize: '3rem', color: 'rgb(174, 124, 61)', marginBottom: '20px' }}>
          Welcome to Our Learning Community
        </Typography>
      </animated.div>

      <animated.div style={fadeIn}>
        <Typography variant="body1" paragraph style={{ fontSize: '1.5rem', color: '#333', marginBottom: '30px' }}>
          Explore a diverse range of courses and create your own spaces with unique content. Join us in fostering shared learning experiences that inspire and cultivate creativity.
        </Typography>
      </animated.div>

      <animated.div style={fadeIn}>
        <Paper elevation={3} style={{ padding: '20px', marginTop: '30px', background: 'rgb(242, 242, 242)' }}>
          <Typography variant="h4" gutterBottom style={{ fontSize: '2rem', color: 'rgb(174, 124, 61)', marginBottom: '15px' }}>
            Our Vision: Creating Shared Experiences
          </Typography>
          <Typography variant="body1" style={{ fontSize: '1.5rem', color: '#555' }}>
            We believe that the best learning happens together in a shared experience. Building a community focuses on collaboration and mutual influence.
          </Typography>
        </Paper>
      </animated.div>
    </Container>
  );
};

export default AboutUs;
