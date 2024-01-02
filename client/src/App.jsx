import React from 'react';
import RoutesNavBar from './components/RoutesNavBar';
import RoutesPages from './components/RoutesPages';
import ForgotPassword from './pages/forgotPassword';
import { UserProvider } from './context/users.context';
import { SpaceProvider } from'./context/spaces.context';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css'

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
