import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home'; 
import Login from '../pages/LogIn'; 
import SignUp from '../pages/SignUp';
import NavBar from './NavBar';
import AddCourse from '../pages/AddCourse';
import UserPersonalArea from '../pages/UserPersonalArea'

const RoutesNavBar = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/" element={<Home />} />
        <Route path="/userPersonalArea" element={<UserPersonalArea />} />

        <Route path="/addCourse" element={<AddCourse />} />

      </Routes>
      <NavBar/>
    </Router>
   
  );
}

export default RoutesNavBar;
