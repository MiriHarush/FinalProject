import { createContext } from 'react';
import { axiosRequest } from '../utils/serverConnection'
import { useState } from 'react';


export const SpaceContext = createContext();


export const SpaceProvider = ({ children }) => {

    const [currentSpace, setCurrentSpace] = useState(null);

    const token = localStorage.getItem('userToken');
    const authorization = `Bearer ${token}`;  // הכנסת ה-Token ל-headers


    const getAllSpaces = async () => {
        console.log("get all spaces");
        console.log(token);
        const config = {
            headers: {
                'Authorization': authorization,  // הכנסת ה-Token ל-headers
                'Content-Type': 'application/json',  // תלוי בסוג הבקשה שאת מבצעת
                // ניתן להוסיף headers נוספים כפי שצריך
            },
            method: 'get',
            url: 'http://localhost:3000/spaces/getAllSpaces',
        };

        const allSpaces = await axiosRequest(config);
        console.log("all", allSpaces);
        return allSpaces;
    }


    const getSpace = async (id) => {
        const config = {
            method: 'get',
            url: `http://localhost:3000/spaces/getInfoSpace/${id}`,
        };

        const space = await axiosRequest(config);
        setCurrentSpace({...space.result.space});
        return space;
    }


    const addSpace = async (dataSpace) => {
        const config = {
            method: 'post',
            url: 'http://localhost:3000/spaces/addSpace',
            data: dataSpace
        };

        const space = await axiosRequest(config);
        return space;
    }


    const updateSpace = async (id, dataSpace) => {
        const config = {
            method: 'patch',
            url: `http://localhost:3000/spaces/updateSpace/${id}`,
            data: dataSpace
        };

        const space = await axiosRequest(config);
        return space;
    }


    const deleteSpace = async (id) => {
        const config = {
            method: 'delete',
            url: `http://localhost:3000/spaces/deleteSpace/${id}`,
        };

        const space = await axiosRequest(config);
        return space;
    }


    return (
        <SpaceContext.Provider value={{ currentSpace, getAllSpaces, getSpace, addSpace, updateSpace, deleteSpace }}>
            {children}
        </SpaceContext.Provider>
    );
}