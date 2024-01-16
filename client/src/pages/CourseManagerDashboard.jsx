import React, { useState, useContext, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
import Button from '@mui/material-next/Button';
import LessonModal from '../components/LessonModal'; // Import the LessonModal component
import { CourseContext } from '../context/courses.context';
import { LessonContext } from '../context/lessons.context';
import { InvitationContext } from '../context/invitations.context';
import { useNavigate } from 'react-router-dom';
import '../css/lesson.css';


const CourseManagerDashboard = () => {
  const { currentCourse } = useContext(CourseContext);
  const { updateCurrentLesson, getAllLessons, addLesson } = useContext(LessonContext);
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

  const [newLesson, setNewLesson] = useState({ title: '', content: '' });
  const [lessonModalOpen, setLessonModalOpen] = useState(false);
  const [selectedLesson, setSelectedLesson] = useState(null);

  const addNewLesson = async () => {
    const lessonId = (lessons.length + 1).toString();
    const updatedLessons = [...lessons, { ...newLesson, id: lessonId }];

    const lesson = {
      lessonName: newLesson.title,
      descerption: newLesson.content,
      ownerLesson: currentCourse._id
    }

    await addLesson(lesson);

    setLessons(() => ([
      ...updatedLessons,
    ]));

    setNewLesson({ title: '', content: '' });
  };

  const openLessonModal = (lesson) => {
    setSelectedLesson(lesson);
    setLessonModalOpen(true);
    updateCurrentLesson(lesson);

    navigate('/lessonModal', { state: { isManager: 'true' } });
  };

  const closeLessonModal = () => {
    setSelectedLesson(null);
    setLessonModalOpen(false);
  };

  return (
    <div className='centerContainer'>

      <h2 style={{ color: 'rgb(62, 63, 63)' }}>Course Manager Dashboard - Course ID:</h2>
      <div className='words'>

        <h3><span style={{ fontWeight: 'bold' }}>Course name: </span> {currentCourse.courseName}</h3>
        <h3><span style={{ fontWeight: 'bold' }}>Course Type:  </span> {currentCourse.typeCourse}</h3>
        <h3><span style={{ fontWeight: 'bold' }}>Description:  </span> {currentCourse.description}</h3>
        <h3><span style={{ fontWeight: 'bold' }}>Permission:  </span> {currentCourse.permission}</h3>
        <h3>Lessons:</h3>
      </div>
      <div >
        {lessons?.map((lesson) => (
          <Card key={lesson.id} className='courseCard'>
            <CardContent style={{ textAlign: 'center' }}>
              <Typography variant="h5" component="div">
                {lesson.lessonName}
              </Typography>
              <Typography variant="h6" color="textSecondary">
                {lesson.descerption}
              </Typography>
              <Button
                variant="outlined"
                color="primary"
                onClick={() => openLessonModal(lesson)}
                className='courseButton'
              >
                View Lesson
              </Button>
            </CardContent>
          </Card>
        ))}
        <Card className='courseCard'>
          <CardContent>
            <Typography variant="h6" component="div">
              New Lesson
            </Typography>
            <input
              type="text"
              placeholder="Lesson Name"
              value={newLesson.title}
              onChange={(e) => setNewLesson({ ...newLesson, title: e.target.value })}
              style={{ marginBottom: '10px', width: '100%' }}
            />
            <textarea
              placeholder="Lesson Description"
              value={newLesson.content}
              onChange={(e) => setNewLesson({ ...newLesson, content: e.target.value })}
              style={{ marginBottom: '10px', width: '100%' }}
            />
            <Button
              variant="outlined"
              color="primary"
              onClick={addNewLesson}
              className='courseButton'
            >
              Add Lesson
            </Button>
          </CardContent>
        </Card>
      </div>
      {lessonModalOpen && (
        <LessonModal
          open={lessonModalOpen}
          onClose={closeLessonModal}
          lesson={selectedLesson}
        />
      )}
    </div>
  );
};

export default CourseManagerDashboard;
