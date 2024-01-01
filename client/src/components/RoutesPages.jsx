// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Chat from './Chat';
// import Anonymous from '../pages/Anonymous';
// import AddCourse from '../pages/AddCourse';
// import UserPersonalArea from '../pages/UserPersonalArea'

// const RoutesPages = () => {
//   return (
//    <Router>
//     <Routes>
//     <Route path="/Anonymous" element={<Anonymous />} />
//         <Route path="/chat" element={<Chat />} />
//         <Route path="/userPersonalArea" element={<UserPersonalArea />} />
//         <Route path="/addCourse" element={<AddCourse />} />
        
//     </Routes>
//    </Router>
//   )
// }

// export default RoutesPages
// RoutesPages.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Chat from './Chat';
import Anonymous from '../pages/Anonymous';
import AddCourse from '../pages/AddCourse';
import UserPersonalArea from '../pages/UserPersonalArea';

const RoutesPages = () => {
  return (
    <Routes>
      <Route path="/Anonymous" element={<Anonymous />} />
      <Route path="/chat" element={<Chat />} />
      <Route path="/userPersonalArea" element={<UserPersonalArea />} />
      <Route path="/addCourse" element={<AddCourse />} />
    </Routes>
  );
}

export default RoutesPages;
