import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../context/users.context';
import {  CourseContext } from '../context/courses.context';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';


const UserCourses = () => {
  const { currentUser } = useContext(UserContext);
  const { userGuestCourses } = useContext(UserContext);
  const [courses, setCourses] = useState([]);
  const { updateCurrentCourse } = useContext(CourseContext);
  const navigate = useNavigate();


  useEffect(() => {
    const fetchData = async () => {
      const coursesData = await userGuestCourses(currentUser.email);
      setCourses(coursesData.result);
    }
    fetchData();
  }, [userGuestCourses])

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
    <div>
      <h2>Your Courses :</h2>
      <ul>
        {courses.map(course => (
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
      </ul>
    </div>
  );
}

export default UserCourses;