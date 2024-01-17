import React, { createContext } from 'react';
import { axiosRequest } from '../utils/serverConnection';

export const ContactContext = createContext();

export const ContactProvider = ({ children }) => {

 const addContact = async ({email , contentMessage}) => {
    try {
      console.log(email,contentMessage);
      const config = {
        method: 'post',
        url: 'http://localhost:3000/contact',
        data: {email , contentMessage},
      };
      
      const msg = await axiosRequest(config);
     console.log('msg from  cntx' , msg);
    } catch (error) {
      if (error.response && error.response.data && error.response.data.message) {
        setLoginError(error.response.data.message);
      } else {
        setLoginError('An error occurred during login.');
      }
    }
  };
  return (
    <ContactContext.Provider value={{ addContact }}>
      {children}
    </ContactContext.Provider>
  );
};
