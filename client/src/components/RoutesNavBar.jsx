import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home'; 
import Login from '../pages/LogIn'; 
import SignUp from '../pages/SignUp';
import NavBar from './NavBar';
<<<<<<<<< Temporary merge branch 1
import AddCourse from '../pages/AddCourse';
import UserPersonalArea from '../pages/UserPersonalArea'
import SpaceDashboard from '../pages/SpaceDashboard';
=========
import Contact from '../pages/Contact';
>>>>>>>>> Temporary merge branch 2

const RoutesNavBar = () => {
  return (
    <div>
      <NavBar/>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/comments" element={<Comments />} />
        <Route path="/" element={<Home />} />
<<<<<<<<< Temporary merge branch 1
        <Route path="/userPersonalArea" element={<UserPersonalArea />} />
        <Route path="/spaceDashboard" element={<SpaceDashboard />} />

        <Route path="/addCourse" element={<AddCourse />} />

=========
>>>>>>>>> Temporary merge branch 2
      </Routes>
    </div>
  );
}

export default RoutesNavBar;
