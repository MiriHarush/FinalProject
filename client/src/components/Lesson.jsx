import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const Lesson = () => {
  const { courseId } = useParams();

  const courseData = {
    name: 'Course Name',
    type: 'Course Type',
    permission: 'Public',
    lessons: [
      { id: '1', title: 'Lesson 1', location: { lat: 34.0522, lng: -118.2437 } },
      { id: '2', title: 'Lesson 2', location: { lat: 40.7128, lng: -74.0060 } },
      // ניתן להוסיף שאר השיעורים עם מיקומים
    ],
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
              {lesson.location && (
                <Typography variant="body2" color="text.secondary" style={{ marginTop: '10px' }}>
                  Location: {lesson.location.lat}, {lesson.location.lng}
                </Typography>
              )}
              <Link to={`/course/${courseId}`}>
                <Button variant="outlined" color="primary" style={{ marginTop: '10px' }}>
                  Back to Course
                </Button>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Lesson;
