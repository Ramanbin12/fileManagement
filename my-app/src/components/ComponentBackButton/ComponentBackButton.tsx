import React, { useEffect, useState } from "react";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';     

import { setCurrentFolderId, popFromFolderIdStack, fetchFoldersSuccess } from "../../redux/slices/folderSlice";
import { useAppDispatch, useAppSelector } from "../../hooks";
import axios from "axios";
const ComponentBackButton = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const idstack = useAppSelector((state) => state.folders.folderIdStack);
    const id = useAppSelector((state) => state.folders.currentfolderId)

    const handleBackClick = () => {
        dispatch(popFromFolderIdStack());
        navigate(-1);
    };

    useEffect(() => {
        const lastele = idstack[idstack.length - 1];
        console.log(lastele);
        const id = lastele
        fetchFolders(id);
    }, [idstack, id])



    const fetchFolders = async (id: number) => {
        try {

            if (id !== undefined) {
                const response = await axios.get('http://localhost:3001/getFolders', {
                    params: { id: id }
                });
                dispatch(fetchFoldersSuccess(response.data));
            } else {
                dispatch(setCurrentFolderId(null));

                console.error('Invalid id value. Please provide a valid id.');
            }
        } catch (error) {
            console.error('Error fetching folders:', error);
        }
    };
    return (
        // <button className=" p-2 sm:p-4  rounded  cursor-pointer" onClick={handleBackClick}>
        //     Back
        // </button>
        <div className=" p-2 sm:p-4  rounded  cursor-pointer" onClick={handleBackClick}>
<ArrowBackIcon/>
        </div>
    );
};

export default ComponentBackButton;
