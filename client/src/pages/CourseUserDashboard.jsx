import React, { useState, useEffect, useContext } from 'react';
import InvitationModal from '../components/InvitationModal';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { CourseContext } from '../context/courses.context';
import { LessonContext } from '../context/lessons.context';
import { InvitationContext } from '../context/invitations.context';

const CourseUserDashboard = () => {

  const { currentCourse } = useContext(CourseContext);
  const { getAllLessons } = useContext(LessonContext);
  const [lessons, setLessons] = useState([]);

  const [invitations, setInvitations] = useState([]);

  // const invitations = [
  //   { id: 1, instructorName: "a", courseName: "aa" },
  //   { id: 2, instructorName: "b", courseName: "bb" },
  //   { id: 3, instructorName: "c", courseName: "cc" }
  // ]

 
  useEffect(() => {
    const fetchData = async () => {
      const lessonsData = await getAllLessons(currentCourse._id);
      setLessons(lessonsData.result);

    }
    fetchData();

  }, [])


  useEffect(() => {
    console.log("lessons", lessons);
  }, [lessons])


  return (
    <>
      <div>
        <h1>lessons in course </h1>
        {lessons.length === 0 ? (
          <p>no lessons</p>
        ) : (
          <ul>
            {lessons.map((lesson) => (
              <li key={lesson.id}>
                <h2>{lesson.lessonName}</h2>
                <p>{lesson.content}</p>
                {/* הוסף כאן יותר מידע או תצוגה של השיעור */}
              </li>
            ))}
          </ul>
        )}
      </div>

      <div>
        <h1>invitations</h1>
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          {invitations.length === 0 ? (
            <p>no invitations</p>
          ) : (
            invitations.map((invite) => (
              <InvitationModal invite={invite} key={invite.id} />
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default CourseUserDashboard;
