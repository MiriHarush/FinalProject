import { createContext , useState } from 'react';
import axiosRequest  from '../utils/serverConnection'

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  const login = async () => {
    const config = {
      method: 'post',
      url: 'http://localhost:3000/users/login',
      data: userData
    };
  
    const loggedUser = await axiosRequest(config);
    setCurrentUser(loggedUser);
  };
   
  

  const logoutUser = () => {
    setCurrentUser(null);
  };

  
  return (
    <UserContext.Provider value={{ currentUser, loginUser, logoutUser }}>
      {children}
    </UserContext.Provider>
  );
};