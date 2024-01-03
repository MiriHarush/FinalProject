//הוספה עדכון מחיקה 
//צפייה בשיעורי הקורס
//צפייה בשיעור אחד

import { createContext, useState } from 'react';
import { axiosRequest } from '../utils/serverConnection';

export const LessonContext = createContext();

export const LessonProvider = ({ children }) => {
  const [currentLesson, setCurrentLesson] = useState(null);


  const token = localStorage.getItem('userToken');
  const authorization = `Bearer ${token}`;  // הכנסת ה-Token ל-headers

  const updateCurrentLesson = (lesson) => {
    setCurrentLesson(lesson);
  };

  
  const getAllLessons = async (idLesson) => {
    const config = {
      headers: {
        'Authorization': authorization,  // הכנסת ה-Token ל-headers
        'Content-Type': 'application/json',  // תלוי בסוג הבקשה שאת מבצעת
      },
      method: 'get',
      url: `http://localhost:3000/lesson/getAllLessones/${idLesson}`
    };

    const allLessons = await axiosRequest(config);
    console.log('all lessons:', allLessons);
    return allLessons;
  };


  const getLesson = async (courseID) => {
    const config = {
      headers: {
        'Authorization': authorization,  // הכנסת ה-Token ל-headers
        'Content-Type': 'application/json',  // תלוי בסוג הבקשה שאת מבצעת
      },
      method: 'get',
      url: `http://localhost:3000/lesson/getOneLessones/${courseID}`
    };

    const allLessons = await axiosRequest(config);
    console.log('all lessons:', allLessons);
    return allLessons;
  };


  const addLesson = async (lessonData) => {
    const config = {
      headers: {
        'Authorization': authorization,  // הכנסת ה-Token ל-headers
        'Content-Type': 'application/json',  // תלוי בסוג הבקשה שאת מבצעת
      },
      method: 'post',
      url: 'http://localhost:3000/lesson/createLesson',
      data: lessonData,
    };

    const newLesson = await axiosRequest(config);
    console.log('added lesson:', newLesson);
    return newLesson;
  };


  const updateLesson = async (id, lessonData) => {
    const config = {
      headers: {
        'Authorization': authorization,  // הכנסת ה-Token ל-headers
        'Content-Type': 'application/json',  // תלוי בסוג הבקשה שאת מבצעת
      },
      method: 'patch',
      url: `http://localhost:3000/lesson/updateLesson/${id}`,
      data: lessonData,
    };

    const updatedLesson = await axiosRequest(config);
    console.log('updated lesson:', updatedLesson);
    return updatedLesson;
  };


  const deleteLesson = async (id) => {
    const config = {
      headers: {
        'Authorization': authorization,  // הכנסת ה-Token ל-headers
        'Content-Type': 'application/json',  // תלוי בסוג הבקשה שאת מבצעת
      },
      method: 'delete',
      url: `http://localhost:3000/lesson/deleteLesson/${id}`,
      data: lessonData,
    };

    const deletedLesson = await axiosRequest(config);
    console.log('deleted lesson:', deletedLesson);
    return deletedLesson;
  };


  return (
    <LessonContext.Provider value={{ currentLesson, updateCurrentLesson, getAllLessons, getLesson, addLesson, updateLesson, deleteLesson }}>
      {children}
    </LessonContext.Provider>
  );
};
