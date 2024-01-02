import { createContext } from 'react';
import { axiosRequest } from '../utils/serverConnection'
import { useState } from 'react';

export const CourseContext = createContext();


export const CourseProvider = ({ children }) => {
    const [currentCourse, setCurrentCourse] = useState(null);

    const token = localStorage.getItem('userToken');
    const authorization = `Bearer ${token}`;  // הכנסת ה-Token ל-headers

    const updateCurrentCourse = (course) => {
        setCurrentCourse(course);
    };


    const getAllCourses = async (id) => {
        const config = {
            headers: {
                'Authorization': authorization,  // הכנסת ה-Token ל-headers
                'Content-Type': 'application/json',  // תלוי בסוג הבקשה שאת מבצעת
            },
            method: 'get',
            url: `http://localhost:3000/courses/getAllCourses/${id}`,
        };

        const allCourses = await axiosRequest(config);
        return allCourses;
    }


    const getCourse = async (id) => {
        const config = {
            headers: {
                'Authorization': authorization,  // הכנסת ה-Token ל-headers
                'Content-Type': 'application/json',  // תלוי בסוג הבקשה שאת מבצעת
            },
            method: 'get',
            url: `http://localhost:3000/Courses/getInfoCourse/${id}`,
        };

        const course = await axiosRequest(config);
        setCurrentCourse({ ...course.result.course });
        return course;
    }


    const addCourse = async (dataCourse) => {
        const config = {
            headers: {
                'Authorization': authorization,  // הכנסת ה-Token ל-headers
                'Content-Type': 'application/json',  // תלוי בסוג הבקשה שאת מבצעת
            },
            method: 'post',
            url: 'http://localhost:3000/courses/addCourse',
            data: dataCourse
        };

        const course = await axiosRequest(config);
        return course;
    }


    const updateCourse = async (id, dataCourse) => {
        const config = {
            headers: {
                'Authorization': authorization,  // הכנסת ה-Token ל-headers
                'Content-Type': 'application/json',  // תלוי בסוג הבקשה שאת מבצעת
            },
            method: 'patch',
            url: `http://localhost:3000/courses/updateCourse/${id}`,
            data: dataCourse
        };

        const course = await axiosRequest(config);
        return course;
    }


    const deleteCourse = async (id) => {
        const config = {
            headers: {
                'Authorization': authorization,  // הכנסת ה-Token ל-headers
                'Content-Type': 'application/json',  // תלוי בסוג הבקשה שאת מבצעת
            },
            method: 'delete',
            url: `http://localhost:3000/courses/deleteCourse/${id}`,
        };

        const course = await axiosRequest(config);
        return course;
    }


    return (
        <CourseContext.Provider value={{ getAllCourses, updateCurrentCourse, getCourse, addCourse, updateCourse, deleteCourse }}>
            {children}
        </CourseContext.Provider>
    );
}