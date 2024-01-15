import React, { useState, useEffect, useContext } from 'react';
import { UserContext } from '../context/users.context';
import { CourseContext } from '../context/courses.context';
const UserCourses = () => {
  const { currentUser } = useContext(UserContext);
  const { userGuestCourses } = useContext(CourseContext);
  const [courses, setCourses] = useState([]);


  useEffect(() => {
    const fetchData = async () => {
      const email = currentUser?.email;
      console.log('current email',email);
      const fetchedCourses = await userGuestCourses(email);
      setCourses(fetchedCourses);
    }
    fetchData();
  }, [userGuestCourses])


  return (
    <div>
      {console.log('comp',courses)}
      <h2>Hello Your Courses Are:</h2>
      {
        courses.length > 0 ?<div>{  <ul>
        {courses.map(course => (
          console.log('courses invite',course)
        ))}
      </ul>}</div>:
      <div>no courses😔</div>
      
      }
    
    </div>
  );
}

export default UserCourses;
