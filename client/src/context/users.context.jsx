import { createContext, useState } from 'react';
import { axiosRequest } from '../utils/serverConnection';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  const signup = async (userData) => {

    const config = {
      method: 'post',
      url: 'http://localhost:3000/users/createUser',
      data: userData
    };

    const signedUser = await axiosRequest(config);
    console.log('sign client:',signedUser);
    return signedUser;
  }

  const login = async (userData) => {
    const config = {
      method: 'post',
      url: 'http://localhost:3000/users/login',
      data: userData
    };
  
    const loggedUser = await axiosRequest(config);
    setCurrentUser({...loggedUser.result.user});
  };
   
  const logout = () => {
    console.log('logout');
    setCurrentUser(null);
  };

  return (
    <UserContext.Provider value={{ currentUser, signup, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};
