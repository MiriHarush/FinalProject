import React, { useState, useEffect, useContext } from 'react';
import InvitationModal from '../components/InvitationModal';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { CourseContext } from '../context/courses.context';
import { LessonContext } from '../context/lessons.context';
import { InvitationContext } from '../context/invitations.context';
// import LessonModal from '../components/LessonModal';
import FileModal from '../components/FileModal';
import CourseManagerDashboard from './CourseManagerDashboard';
import { useNavigate } from 'react-router-dom';


const CourseUserDashboard = () => {

  const { currentCourse } = useContext(CourseContext);
  const { updateCurrentLesson, getAllLessons } = useContext(LessonContext);
  const { getAllMyInvitations } = useContext(InvitationContext);

  const [lessons, setLessons] = useState([]);
  const [invitations, setInvitations] = useState([]);

  const navigate = useNavigate();


  useEffect(() => {
    const fetchData = async () => {
      const lessonsData = await getAllLessons(currentCourse._id);
      setLessons(lessonsData.result);

      const invitationsData = await getAllMyInvitations(currentCourse._id);
      setInvitations(invitationsData.result);

    }
    fetchData();

  }, [])


  useEffect(() => {
    console.log("lessons", lessons);
  }, [lessons])

  useEffect(() => {
    console.log("invitations", invitations);
  }, [invitations])

  const getType = (file) => {
    const url = file;
    const urlArray = url.split('/');
    const myFile = urlArray[urlArray.length - 1];
    const fileName = myFile.split('.')[1];
    return fileName;
  }

  const openLessonModal = (lesson) => {
    updateCurrentLesson(lesson);
    navigate('/lessonModal',{ state: { isManager: 'false' } });

  }

  return (
    <>
    {/* <CourseManagerDashboard/> */}
    <hr/>
      <div>
        <h1>lessons in course </h1>
        {lessons.length === 0 ? (
          <p>no lessons</p>
        ) : (
          <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            {lessons.map((lesson) => (
              // <LessonModal lesson={lesson} />
              <Card style={{ margin: '10px', width: '45%' }}>
                <CardContent>
                  <Typography variant="h4" component="div">
                    {lesson?.lessonName}
                  </Typography>
                  <hr />
                  <Typography variant="body1" component="div">
                    {/* {lesson.content.map((file) => {
                      return <FileModal fileType={getType(file)} fileUrl={file} />
                    })} */}
                    {lesson?.descerption}
                  </Typography>
                  <Button
                  {...lesson}
                variant="outlined"
                color="primary"
                onClick={() => openLessonModal(lesson)}
                style={{ marginTop: '10px' }}
              >
                View Lesson
              </Button>
                </CardContent>
              </Card>
            ))}
          </div>
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
