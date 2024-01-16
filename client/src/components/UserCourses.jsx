import React, { useState, useEffect, useContext } from 'react';
import { UserContext } from '../context/users.context';

const UserCourses = () => {
  const { userGuestCourses } = useContext(UserContext);
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    // הפעלת הפונקציה ועדכון המשתנה courses
    const fetchedCourses = userGuestCourses();
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
