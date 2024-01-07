import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import AddCourse from './AddCourse';
import { useContext, useEffect } from 'react';
import { SpaceContext } from '../context/spaces.context';
import { CourseContext } from '../context/courses.context';
import { UserContext } from '../context/users.context';

const SpaceDashboard = () => {
  const { currentUser } = useContext(UserContext);
  const { currentSpace } = useContext(SpaceContext);
  const { updateCurrentCourse, getAllCourses } = useContext(CourseContext);
  const [isAddCourseModalOpen, setIsAddCourseModalOpen] = useState(false);
  const [courses, setCourses] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const coursesData = await getAllCourses(currentSpace._id);
      setCourses(coursesData.result);
    }
    fetchData();
  }, [isAddCourseModalOpen])


  useEffect(() => {
    console.log("courses", courses);
  }, [courses])


  const openAddCourseModal = () => {
    setIsAddCourseModalOpen(true);
  };

  const closeAddCourseModal = () => {
    setIsAddCourseModalOpen(false);
  };

  const openCourseDashboard = (course) => {
    updateCurrentCourse(course);

    console.log(currentUser._id);
    console.log(course.ownerUser);
    if (currentUser._id == course.ownerUser)
    {
      console.log("manager");
      navigate('/courseManagerDashboard');
    }
    else
    {
      console.log("user");
      navigate('/courseUserDashboard');
    }
  };


  return (
    <div style={{ padding: '20px' }}>
      <h2>Space Dashboard : {currentSpace.nameSpace}</h2>
      <h3>Courses in this Space:</h3>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {courses?.map((course) => (
          <Card key={course?._id} style={{ margin: '10px', minWidth: '250px' }}>
            <CardContent>
              <Typography variant="h6" component="div">
              Course name: {course?.courseName}
              </Typography>
              <Typography variant="h6" component="div">
              Description:  {course?.description}
              </Typography>
              <Typography variant="h6" component="div">
               Course type: {course?.typeCourse}
              </Typography>
              <Button
                {...course}
                variant="outlined"
                color="primary"
                onClick={() => openCourseDashboard(course)}
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
