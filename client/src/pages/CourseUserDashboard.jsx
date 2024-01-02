import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import InvitationModal from '../components/InvitationModal';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const CourseUserDashboard = () => {

  const { courseId } = useParams();
  const [lessons, setLessons] = useState([]);
  // const [invitations, setInvitations] = useState([]);

  const invitations = [
    { id: 1, instructorName: "a", courseName: "aa" },
    { id: 2, instructorName: "b", courseName: "bb" },
    { id: 3, instructorName: "c", courseName: "cc" }
  ]

  useEffect(() => {
    // כאשר העמוד נטען, קרא לשרת לקבלת השיעורים הקיימים בקורס
    // כאן יש להוסיף את הלוגיקה לשליפת השיעורים מהשרת ולעדכן את המשתנה lessons
    // כמו לדוגמא fetch לשרת
    // fetchLessonsFromServer(courseId).then((lessonsData) => setLessons(lessonsData));
  
  }, [courseId]);

  return (
    <>
      <div>
        <h1>lessons in course {courseId}</h1>
        {lessons.length === 0 ? (
          <p>no lessons</p>
        ) : (
          <ul>
            {lessons.map((lesson) => (
              <li key={lesson.id}>
                <h2>{lesson.title}</h2>
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
