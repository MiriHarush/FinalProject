// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import Typography from '@mui/material/Typography';
// // import Button from '@mui/material/Button';
// import Button from '@mui/material-next/Button';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faLight, faEye } from '@fortawesome/free-solid-svg-icons';

// import AddCourse from './AddCourse';
// import { useContext, useEffect } from 'react';
// import { SpaceContext } from '../context/spaces.context';
// import { CourseContext } from '../context/courses.context';
// import { UserContext } from '../context/users.context';
// import '../css/Course.css'
// import { padding, textAlign } from '@mui/system';

// const SpaceDashboard = () => {
//   const { currentUser } = useContext(UserContext);
//   const { currentSpace } = useContext(SpaceContext);
//   const { updateCurrentCourse, getAllCourses } = useContext(CourseContext);
//   const [isAddCourseModalOpen, setIsAddCourseModalOpen] = useState(false);
//   const [courses, setCourses] = useState([]);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchData = async () => {
//       const coursesData = await getAllCourses(currentSpace._id);
//       setCourses(coursesData.result);
//     }
//     fetchData();
//   }, [isAddCourseModalOpen])


//   useEffect(() => {
//     console.log("courses", courses);
//   }, [courses])


//   const openAddCourseModal = () => {
//     setIsAddCourseModalOpen(true);
//   };

//   const closeAddCourseModal = () => {
//     setIsAddCourseModalOpen(false);
//   };

//   const openCourseDashboard = (course) => {
//     updateCurrentCourse(course);

//     console.log(currentUser._id);
//     console.log(course.ownerUser);
//     if (currentUser._id == course.ownerUser) {
//       console.log("manager");
//       navigate('/courseManagerDashboard');
//     }
//     else {
//       console.log("user");
//       navigate('/courseUserDashboard');
//     }
//   };


//   // return (
//   //   <div style={{ padding: '20px' }}>
//   //     <h2>Space Dashboard : {currentSpace.nameSpace}</h2>
//   //     <h3>Courses in this Space:</h3>
//   //     <div style={{ display: 'flex', flexDirection: 'column' }}>
//   //       {courses?.map((course) => (
//   //         <Card key={course?._id} style={{ margin: '10px', minWidth: '250px' }}>
//   //           <CardContent>
//   //             <Typography variant="h6" component="div">
//   //             Course name: {course?.courseName}
//   //             </Typography>
//   //             <Typography variant="h6" component="div">
//   //             Description:  {course?.description}
//   //             </Typography>
//   //             <Typography variant="h6" component="div">
//   //              Course type: {course?.typeCourse}
//   //             </Typography>
//   //             <Button
//   //               {...course}
//   //               variant="outlined"
//   //               color="primary"
//   //               onClick={() => openCourseDashboard(course)}
//   //               className="courseButton"   
//   //             >
//   //               View Course
//   //             </Button>
//   //           </CardContent>
//   //         </Card>
//   //       ))}
//   //     </div>
//   //     <Button 
//   //     variant="outlined" 
//   //     color="primary" onClick={openAddCourseModal}  
//   //     className="courseButton"   
//   //     >
//   //       Add Course
//   //     </Button>

//   //     {isAddCourseModalOpen &&
//   //       <AddCourse onClose={closeAddCourseModal} />
//   //     }
//   //   </div>
//   // );
//   const CourseCard = ({ course }) => {
//     return (
//       <Card className="courseCard">
//         <CardContent>
//           <Typography variant="h6" component="div">
//             Course name: {course?.courseName}
//           </Typography>
//           <Typography variant="h6" component="div">
//             Description: {course?.description}
//           </Typography>
//           <Typography variant="h6" component="div">
//             Course type: {course?.typeCourse}
//           </Typography>
//           <Button
//             {...course}
//             // variant="elevated"
//             // variant="elevated"
//             // variant="outlined"
//             // color="primary"
//             onClick={() => openCourseDashboard(course)}
//             className="courseButton"
//           >
//             {/* <FontAwesomeIcon icon={faLight} className="fa-icon" /> */}
//             <FontAwesomeIcon icon={faEye} className="fa-icon" /> 
//             View Course
//           </Button>
//         </CardContent>
//       </Card>
//     );
//   };


//   return (
//     <div style={{ padding: '3%' }} className='centerContainer' >
//       <h2 className='textCenter'>Space Dashboard: {currentSpace.nameSpace}</h2>

//       <h3 className='textCenter'>Courses in this Space:</h3>
//       <div className="courseContainer">
//         {courses?.map((course) => (
//           <CourseCard key={course?._id} course={course} />
//         ))}
//       </div>
//       <Button
//         variant="elevated"
//         color="primary"
//         onClick={openAddCourseModal}

//         className="courseButton"

//       >
//         Add Course
//       </Button>

//       {isAddCourseModalOpen && <AddCourse onClose={closeAddCourseModal} />}
//     </div>
//   );
// };

// export default SpaceDashboard;
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
import Button from '@mui/material-next/Button';
import IconButton from '@mui/material/IconButton';
import VisibilityIcon from '@mui/icons-material/Visibility';
import AddCircleIcon from '@mui/icons-material/AddCircle';

import AddCourse from './AddCourse';
import { useContext, useEffect } from 'react';
import { SpaceContext } from '../context/spaces.context';
import { CourseContext } from '../context/courses.context';
import { UserContext } from '../context/users.context';
import '../css/Course.css';


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
    };
    fetchData();
  }, [isAddCourseModalOpen]);

  useEffect(() => {
    console.log("courses", courses);
  }, [courses]);

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
    if (currentUser._id == course.ownerUser) {
      console.log("manager");
      navigate('/courseManagerDashboard');
    } else {
      console.log("user");
      navigate('/courseUserDashboard');
    }
  };

  const CourseCard = ({ course }) => {
    return (

      <Card className="courseCard">
        <CardContent>
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
            {...course}
            variant="outlined"
            color="primary"
            onClick={() => openCourseDashboard(course)}
            className="courseButton"
          >
            < VisibilityIcon sx={{ marginRight: '5px' }}/>
              View Course
          </Button>
        </CardContent>
      </Card>
    );
  };

  return (
    <div style={{ padding: '3%' }} className='centerContainer' >
      <h2 className='textCenter'>Space Dashboard: {currentSpace.nameSpace}</h2>

      <h3 className='textCenter'>Courses in this Space:</h3>
      <div className="courseContainer">
        {courses?.map((course) => (
          <CourseCard key={course?._id} course={course} />
        ))}
      </div>
      <Button
        variant="elevated"
        color="primary"
        onClick={openAddCourseModal}
        className="courseButton"
      >
        <AddCircleIcon   style={{ marginRight: '4px' }}/>
        Add Course
      </Button>

      {isAddCourseModalOpen && <AddCourse onClose={closeAddCourseModal} />}
    </div>
  );
};

export default SpaceDashboard;
