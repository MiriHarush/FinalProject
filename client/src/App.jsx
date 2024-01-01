// App.jsx
import React from 'react';
import RoutesNavBar from './components/RoutesNavBar';
import RoutesPages from './components/RoutesPages';
import { UserProvider } from './context/users.context';
import { BrowserRouter as Router } from 'react-router-dom'; // הוסף זאת

import './App.css'

function App() {
  return (
    <UserProvider>
      <Router> 
        <RoutesNavBar />
        <RoutesPages />
      </Router>
    </UserProvider>
  );
}

export default App;
