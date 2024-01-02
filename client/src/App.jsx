import React from 'react';
import RoutesNavBar from './components/RoutesNavBar';
<<<<<<<<< Temporary merge branch 1
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
=========
import RoutesPages from './components/RoutesPages';
>>>>>>>>> Temporary merge branch 2
import { UserProvider } from './context/users.context';
import { BrowserRouter as Router } from 'react-router-dom'; // הוסף זאת

import './App.css'

function App() {
<<<<<<<<< Temporary merge branch 1


  return (
    <UserProvider>
      <SpaceProvider>
        <RoutesNavBar />
      </SpaceProvider>
    </UserProvider>

=========
  return (
    <UserProvider>
      <Router> 
        <RoutesNavBar />
        <RoutesPages />
      </Router>
    </UserProvider>
>>>>>>>>> Temporary merge branch 2
  );
}

export default App;
