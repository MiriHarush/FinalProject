import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../context/users.context';
import { CourseContext } from '../context/courses.context';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
import VisibilityIcon from '@mui/icons-material/Visibility';
import Button from '@mui/material-next/Button';
import '../css/Course.css';

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
    if (currentUser._id == course.ownerUser) {
      console.log("manager");
      navigate('/courseManagerDashboard');
    }
    else {
      console.log("user");
      navigate('/courseUserDashboard');
    }
  };


  return (
      <div className="courseContainer">
      {courses.map(course => (
        // <Card className='courseCard' key={course?._id} >
        //   <CardContent>
        //     <Typography variant="h6" component="div">
        //       Course name: {course?.courseName}
        //     </Typography>
        //     <Typography variant="h6" component="div">
        //       Description:  {course?.description}
        //     </Typography>
        //     <Typography variant="h6" component="div">
        //       Course type: {course?.typeCourse}
        //     </Typography>
        //     <Button
        //       className='courseButton'
        //       {...course}
        //       variant="elevated"
        //       color="primary"
        //       onClick={() => openCourseDashboard(course)}
        //       style={{ marginTop: '10px' }}
        //     >
        //       < VisibilityIcon sx={{ marginRight: '5px' }} />
        //       View Course
        //     </Button>
        //   </CardContent>
        // </Card>
        <Card className="courseCard">
          <CardContent style={{textAlign:'center'}}>
            <Typography variant="h6" component="div">
              <span style={{ fontWeight: 'bold' }}>Course name: </span>{course?.courseName}
            </Typography>
            <Typography variant="h6" component="div">
              <span style={{ fontWeight: 'bold' }}>Description: </span>  {course?.description}
            </Typography>
            <Typography variant="h6" component="div">
              <span style={{ fontWeight: 'bold' }}>Course type: </span>   {course?.typeCourse}
            </Typography>
            <Button
              className='courseButton'
              {...course}
              variant="elevated"
              color="primary"
              onClick={() => openCourseDashboard(course)}
              style={{ marginTop: '10px' }}
            >
              < VisibilityIcon sx={{ marginRight: '5px' }} />
              View Course
            </Button>
          </CardContent>
        </Card>
      ))}
      </div>
  );
}

export default UserCourses;