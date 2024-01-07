import React from 'react';
import RoutesNavBar from './components/RoutesNavBar';
import RoutesPages from './components/RoutesPages';
import Home from './pages/Home';
import SignUp from './pages/SignUp';
import LogIn from './pages/LogIn';
import UserPersonalArea from './pages/UserPersonalArea'
import CourseManagerDashboard from './pages/CourseManagerDashboard'
import UserInvitations from './components/UserInvitations'
import AddCourse from './pages/AddCourse'
import SpaceDashboard from './pages/SpaceDashboard';
import SpacesDashboard from './pages/SpacesDashboard';
import { SpaceProvider } from './context/spaces.context';
import { UserProvider } from './context/users.context';
import { BrowserRouter as Router } from 'react-router-dom'; // הוסף זאת
import { CourseProvider } from './context/courses.context';
import './App.css'
import { LessonProvider } from './context/lessons.context';
import { InvitationProvider } from './context/invitations.context';




function App() {
  

  return (
    <UserProvider>
      <SpaceProvider>
        <CourseProvider>
          <LessonProvider>
            <InvitationProvider>
              <Router>
                <RoutesNavBar />
              </Router>
            </InvitationProvider>
          </LessonProvider>
        </CourseProvider>
      </SpaceProvider>
    </UserProvider>
  );
}

export default App;
