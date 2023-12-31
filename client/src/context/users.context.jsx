// import { createContext, useState } from 'react';
// import { axiosRequest } from '../utils/serverConnection';

// export const UserContext = createContext();

// export const UserProvider = ({ children }) => {
//   const [currentUser, setCurrentUser] = useState(null);

//   const signup = async (userData) => {

//     const config = {
//       method: 'post',
//       url: 'http://localhost:3000/users/createUser',
//       data: userData
//     };
    
//     const signedUser = await axiosRequest(config);
//     console.log('sign client:',signedUser);
//     return signedUser;
//   }

//   const login = async (userData) => {
//     const config = {
//       method: 'post',
//       url: 'http://localhost:3000/users/login',
//       data: userData
//     };
  
//     const loggedUser = await axiosRequest(config);
//     setCurrentUser({...loggedUser.result.user});
//   };
   
//   const logout = () => {
//     console.log('logout');
//     setCurrentUser(null);
//   };

//   return (
//     <UserContext.Provider value={{ currentUser, signup, login, logout }}>
//       {children}
//     </UserContext.Provider>
//   );
// };

import { createContext, useState } from 'react';
import { axiosRequest } from '../utils/serverConnection';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loginError, setLoginError] = useState('');

  const signup = async (userData) => {
    const config = {
      method: 'post',
      url: 'http://localhost:3000/users/createUser',
      data: userData,
    };

    const signedUser = await axiosRequest(config);
    console.log('sign client:', signedUser);
    return signedUser;
  };

  const login = async (userData) => {
    try {
      const config = {
        method: 'post',
        url: 'http://localhost:3000/users/login',
        data: userData,
      };
      
      const loggedUser = await axiosRequest(config);
      setCurrentUser({ ...loggedUser.result.user });
      localStorage.setItem('userToken', loggedUser.result.token);
      // Clear any previous login errors
      setLoginError('');
    } catch (error) {
      // Handle login errors
      if (error.response && error.response.data && error.response.data.message) {
        setLoginError(error.response.data.message);
      } else {
        setLoginError('An error occurred during login.');
      }
    }
  };

  const forgotPassword = async (email) => {
    console.log({email});
    try {
      const config = {
        method: 'post',
        url: 'http://localhost:3000/users/forgotPassword',
        data: { email },
      };

      const message = await axiosRequest(config);
      return message;
     
    } catch (error) {
      // Handle login errors
      if (error.response && error.response.data && error.response.data.message) {
        setLoginError(error.response.data.message);
      } else {
        setLoginError('An error occurred during forgot password.');
      }
    }
  };
  
  const logout = () => {
    console.log('logout');
    setCurrentUser(null);
  };

  return (
    <UserContext.Provider value={{ currentUser, signup, login, logout, forgotPassword ,loginError }}>
      {children}
    </UserContext.Provider>
  );
};
