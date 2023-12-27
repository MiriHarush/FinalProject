import { createContext } from 'react';
import {axiosRequest} from '../utils/serverConnection'

export const CourseContext = createContext();


export const CourseProvider = ({ children }) => {

    const getAllCourses = async () => {
        const config = {
            method: 'get',
            url: 'http://localhost:3000/courses/getAllCourses',
        };
        
        const allCourses = await axiosRequest(config);
        return allCourses;
    }


    const getCourse = async (id) => {
        const config = {
            method: 'get',
            url: `http://localhost:3000/Courses/getInfoCourse/${id}`,
        };

        const Course = await axiosRequest(config);
        return Course;
    }


    const addCourse = async (dataCourse) => {
        const config = {
            method: 'post',
            url: 'http://localhost:3000/courses/addCourse',
            data: dataCourse
        };

        const Course = await axiosRequest(config);
        return Course;
    }


    const updateCourse = async (id, dataCourse) => {
        const config = {
            method: 'patch',
            url: `http://localhost:3000/courses/updateCourse/${id}`,
            data: dataCourse
        };

        const Course = await axiosRequest(config);
        return Course;
    }


    const deleteCourse = async (id) => {
        const config = {
            method: 'delete',
            url: `http://localhost:3000/courses/deleteCourse/${id}`,
        };

        const Course = await axiosRequest(config);
        return Course;
    }


    return (
        <CourseContext.Provider value={{ getAllCourses, getCourse, addCourse, updateCourse, deleteCourse }}>
            {children}
        </CourseContext.Provider>
    );
}