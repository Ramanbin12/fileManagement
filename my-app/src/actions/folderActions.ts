import axios from 'axios';
import { createFolderSuccess,fetchFoldersSuccess,fetchFileSuccess,setCurrentFolderId} from '../redux/slices/folderSlice';
import { AppDispatch } from '../utils/type';
import { useAppSelector } from '../hooks';
// const currentFolderId=useAppSelector((state)=>state.folders.currentFolderId)

export const createFolder = (folderName:string, currentFolderId:number|null) => async (dispatch:AppDispatch) => {
  try {
    const response = await axios.post('http://localhost:3001/createFolder', {
      Folder_Name:folderName,
      parent_id:currentFolderId,
    });
    console.log("response",response.data)

    await dispatch(createFolderSuccess(response.data));
    // await dispatch (fetchFoldersSuccess(response.data))
  } catch (error) {
    console.error('Error creating folder:', error);
  }
};


export const fetchFolders = (currentFolderId:number|null)=>async(dispatch:AppDispatch) => {
  try {
    console.log("helllllloooo")
    if (currentFolderId !== undefined) {
       const response=await axios.get('http://localhost:3001/getFolders', {
          params: { id: currentFolderId}
        });
        console.log("response.data",response.data)
        await dispatch(fetchFoldersSuccess(response.data));
        
      } else {
        dispatch(setCurrentFolderId(null));

        console.error('Invalid id value. Please provide a valid id.');
      }
  } catch (error) {
    console.error('Error fetching folders:', error);
  }
};


export const fetchFile =(id:number)=>async(dispatch:AppDispatch) => {
  try {
      if (id !== undefined) {
          const response = await axios.get('http://localhost:3001/getFile', {
              params: { id: id }
          });
          await dispatch(fetchFileSuccess(response.data));
      } else {
          console.error('Invalid id value. Please provide a valid id.');
      }
  } catch (error) {
      console.error('Error fetching folders:', error);
  }
};