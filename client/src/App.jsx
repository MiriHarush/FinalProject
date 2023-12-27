import React from 'react';
import RoutesNavBar from './components/RoutesNavBar';
import Home from './pages/Home';
import SignUp from './pages/SignUp';
import LogIn from './pages/LogIn';
import UserPersonalArea from './pages/UserPersonalArea'
import CourseManagerDashboard from './pages/CourseManagerDashboard'
import UserInvitations from './components/UserInvitations'
import AddCourse from './pages/AddCourse'
<<<<<<<<< Temporary merge branch 1
import SpaceDashboard from './pages/SpaceDashboard';

function App() {
  return (
    <div>
      <CourseManagerDashboard />
=========
import SpacesDashboard from './pages/SpacesDashboard';
function App() {
  return (
    <div>
      <RoutesNavBar />
      <SpacesDashboard/>
>>>>>>>>> Temporary merge branch 2
    </div>
  );
}

export default App;

