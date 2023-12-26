import React from 'react';
import RoutesNavBar from './components/RoutesNavBar';
import Home from './pages/Home';
import SignUp from './pages/SignUp';
import LogIn from './pages/LogIn';
import UserPersonalArea from './pages/UserPersonalArea'
import CourseManagerDashboard from './pages/CourseManagerDashboard'
import UserInvitations from './components/UserInvitations'
import AddCourse from './pages/AddCourse'
import SpacesDashboard from './pages/SpacesDashboard'
function App() {
  return (
    <div>
      <RoutesNavBar />
      <SpacesDashboard/>
      </div>
  );
}

export default App;

