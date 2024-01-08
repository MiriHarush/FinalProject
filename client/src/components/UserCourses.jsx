import React, { useState, useEffect, useContext } from 'react';
import { UserContext } from '../context/users.context';
import { CourseContext } from '../context/courses.context';
const UserCourses = () => {
  const { currentUser } = useContext(UserContext);
  const { userGuestCourses } = useContext(CourseContext);
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const email = currentUser?.email;
    console.log('current email',email);
    const fetchedCourses = userGuestCourses(email);
    setCourses(fetchedCourses);
  }, [userGuestCourses]);

  return (
    <div>
      <h2>Hello Your Courses Are:</h2>
      <ul>
        {courses.map(course => (
          console.log('courses invite',course)
        ))}
      </ul>
    </div>
  );
}

export default UserCourses;
