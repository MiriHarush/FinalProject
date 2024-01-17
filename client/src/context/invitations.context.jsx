import { createContext, useState } from 'react';
import { axiosRequest } from '../utils/serverConnection';

export const InvitationContext = createContext();

export const InvitationProvider = ({ children }) => {

  const [currentInvitation, setCurrentInvitation] = useState(JSON.parse(localStorage.getItem('invitation')) ||null);
  const token = localStorage.getItem('userToken');
  const authorization = `Bearer ${token}`;  

  const updateCurrentInvite = (invite) => {
    setCurrentInvitation(invite);
    localStorage.setItem('invitation',JSON.stringify(invite));     
};


  const getAllMyInvitations = async (userEmail) => {
    const config = {
      headers: {
        'Authorization': authorization,  
        'Content-Type': 'application/json',  
      },
      method: 'get',
      url: `http://localhost:3000/invitations/getInvitations/${userEmail}`,
    };

    const allMyInvitations = await axiosRequest(config);
    console.log('all invitations:', allMyInvitations);
    return allMyInvitations;
  };

  const updateInviteStatus = async (idInvite, status) => {
    const config = {
      headers: {
        'Authorization': authorization,  
        'Content-Type': 'application/json',  
      },
      method: 'patch',
      url: `http://localhost:3000/invitations/updateInviteStatus/${idInvite}`,
      data: {newStatus:status},
    };

    const updatedStatus = await axiosRequest(config);
    console.log('updated status:', updatedStatus);
    return updatedStatus;
  };

  return (
    <InvitationContext.Provider value={{ currentInvitation , updateCurrentInvite , getAllMyInvitations , updateInviteStatus }}>
      {children}
    </InvitationContext.Provider>
  );
};
