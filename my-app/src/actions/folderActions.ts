import axios from 'axios';
import { createFolderSuccess,fetchFoldersSuccess} from '../redux/slices/folderSlice';
import { AppDispatch } from '../utils/type';
export const createFolder = (folderName:string, currentFolderId:number|null) => async (dispatch:AppDispatch) => {
  try {
    const response = await axios.post('http://localhost:3001/createFolder', {
      Folder_Name:folderName,
      parent_id:currentFolderId,
    });
    console.log("response",response.data)

    await dispatch(createFolderSuccess(response.data));
  } catch (error) {
    console.error('Error creating folder:', error);
  }
};

