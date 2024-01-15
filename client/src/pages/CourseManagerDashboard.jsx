import React, { useState, useContext, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import LessonModal from '../components/LessonModal'; // Import the LessonModal component
import { CourseContext } from '../context/courses.context';
import { LessonContext } from '../context/lessons.context';
import { InvitationContext } from '../context/invitations.context';
import { useNavigate } from 'react-router-dom';

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
    <div style={{ padding: '20px' }}>
      <h2>Course Manager Dashboard - Course ID:</h2>
      <p>Course Name: {currentCourse.courseName}</p>
      <p>Course Type: {currentCourse.typeCourse}</p>
      <p>Description: {currentCourse.description}</p>
      <p>Permission: {currentCourse.permission}</p>
      <h3>Lessons:</h3>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {lessons?.map((lesson) => (
          <Card key={lesson.id} style={{ margin: '10px', minWidth: '250px' }}>
            <CardContent>
              <Typography variant="h6" component="div">
                {lesson.lessonName}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                {lesson.descerption}
              </Typography>
              <Button
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
        <Card style={{ margin: '10px', minWidth: '250px' }}>
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
              style={{ marginTop: '10px' }}
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
