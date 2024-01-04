import React from 'react';
import RoutesNavBar from './components/RoutesNavBar';
<<<<<<< HEAD
=======
import RoutesPages from './components/RoutesPages';
<<<<<<< HEAD
>>>>>>> origin/miri2
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
import RoutesPages from './components/RoutesPages';
import { UserProvider } from './context/users.context';
import { BrowserRouter as Router } from 'react-router-dom'; // הוסף זאת
import { CourseProvider } from './context/courses.context';
import './App.css'
import { LessonProvider } from './context/lessons.context';


function App() {

<<<<<<< HEAD
=======
=======
import ForgotPassword from './pages/forgotPassword';
import { UserProvider } from './context/users.context';
import { SpaceProvider } from'./context/spaces.context';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css'

function App() {
  
>>>>>>> origin/michal
>>>>>>> origin/miri2

  return (
    <UserProvider>
      <SpaceProvider>
<<<<<<< HEAD
        <CourseProvider>
          <LessonProvider>
            <Router>
              <RoutesNavBar />
            </Router>
          </LessonProvider>
        </CourseProvider>
      </SpaceProvider>
    </UserProvider>

=======
        <Router>
<<<<<<< HEAD
          <RoutesNavBar />
          <RoutesPages />
        </Router>
      </SpaceProvider>
    </UserProvider>

=======
           <RoutesNavBar />
           <RoutesPages/>
           <ForgotPassword/>
      </Router>
      </SpaceProvider>
    </UserProvider>
>>>>>>> origin/michal
>>>>>>> origin/miri2
  );
}

export default App;
