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

  const getAllMyInvitations = async (userEmail) => {
    const config = {
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

  const updateInviteStatus = async (id, lessonData) => {
    const config = {
      method: 'patch',
      url: `http://localhost:3000/invitations/updateInviteStatus/${id}`,
      data: lessonData,
    };

    const updatedStatus = await axiosRequest(config);
    console.log('updated status:', updatedStatus);
    return updatedStatus;
  };


  return (
    <Lesson.Provider value={{ currentInvitation , getAllMyInvitations , updateInviteStatus }}>
      {children}
    </Lesson.Provider>
  );
};
