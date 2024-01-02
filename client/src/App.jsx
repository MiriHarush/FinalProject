import React from 'react';
import RoutesNavBar from './components/RoutesNavBar';
import RoutesPages from './components/RoutesPages';
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
      </Router>
      </SpaceProvider>
    </UserProvider>
  );
}

export default App;
