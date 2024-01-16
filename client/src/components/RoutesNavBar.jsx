import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../pages/LogIn';
import SignUp from '../pages/SignUp';
import NavBar from './NavBar';
import UserPersonalArea from '../pages/UserPersonalArea';
import SpaceDashboard from '../pages/SpaceDashboard';
import CourseUserDashboard from '../pages/CourseUserDashboard';
import Contact from '../pages/Contact';
import AboutUs from '../pages/AboutUs';
import Comments from '../pages/Comments';

const RoutesNavBar = () => {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/comments" element={<Comments />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default RoutesNavBar;
