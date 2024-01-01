import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import AddCourse from './AddCourse';
import { useContext } from 'react';
import { SpaceContext } from '../context/spaces.context';


const SpaceDashboard = () => {
  const { spaceId } = useParams();
  const { currentSpace, getSpace } = useContext(SpaceContext);

  const [isAddCourseModalOpen, setIsAddCourseModalOpen] = useState(false);

  // Assuming you have a list of courses related to the space
  const courseList = [
    { id: '1', name: 'Course 1' },
    { id: '2', name: 'Course 2' },
    // Add more courses as needed
  ];

  const openAddCourseModal = () => {
    setIsAddCourseModalOpen(true);
  };

  const closeAddCourseModal = () => {
    setIsAddCourseModalOpen(false);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Space Dashboard - Space ID: {spaceId}</h2>
      <h3>Courses in this Space:</h3>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {courseList.map((course) => (
          <Card key={course.id} style={{ margin: '10px', minWidth: '250px' }}>
            <CardContent>
              <Typography variant="h6" component="div">
                {course.name}
              </Typography>
              <Button
                variant="outlined"
                color="primary"
                onClick={openAddCourseModal}
                style={{ marginTop: '10px' }}
              >
                View Course
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
      <Button variant="outlined" color="primary" onClick={openAddCourseModal}>
        Add Course
      </Button>

      {isAddCourseModalOpen &&
        <AddCourse onClose={closeAddCourseModal} />
      }
    </div>
  );
};

export default SpaceDashboard;
