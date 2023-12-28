import React from 'react';
import RoutesNavBar from './components/RoutesNavBar';
import { UserProvider } from './context/users.context';

function App() {


  return (
      <UserProvider>
             <RoutesNavBar />
      </UserProvider>
  );
}

export default App;

