import React from 'react';
import RoutesNavBar from './components/RoutesNavBar';
import RoutesPages from './components/RoutesPages';
import { UserProvider } from './context/users.context';
import { SpaceProvider } from './context/spaces.context';
import { CourseProvider } from './context/courses.context';
import { LessonProvider } from './context/lessons.context';
import { CommentProvider } from './context/comments.context';
import { ContactProvider } from './context/contact.context';
import { InvitationProvider } from './context/invitations.context';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css'
import styled from 'styled-components';

import './index.css'; // או './App.css' אם יש לך קובץ כזה
import { ThemeProvider, createTheme } from '@mui/material';
// import { ThemeProvider } from '@material-ui/styles';

// const Wrapper = styled.div`
//  font-family: 'Dosis', sans-serif;
//   margin: 0;
//   padding: 0;
//   overflow-x: hidden;
// `;
const theme = createTheme({
  typography: {
    fontFamily: 'Dosis'
  }
});

function App() {
  return (
    <UserProvider>
      <SpaceProvider>
        <CourseProvider>
          <InvitationProvider>
          <LessonProvider>
            
          <CommentProvider>
            <ContactProvider>
            <Router>
              <RoutesNavBar />
              <RoutesPages />
            </Router>
            </ContactProvider>
            </CommentProvider>
            </LessonProvider>
            </InvitationProvider>
            </CourseProvider>
      </SpaceProvider>
    </UserProvider>
  );
}

export default App;
