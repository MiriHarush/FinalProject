import { createContext } from 'react';
import {axiosRequest} from '../utils/serverConnection'

export const SpaceContext = createContext();


export const SpaceProvider = ({ children }) => {

    const getAllSpaces = async () => {
        console.log("get all spaces");
        const config = {
            method: 'get',
            url: 'http://localhost:3000/spaces/getAllSpaces',
        };
        
        const allSpaces = await axiosRequest(config);
        return allSpaces;
    }


    const getSpace = async (id) => {
        const config = {
            method: 'get',
            url: `http://localhost:3000/spaces/getInfoSpace/${id}`,
        };

        const space = await axiosRequest(config);
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
        <SpaceContext.Provider value={{ getAllSpaces, getSpace, addSpace, updateSpace, deleteSpace }}>
            {children}
        </SpaceContext.Provider>
    );
}