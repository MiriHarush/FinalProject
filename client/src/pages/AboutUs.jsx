import React from 'react';
import { Container, Typography, Paper } from '@mui/material';
import { useSpring, animated, config } from 'react-spring';
import Footer from '../components/Footer';

const AboutUs = () => {
  const fadeInLeft = useSpring({
    from: { opacity: 0, transform: 'translateX(-30px)' },
    to: { opacity: 1, transform: 'translateX(0)' },
    config: { ...config.slow, duration: 2000 },
  });

  const fadeInRight = useSpring({
    from: { opacity: 0, transform: 'translateX(30px)' },
    to: { opacity: 1, transform: 'translateX(0)' },
    config: { ...config.slow, duration: 2000 },
  });

  const imageStyle = {
    boxShadow: '5px 5px 10px rgba(0, 0, 0, 0.2)', // קביעת צל
    borderRadius: '4px', // קצוות רכים
  };
  

  return (
    <>
      <Container style={{ paddingTop: '50px', fontFamily: 'Arial, sans-serif', textAlign: 'center' }}>
        <animated.div style={fadeInLeft}>
          <div style={{ display: 'flex', flexDirection: 'row', gap: '20px', justifyContent: 'center', paddingTop: '10px' }}>
            <div style={{ width: '50%', color: 'rgb(174, 124, 61)' }}>
              <Typography variant="h2" gutterBottom style={{ fontSize: '3rem', marginBottom: '20px', borderBottom: '2px solid rgb(174, 124, 61)' }}>
                Welcome to Our Learning Community
              </Typography>
              <Typography variant="body1" paragraph style={{ fontSize: '1.5rem', marginBottom: '30px' }}>
                Explore a diverse range of courses and create your own spaces with unique content. Join us in fostering shared learning experiences that inspire and cultivate creativity.
              </Typography>
            </div>
            <animated.img
              src="https://images.pexels.com/photos/6177658/pexels-photo-6177658.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
              height={"300px"}
              width={'20%'}
              style={imageStyle}
            />
          </div>
        </animated.div>
        <br />
        <br />
        <animated.div style={fadeInRight}>
          <div style={{ display: 'flex', flexDirection: 'row', gap: '20px', justifyContent: 'center', paddingTop: '10px' }}>
            <animated.img
              src="https://images.pexels.com/photos/5238078/pexels-photo-5238078.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
              height={"300px"}
              width={'20%'}
              style={{ ...imageStyle, borderBottom: '2px solid rgb(174, 124, 61)' }}
            />
            <div style={{ width: '50%', color: 'rgb(174, 124, 61)' }}>
              <Typography variant="h4" gutterBottom style={{ fontSize: '2rem', marginBottom: '15px', borderBottom: '2px solid rgb(174, 124, 61)' }}>
                Our Vision: Creating Shared Experiences
              </Typography>
              <Typography variant="body1" style={{ fontSize: '1.5rem' }}>
                We believe that the best learning happens together in a shared experience. Building a community focuses on collaboration and mutual influence.
              </Typography>
            </div>
          </div>
        </animated.div>
      </Container>
      <Footer />
    </>
  );
};

export default AboutUs;
