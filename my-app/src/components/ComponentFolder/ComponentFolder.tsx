import FolderIcon from '@mui/icons-material/Folder';
import React, { useEffect, useState } from "react"
import { emptyfolder, file } from '../../assests';
import { folderNameProps, folderprops, folder1props } from '../../utils/type';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { Link, NavLink, useLocation } from 'react-router-dom';
// import { fetchFolders } from '../../actions/folderActions';
import axios from "axios"
import { fetchFoldersSuccess, setCurrentFolderId, pushToFolderIdStack } from '../../redux/slices/folderSlice';
import { ConnectedTvOutlined } from '@mui/icons-material';
const ComponentFolder = () => {
    const dispatch = useAppDispatch();
    const folders = useAppSelector((state) => state.folders.folders);
    const id = useAppSelector((state) => state.folders.currentFolderId)
    const folderstack = useAppSelector((state) => state.folders.folderIdStack)
    console.log("currentfolderId", id)
   console.log("changedddd")

    const handleFolderClick = async (folderId: number) => {
           dispatch(pushToFolderIdStack(folderId)); 
        console.log("folderStack",folderstack)
        dispatch(setCurrentFolderId(folderId));
        fetchFolders()
    };
    //   const [response, setResponse] = useState<folder1props| null>(null);
    //   const location = useLocation();

    useEffect(() => {
        //    alert("hiii")

        fetchFolders()

        // const interval=setInterval(fetchFolders,5000);
        // return()=>{
        //     clearInterval(interval)
        // }
    }, [id]);
    const id2 = useAppSelector((state) => state.folders.currentFolderId)

    const fetchFolders = async () => {
        try {
            console.log("inside fetch", id2)
            if (id !== undefined) {
                const response = await axios.get('http://localhost:3001/getFolders', {
                    params: { id: id2 }
                });
                console.log("response.data", response.data)
                console.log("helllllllloooooo")
                await dispatch(fetchFoldersSuccess(response.data));
            } else {
                console.error('Invalid id value. Please provide a valid id.');
            }
        } catch (error) {
            console.error('Error fetching folders:', error);
        }
    };


    // useEffect(() => {
    //     if (response !== null) {
    //         console.log("res", response.data);
    //       }      }, [response,id]); 
    const folder1 = folders.data
    console.log("folder1", folder1)
    return (
        <div className='flex'>
            {folder1 && folder1.length > 0 ? (
                folder1.map((item: folderprops) => {
                    return (
                        <Link key={item.Folder_id} to={`/${item.Folder_id}`} className="flex flex-col w-1/4 md:w-1/12 items-center p-2 bg-white hover:bg-gray-100 rounded-md cursor-pointer " onClick={() => handleFolderClick(item.Folder_id)} >
                            <div className="flex items-center justify-center  rounded-full " >
                                <img className='' src={emptyfolder} alt="" />
                            </div>
                            <div className="text-gray-800 font-medium">{item.Folder_Name}</div>
                            <div className="text-gray-500 text-sm">folder count</div>
                        </Link>
                    )
                })
            ) : <div>no folder available</div>
            }

            {/* {folder1 &&
          folder1.map((item:folderprops)=>{
                return(
                <Link key={item.file_id} to={`/${item.Folder_id}`} className="flex flex-col w-1/4 md:w-1/12 items-center p-2 bg-white hover:bg-gray-100 rounded-md cursor-pointer " >
                    <div className="flex items-center justify-center  rounded-full " >
                    <img className='' src={file} alt="" />
                    </div>
                    <div className="text-gray-800 font-medium">{item.file_name}</div>
                    <div className="text-gray-500 text-sm">folder count</div>
                </Link>
                )
            })
        } */}
            {/* {response &&   Array.isArray(response.data) &&
          response.data.map((item:folderprops)=>{
                return(
                <Link key={item.Folder_id} to={`/${item.Folder_id}`} className="flex flex-col w-1/4 md:w-1/12 items-center p-2 bg-white hover:bg-gray-100 rounded-md cursor-pointer "  onClick={() => handleFolderClick(item.Folder_id)} >
                    <div className="flex items-center justify-center  rounded-full " >
                    <img className='' src={emptyfolder} alt="" />
                    </div>
                    <div className="text-gray-800 font-medium">{item.Folder_Name}</div>
                    <div className="text-gray-500 text-sm">folder count</div>
                </Link>
                )
            })
        } */}
        </div>
    )
}
export default ComponentFolder