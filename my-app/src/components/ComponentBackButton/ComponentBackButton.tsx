import React, { useEffect, useState } from "react";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import { popFromFolderIdStack } from "../../redux/slices/folderSlice";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { fetchFolders } from "../../actions/folderActions";
const ComponentBackButton = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const idstack = useAppSelector((state) => state.folders.folderIdStack);

    const handleBackClick = () => {
        dispatch(popFromFolderIdStack());
        navigate(-1);
    };

    useEffect(() => {
        const lastele = idstack[idstack.length - 1];
        console.log(lastele);
        const id = lastele
        dispatch(fetchFolders(id));
    }, [idstack])


    return (
        <div className=" p-2 sm:p-4  rounded  cursor-pointer" onClick={handleBackClick}>
            <ArrowBackIcon />
        </div>
    );
};

export default ComponentBackButton;
