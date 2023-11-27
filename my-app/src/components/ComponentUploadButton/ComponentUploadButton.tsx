import { upload } from "../../assests"
import React,{useState} from "react"
import axios from 'axios'
import { setCurrentFolderId } from "../../redux/slices/folderSlice";
import { useAppSelector } from "../../hooks";
const ComponentUploadButton=()=>{
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const fileInputRef = React.createRef<HTMLInputElement>();
    const id=useAppSelector((state)=>state.folders.currentFolderId)
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      setSelectedFile(files[0]);
    }
  };

  const handleButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };
console.log("cccccccccccccc",id)
  const handleFileUpload = async() => {
    try {
        if (!selectedFile) {
          console.error("No file selected");
          return;
        }
  
        // Create a FormData object
        const formData = new FormData();
  
        // Append the selected file to the FormData object
        formData.append("random", selectedFile);
  
    try {
        const response = await axios.post('http://localhost:3001/uploadFile',formData, {
                params: { id: id },
                headers: {
                    'Content-Type': 'multipart/form-data', // Set the content type for FormData
                  },
        });
        console.log("response",response.data)
          
        // await dispatch(createFolderSuccess(response.data));
      } catch (error) {
        console.error('Error creating folder:', error);
      }
    setSelectedFile(null);
  }
 catch (error) {
    console.error("Error uploading file:", error);
  }
};
return(
    <>
        <div className="inline-flex items-center  p-3 gap-2 bg-gray-200 rounded-lg cursor-pointer" onClick={handleButtonClick}>
        <img className="h-8" src={upload} alt=""/>
        <div className="">Upload File</div>
    </div>
    <input
        type="file"
        ref={fileInputRef}
        style={{ display: 'none' }}
        onChange={handleFileChange}
      />
      {/* Button to trigger file upload */}
      {selectedFile && (
        <button onClick={handleFileUpload}>Upload Selected File</button>
      )}
    </>
)
}
export default ComponentUploadButton