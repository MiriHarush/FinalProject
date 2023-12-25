import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Lesson from '../components/Lesson';
import LessonModal from '../components/LessonModal';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const CourseManagerDashboard = () => {
  const { courseId } = useParams();

  const courseData = {
    name: 'Course Name',
    type: 'Course Type',
    permission: 'Public',
    lessons: [
      { id: '1', title: 'Lesson 1', content: 'Lesson 1 content...' },
      { id: '2', title: 'Lesson 2', content: 'Lesson 2 content...' },
      // ניתן להוסיף שאר השיעורים עם תוכן
    ],
  };
    const [selectedLesson, setSelectedLesson] = useState(null);
  
    const displayLesson = (lesson) => {
      setSelectedLesson(lesson);
    };
  
    if (selectedLesson) {
      return (
        <LessonModal
          open={true}
          onClose={() => setSelectedLesson(null)}
          lesson={selectedLesson}
        />
      );
    }
  if (selectedLesson) {
    return (
      <div style={{ padding: '20px' }}>
        <Lesson courseId={courseId} lesson={selectedLesson} />
        <Button variant="outlined" color="primary" onClick={() => setSelectedLesson(null)}>
          Back to Lessons
        </Button>
      </div>
    );
  }

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
              <Button
                variant="outlined"
                color="primary"
                onClick={() => displayLesson(lesson)}
                style={{ marginTop: '10px' }}
              >
                View Lesson
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default CourseManagerDashboard;
