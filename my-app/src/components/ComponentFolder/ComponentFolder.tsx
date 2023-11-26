import FolderIcon from '@mui/icons-material/Folder';
import React,{useEffect} from "react"
import {emptyfolder} from '../../assests';
import { folderNameProps, folderprops } from '../../utils/type';
import { useAppDispatch,useAppSelector } from '../../hooks';
import axios from "axios"
import { fetchFoldersSuccess } from '../../redux/slices/folderSlice';
const ComponentFolder=()=>{
    const dispatch = useAppDispatch();
  const folders = useAppSelector((state) => state.folders.folders);
  const id=useAppSelector((state)=>state.folders.currentFolderId)
  console.log("currentfolderId",id)
  useEffect(() => {
    const fetchFolders = async () => {
      try {

        if (id !== undefined) {
            const response = await axios.get('http://localhost:3001/getFolders', {
              params: { id: id }
            });
            console.log("response.data",response.data)
            await dispatch(fetchFoldersSuccess(response.data));
          
          } else {
            console.error('Invalid id value. Please provide a valid id.');
          }
      } catch (error) {
        console.error('Error fetching folders:', error);
      }
    };

    fetchFolders();
    const interval=setInterval(fetchFolders,5000);
    // return()=>{
    //     clearInterval(interval)
    // }
  }, [dispatch,id]);
  console.log("gggggggggggggggg",folders.data)
  const folder1=folders.data
  console.log("folder1",folder1)
    return(
        <div className='flex-col gap-4'>

        {folder1 &&
          folder1.map((item:folderprops)=>{
                return(
                <div key={item.Folder_id} className="flex flex-col w-1/4 md:w-1/12 items-center p-2 bg-white hover:bg-gray-100 rounded-md cursor-pointer ">
                    <div className="flex items-center justify-center  rounded-full " >
                    <img className='' src={emptyfolder} alt="" />
                    </div>
                    <div className="text-gray-800 font-medium">{item.Folder_Name}</div>
                    {/* <div className="text-gray-500 text-sm">folder count</div> */}
                </div>
                )
            })
        }


        </div>
    )
}
export default ComponentFolder