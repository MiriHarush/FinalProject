// App.jsx
import React from 'react';
import RoutesNavBar from './components/RoutesNavBar';
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
import { BrowserRouter as Router } from 'react-router-dom'; 

import './App.css'

function App() {


  return (
    <UserProvider>
      <SpaceProvider>
        <RoutesNavBar />
      </SpaceProvider>
    </UserProvider>

  );
}

export default App;
