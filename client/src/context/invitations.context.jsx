//כל ההזמנות ששלחו לי
//
//הוספה עדכון מחיקה 
//צפייה בשיעורי הקורס
//צפייה בשיעור אחד

import { createContext, useState } from 'react';
import { axiosRequest } from '../utils/serverConnection';

export const InvitationContext = createContext();

export const InvitationProvider = ({ children }) => {

  const [currentInvitation, setCurrentInvitation] = useState(null);

  const token = localStorage.getItem('userToken');
  const authorization = `Bearer ${token}`;  // הכנסת ה-Token ל-headers

  const updateCurrentInvite = (invite) => {
    setCurrentInvitation(invite);
};


  const getAllMyInvitations = async (userEmail) => {
    const config = {
      headers: {
        'Authorization': authorization,  // הכנסת ה-Token ל-headers
        'Content-Type': 'application/json',  // תלוי בסוג הבקשה שאת מבצעת
      },
      method: 'get',
      url: `http://localhost:3000/invitations/getInvitations/${userEmail}`,
    };

    const allMyInvitations = await axiosRequest(config);
    console.log('all invitations:', allMyInvitations);
    return allMyInvitations;
  };

  // const addInvitation = async (invitation) => {
  //   const config = {
  //     method: 'post',
  //     url: 'http://localhost:3000/invitations',
  //     data: lessonData,
  //   };

  //   const newLesson = await axiosRequest(config);
  //   console.log('added lesson:', newLesson);
  //   return newLesson;
  // };

  const updateInviteStatus = async (idInvite, status) => {
    const config = {
      headers: {
        'Authorization': authorization,  // הכנסת ה-Token ל-headers
        'Content-Type': 'application/json',  // תלוי בסוג הבקשה שאת מבצעת
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
