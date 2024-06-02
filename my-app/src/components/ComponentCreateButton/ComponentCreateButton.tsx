import React,{useState} from "react"
import CloseIcon from '@mui/icons-material/Close';
import { useAppDispatch, useAppSelector } from "../../hooks";
import { createFolder,fetchFolders } from "../../actions/folderActions";
import CreateNewFolderIcon from '@mui/icons-material/CreateNewFolder';
import { fetchFoldersSuccess } from "../../redux/slices/folderSlice";
import axios from "axios"
import { toast } from "react-toastify";
import { Button } from "@mui/material";
const ComponentCreateButton=()=>{
  const [showPopup, setShowPopup] = useState(false);
  const [folderName, setFolderName] = useState("");

  const dispatch = useAppDispatch();
  const folders = useAppSelector((state) => state.folders.list);
  const currentFolderId = useAppSelector((state) => state.folders.currentFolderId);

  const handleCreateFolder = async() => {
    if (!folderName.trim()) {
      toast.error("Please enter valid folder name")
    } else {
    setShowPopup(false);
    setFolderName("");
    await dispatch(createFolder(folderName, currentFolderId));
    await dispatch(fetchFolders(currentFolderId))
    toast.success("folder created successfully")
    
    }
  }

  const handlecrossbutton=()=>{
    setShowPopup(true)
    setFolderName("")
  }
  return(
    <>
    <div className="inline-flex items-center  md:p-3 md:gap-2 rounded-lg cursor-pointer" onClick={handlecrossbutton}>
        
        <Button variant="contained" style={{ backgroundColor: 'white', color: 'blue' }}
 endIcon={<CreateNewFolderIcon/>}>
  Create Folder
</Button>
    </div>
   
 
    {showPopup && (
      <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center">
        <div className=" bg-gray-100 w-1/2 sm:w-1/3 space-y-4 bg-white p-4 rounded shadow">
         
          <div className="flex items-center justify-between" >
            <h1>Create Folder</h1>
            <div className="cursor-pointer" onClick={() => setShowPopup(false)}>
           <CloseIcon/> </div>
          </div>
          <hr/>
          <div>
          <input
           className=" rounded-sm  ring ring-blue-300 h-[30px] bg-blue-100 outline-none w-full "
            type="text"
            id="folderName"
            value={folderName}
            onChange={(e) => setFolderName(e.target.value)}
          />
          </div>
          <div className="flex w-full justify-end">
          <button  className="bg-blue-800 text-white px-4 py-1 rounded-sm" onClick={handleCreateFolder}>Save</button>
          </div>
        </div>
      </div>
      
    )}
    </>
  )
}
export default ComponentCreateButton