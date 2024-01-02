import React from 'react';
import RoutesNavBar from './components/RoutesNavBar';
import RoutesPages from './components/RoutesPages';
<<<<<<< HEAD
import ForgotPassword from './pages/forgotPassword';
import { UserProvider } from './context/users.context';
import { SpaceProvider } from'./context/spaces.context';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css'

function App() {
  
=======
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

>>>>>>> origin/miri2

  return (
    <UserProvider>
      <SpaceProvider>
        <Router>
<<<<<<< HEAD
           <RoutesNavBar />
           <RoutesPages/>
           <ForgotPassword/>
      </Router>
      </SpaceProvider>
    </UserProvider>
=======
          <RoutesNavBar />
          <RoutesPages />
        </Router>
      </SpaceProvider>
    </UserProvider>

>>>>>>> origin/miri2
  );
}

export default App;
