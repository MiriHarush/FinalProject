import React from 'react';
import RoutesNavBar from './components/RoutesNavBar';
import RoutesPages from './components/RoutesPages';
// import Home from './pages/Home';
// import SignUp from './pages/SignUp';
// import LogIn from './pages/LogIn';
// import UserPersonalArea from './pages/UserPersonalArea'
// import CourseManagerDashboard from './pages/CourseManagerDashboard'
// import UserInvitations from './components/UserInvitations'
// import AddCourse from './pages/AddCourse'
// import SpaceDashboard from './pages/SpaceDashboard';
// import SpacesDashboard from './pages/SpacesDashboard';
import { SpaceProvider } from './context/spaces.context';
// import { UserProvider } from './context/users.context';
// import { BrowserRouter as Router } from 'react-router-dom'; // הוסף זאת
import { UserProvider } from './context/users.context';
// import { SpaceProvider } from './context/spaces.context';
import { CourseProvider } from './context/courses.context';
import { InvitationProvider } from './context/invitations.context';



import { LessonProvider } from './context/lessons.context';
import { CommentProvider } from './context/comments.context';
import { ContactProvider } from './context/contact.context';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css'


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
