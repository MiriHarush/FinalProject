import React, { useState, useContext, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import LessonModal from '../components/LessonModal'; // Import the LessonModal component
import { CourseContext } from '../context/courses.context';
import { LessonContext } from '../context/lessons.context';
import { InvitationContext } from '../context/invitations.context';


const CourseManagerDashboard = () => {
  const { currentCourse } = useContext(CourseContext);
  const { getAllLessons } = useContext(LessonContext);
  const { getAllMyInvitations } = useContext(InvitationContext);

  const [lessons, setLessons] = useState([]);
  const [invitations, setInvitations] = useState([]);


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


  // const { courseId } = useParams();

  // const [courseData, setCourseData] = useState({
  //   name: 'Course Name',
  //   type: 'Course Type',
  //   permission: 'Public',
  //   lessons: [
  //     { id: '1', title: 'Lesson 1', content: 'Lesson 1 content...' },
  //     { id: '2', title: 'Lesson 2', content: 'Lesson 2 content...' },
  //     // Add more lessons as needed
  //   ],
  // });

  const [newLesson, setNewLesson] = useState({ title: '', content: '' });
  const [lessonModalOpen, setLessonModalOpen] = useState(false);
  const [selectedLesson, setSelectedLesson] = useState(null);


  const addLesson = () => {
    const lessonId = (lessons.length + 1).toString();
    const updatedLessons = [...lessons, { ...newLesson, id: lessonId }];

    setLessons((prevData) => ({
      ...prevData,
      lessons: updatedLessons,
    }));

    setNewLesson({ title: '', content: '' });
  };

  const openLessonModal = (lesson) => {
    setSelectedLesson(lesson);
    setLessonModalOpen(true);
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
        {lessons.map((lesson) => (
          <Card key={lesson.id} style={{ margin: '10px', minWidth: '250px' }}>
            <CardContent>
              <Typography variant="h6" component="div">
                {lesson.title}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                {lesson.content}
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
              placeholder="Lesson Title"
              value={newLesson.title}
              onChange={(e) => setNewLesson({ ...newLesson, title: e.target.value })}
              style={{ marginBottom: '10px', width: '100%' }}
            />
            <textarea
              placeholder="Lesson Content"
              value={newLesson.content}
              onChange={(e) => setNewLesson({ ...newLesson, content: e.target.value })}
              style={{ marginBottom: '10px', width: '100%' }}
            />
            <Button
              variant="outlined"
              color="primary"
              onClick={addLesson}
              style={{ marginTop: '10px' }}
            >
              Add Lesson
            </Button>
          </CardContent>
        </Card>
      </div>
      {/* Lesson Modal */}
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
