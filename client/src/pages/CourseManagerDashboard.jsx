import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import LessonModal from '../components/LessonModal'; // Import the LessonModal component

const CourseManagerDashboard = () => {
  const { courseId } = useParams();

  const [courseData, setCourseData] = useState({
    name: 'Course Name',
    type: 'Course Type',
    permission: 'Public',
    lessons: [
      { id: '1', title: 'Lesson 1', content: 'Lesson 1 content...' },
      { id: '2', title: 'Lesson 2', content: 'Lesson 2 content...' },
      // Add more lessons as needed
    ],
  });

  const [newLesson, setNewLesson] = useState({ title: '', content: '' });
  const [lessonModalOpen, setLessonModalOpen] = useState(false);
  const [selectedLesson, setSelectedLesson] = useState(null);

  const addLesson = () => {
    const lessonId = (courseData.lessons.length + 1).toString();
    const updatedLessons = [...courseData.lessons, { ...newLesson, id: lessonId }];

    setCourseData((prevData) => ({
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
      <h2>Course Manager Dashboard - Course ID: {courseId}</h2>
      <p>Course Name: {courseData.name}</p>
      <p>Course Type: {courseData.type}</p>
      <p>Permission: {courseData.permission}</p>
      <h3>Lessons:</h3>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {courseData.lessons.map((lesson) => (
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
