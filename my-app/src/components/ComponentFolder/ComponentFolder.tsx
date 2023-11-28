import FolderIcon from '@mui/icons-material/Folder';
import React, { useEffect, useState } from "react"
import { document, documents, emptyfolder, file } from '../../assests';
import { folderNameProps, folderprops, folder1props, filesprops } from '../../utils/type';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { Link, NavLink, useLocation } from 'react-router-dom';
// import { fetchFolders } from '../../actions/folderActions';
import axios from "axios"
import { fetchFoldersSuccess, setCurrentFolderId, pushToFolderIdStack, fetchFileSuccess } from '../../redux/slices/folderSlice';
import { ConnectedTvOutlined } from '@mui/icons-material';
const ComponentFolder = () => {
    const dispatch = useAppDispatch();
    const folders = useAppSelector((state) => state.folders.folders);
    const files=useAppSelector((state)=>state.folders.files)
    const id = useAppSelector((state) => state.folders.currentFolderId)
    const folderstack = useAppSelector((state) => state.folders.folderIdStack)

    const handleFolderClick = async (folderId: number) => {
           dispatch(pushToFolderIdStack(folderId)); 
        dispatch(setCurrentFolderId(folderId));
        fetchFolders()
    };


    useEffect(() => {

        fetchFolders()
        fetchFile()
  
    }, [id]);
    const id2 = useAppSelector((state) => state.folders.currentFolderId)

    const fetchFolders = async () => {
        try {
            if (id !== undefined) {
                const response = await axios.get('http://localhost:3001/getFolders', {
                    params: { id: id2 }
                });
                await dispatch(fetchFoldersSuccess(response.data));
            } else {
                console.error('Invalid id value. Please provide a valid id.');
            }
        } catch (error) {
            console.error('Error fetching folders:', error);
        }
    };

    const fetchFile = async () => {
        try {
            if (id !== undefined) {
                const response = await axios.get('http://localhost:3001/getFile', {
                    params: { id: id2 }
                });
                await dispatch(fetchFileSuccess(response.data));
            } else {
                console.error('Invalid id value. Please provide a valid id.');
            }
        } catch (error) {
            console.error('Error fetching folders:', error);
        }
    };

    const folder1 = folders.data
    const files1=files.data
    return (
        <div className='flex justify-evenly'>
            
            {folder1 && folder1.length > 0 &&
                folder1.map((item: folderprops) => {
                    return (
                        <Link key={item.Folder_id} to={`/${item.Folder_id}`} className="flex flex-col w-1/4 md:w-1/12  items-center p-2  rounded-md cursor-pointer " onClick={() => handleFolderClick(item.Folder_id)} >
                            <div className="flex items-center justify-center  rounded-full " >
                                <img className='' src={emptyfolder} alt="" />
                            </div>
                            <div className="text-gray-800 font-medium">{item.Folder_Name}</div>
                            {/* <div className="text-gray-500 text-sm">folder count</div> */}
                        </Link>
                    )
                })
           
            }


{files1 && files1.length > 0 &&
                files1.map((item: filesprops) => {
                    return (
                        <Link key={item.file_id} to={item.path} className="flex flex-col w-1/4 md:w-1/6 gap-2 items-center p-2  rounded-md cursor-pointer "  >
                            <div className="flex items-center justify-center  rounded-full " >
                                <img className='text-white ' src={documents} alt="" />
                            </div>
                            <div className="text-gray-800 font-medium">{item.file_name}</div>
                            <div className="text-white text-sm">{item.file_size}Mb</div>
                        </Link>
                    )
                })
            }

      
        </div>
    )
}
export default ComponentFolder