import React from 'react';
import RoutesNavBar from './components/RoutesNavBar';
import RoutesPages from './components/RoutesPages';
import { UserProvider } from './context/users.context';
import { SpaceProvider } from'./context/spaces.context';
import { CommentProvider } from './context/comments.context';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css'


function App() {
  

  return (
    <UserProvider>
      <SpaceProvider>
        <CommentProvider>
        <Router>
           <RoutesNavBar />
           <RoutesPages/>
      </Router>
      </CommentProvider>
      </SpaceProvider>
    </UserProvider>
  );
}

export default App;
