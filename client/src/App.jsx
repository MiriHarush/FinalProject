// App.jsx
import React from 'react';
import RoutesNavBar from './components/RoutesNavBar';
import RoutesPages from './components/RoutesPages';
import { UserProvider } from './context/users.context';
import { SpaceProvider } from'./context/spaces.context';
import ForgotPassword from './pages/ForgotPassword';
import './App.css'
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  

  return (
    <UserProvider>
      <SpaceProvider>
        <Router>
           <RoutesNavBar />
           <RoutesPages/>
           <ForgotPassword/>
      </Router>
      </SpaceProvider>
    </UserProvider>
  );
}

export default App;
