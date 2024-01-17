import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Chat from './Chat';
import AddCourse from '../pages/AddCourse';
import UserPersonalArea from '../pages/UserPersonalArea';
import ForgotPassword from './ForgotPassword';
import ResetPassword from './ResetPassword';
import SpaceDashboard from '../pages/SpaceDashboard';
import CourseManagerDashboard from '../pages/CourseManagerDashboard';
import CourseUserDashboard from '../pages/CourseUserDashboard';
import LessonModal from './LessonModal';


const RoutesPages = () => {

  return (
    <Routes>
      <Route path="/chat" element={<Chat />} />
      <Route path="/userPersonalArea" element={<UserPersonalArea />} />
      <Route path="/addCourse" element={<AddCourse />} />
      <Route path="/spaceDashboard" element={<SpaceDashboard />} />
      <Route path="/courseManagerDashboard" element={<CourseManagerDashboard />} />
      <Route path="/lessonModal" element={<LessonModal />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/reset-password" element={<ResetPassword />} />
      <Route path="/userPersonalArea" element={<UserPersonalArea />} />
      <Route path="/spaceDashboard" element={<SpaceDashboard />} />
      <Route path="/courseManagerDashboard" element={<CourseManagerDashboard />} />
      <Route path="/courseUserDashboard" element={<CourseUserDashboard />} />
      <Route path="/lessonModal" element={<LessonModal />} />
      
    </Routes>
  );
}

export default RoutesPages;