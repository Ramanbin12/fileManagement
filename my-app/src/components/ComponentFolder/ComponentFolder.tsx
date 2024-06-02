import React, { useEffect} from "react"
import { documents, emptyfolder} from '../../assests';
import { folderprops,filesprops } from '../../utils/type';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { Link } from 'react-router-dom';
import {  setCurrentFolderId, pushToFolderIdStack} from '../../redux/slices/folderSlice';
import { fetchFolders,fetchFile } from '../../actions/folderActions';
const ComponentFolder = () => {
    const dispatch = useAppDispatch();
    const folders = useAppSelector((state) => state.folders.folders);
    const files=useAppSelector((state)=>state.folders.files)
    const id = useAppSelector((state) => state.folders.currentFolderId)

    const handleFolderClick = async (folderId: number) => {
           dispatch(pushToFolderIdStack(folderId)); 
        dispatch(setCurrentFolderId(folderId));
       dispatch(fetchFolders(folderId))
    };
    const fetchFileFolder = (idx:number)=>{
        dispatch(fetchFolders(idx))
        dispatch(fetchFile(idx))
    }

    useEffect(() => {
     fetchFileFolder(id);
    }, [id]);

    const folder1 = folders.data
    console.log("folder1",folder1)
    const files1=files.data
    return (
        <div className='flex flex-wrap  justify-evenly'>
            
            {folder1 && folder1.length > 0 &&
                folder1.map((item: folderprops) => {
                    return (
                        <Link key={item.Folder_id} to={`/${item.Folder_id}`} className="flex flex-col w-1/4 md:w-1/6 lg:1/12  items-center p-2  rounded-md cursor-pointer " onClick={() => handleFolderClick(item.Folder_id)} >
                            <div className="flex items-center justify-center  rounded-full " >
                                <img className='h-16 w-16' src={emptyfolder} alt="" />
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
                        <Link key={item.file_id} to={item.path} className="flex flex-col w-1/4 md:w-1/6 gap-2 items-center p-2  rounded-md cursor-pointer "  target="_blank" >
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