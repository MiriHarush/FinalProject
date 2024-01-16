import { createContext, useState } from 'react';
import { axiosRequest } from '../utils/serverConnection';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loginError, setLoginError] = useState('');

  const signup = async (userData) => {
    console.log('ctx',userData);
    const config = {
      method: 'post',
      url: 'http://localhost:3000/users/createUser',
      data: userData
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
      setLoginError('');
    } catch (error) {
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
      console.log(message.result, "m");
      return message;
     
    } catch (error) {
      if (error.response && error.response.data && error.response.data.message) {
        setLoginError(error.response.data.message);
      } else {
        setLoginError('An error occurred during forgot password.');
      }
    }
  };

  // const resetPassword = async ({ token , password}) => {
  //   const resetToken = token;
  //   const newPassword = password;
  //   try {
  //     const config = {
  //       method: 'post',
  //       url: `http://localhost:3000/users/resetPassword?resetToken=${resetToken}`,
  //       data:  {newPassword} ,
  //     };

  //     const message = await axiosRequest(config);
  //     return message;
     
  //   } catch (error) {
  //     if (error.response && error.response.data && error.response.data.message) {
  //       setLoginError(error.response.data.message);
  //     } else {
  //       setLoginError('An error occurred during forgot password.');
  //     }
  //   }
  // };
  
  const resetPassword = async ({ resetToken , newPassword}) => {
    console.log(resetToken);
    try {
      const config = {
        method: 'post',
        url: `http://localhost:3000/users/resetPassword?token=${resetToken}`,
        data:  {newPassword} 
      };

      const message = await axiosRequest(config);
      return message;
     
    } catch (error) {
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


  // const userGuestCourses = async (email) => {
  //   try {
  //     const config = {
  //       method: 'post',
  //       url: 'http://localhost:3000/users/guestCourses',
  //       data: {email},
  //     };
      
  //     const courses = await axiosRequest(config);
  //     return courses;
  //   } catch (error) {
  //     // Handle login errors
  //     if (error.response && error.response.data && error.response.data.message) {
  //       setLoginError(error.response.data.message);
  //     } else {
  //       setLoginError('An error occurred during login.');
  //     }
  //   }
  // };

  const userGuestCourses = async (email) => {
    try {
      const config = {
        method: 'post',
        url: 'http://localhost:3000/users/guestCourses',
        data: {email},
      };
      
      const courses = await axiosRequest(config);
      return courses;
    } catch (error) {
      // Handle login errors
      if (error.response && error.response.data && error.response.data.message) {
        setLoginError(error.response.data.message);
      } else {
        setLoginError('An error occurred during login.');
      }
    }
  };


  return (
    <UserContext.Provider value={{ currentUser, signup, login, logout, forgotPassword , resetPassword ,loginError, userGuestCourses }}>
      {children}
    </UserContext.Provider>
  );
};
