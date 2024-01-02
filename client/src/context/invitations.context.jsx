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
      url: 'http://localhost:3000/invitations',
      data: userEmail
    };

    const allMyInvitations = await axiosRequest(config);
    console.log('all invitations:', allMyInvitations);
    return allMyInvitations;
  };

  const addInvitation = async (invitation) => {
    const config = {
      method: 'post',
      url: 'http://localhost:3000/invitations',
      data: lessonData,
    };

    const newLesson = await axiosRequest(config);
    console.log('added lesson:', newLesson);
    return newLesson;
  };

  const updateLesson = async (lessonData) => {
    const config = {
      method: 'patch',
      url: 'http://localhost:3000/lessons',
      data: lessonData,
    };

    const updatedLesson = await axiosRequest(config);
    console.log('updated lesson:', updatedLesson);
    return updatedLesson;
  };
  const deleteLesson = async (lessonData) => {
    const config = {
      method: 'post',
      url: 'http://localhost:3000/lessons',
      data: lessonData,
    };

    const deletedLesson = await axiosRequest(config);
    console.log('deleted lesson:', deletedLesson);
    return deletedLesson;
  };

  return (
    <Lesson.Provider value={{ currentLesson , getAllLessons , addLesson , updateLesson , deleteLesson}}>
      {children}
    </Lesson.Provider>
  );
};
