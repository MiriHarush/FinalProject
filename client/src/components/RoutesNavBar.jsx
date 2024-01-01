// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Home from '../pages/Home'; 
// import Login from '../pages/LogIn'; 
// import SignUp from '../pages/SignUp';
// import NavBar from './NavBar';

// const RoutesNavBar = () => {
//   return (
//     <Router>
//         <NavBar/>
//       <Routes>
//         <Route path="/login" element={<Login />} />
//         <Route path="/signup" element={<SignUp />} />
//         <Route path="/" element={<Home />} />
        
//       </Routes>
//     </Router>
   
//   );
// }

// export default RoutesNavBar;

// RoutesNavBar.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home'; 
import Login from '../pages/LogIn'; 
import SignUp from '../pages/SignUp';
import NavBar from './NavBar';
import AddCourse from '../pages/AddCourse';
import UserPersonalArea from '../pages/UserPersonalArea'
import SpaceDashboard from '../pages/SpaceDashboard';
import Contact from '../pages/Contact';


const RoutesNavBar = () => {
  return (
    <div>
      <NavBar/>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<SignUp />} />
        <Route path="/comments" element={<SignUp />} />
        <Route path="/" element={<Home />} />
        <Route path="/userPersonalArea" element={<UserPersonalArea />} />
        <Route path="/spaceDashboard" element={<SpaceDashboard />} />

        <Route path="/addCourse" element={<AddCourse />} />

      </Routes>
    </div>
  );
}

export default RoutesNavBar;
