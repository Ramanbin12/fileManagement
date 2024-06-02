import { upload } from "../../assests"
import React, { useState ,useEffect} from "react"
import axios from 'axios'
import { setCurrentFolderId, fetchFileSuccess, } from "../../redux/slices/folderSlice";
import { useAppSelector, useAppDispatch } from "../../hooks";
import { toast } from "react-toastify";
import { YourResponseType } from "../../utils/type";
import { Button } from "@mui/material";
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

const ComponentUploadButton = () => {
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const fileInputRef = React.createRef<HTMLInputElement>();
    const id = useAppSelector((state) => state.folders.currentFolderId)
    const dispatch = useAppDispatch()
    const handleFileChange = async(event: React.ChangeEvent<HTMLInputElement>) => {
        const files = event.target.files;
        if (files && files.length > 0) {
            setSelectedFile(files[0]);
            await handleFileUpload(files[0]);
        }
    };
useEffect(()=>{
fetchFile(id)
},[id])
const fetchFile = async (id:number) => {
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
    const handleButtonClick = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };
    const id2 = useAppSelector((state) => state.folders.currentFolderId)

    const handleFileUpload = async (file:File) => {
        try {
            const fileSizeInMB = file.size / (1024 * 1024);
            if (fileSizeInMB > 10) {
                toast.error("File size should be less than 10 MB");
                return;
            }
            const forbiddenExtensions=['.wav', '.exe', '.api', '.ios', '.js']
            const fileExt=file.name.slice(file.name.lastIndexOf("."))
            if(forbiddenExtensions.includes(`${fileExt}`)){
                toast.error("File type is not allowed");
                return;
            }
            console.log("fileExtension",fileExt)
            const formData = new FormData();
           
            formData.append("random", file);

            try {
                const response = await axios.post<YourResponseType>('http://localhost:3001/uploadFile', formData, {
                    params: { id: id },
                    headers: {
                        'Content-Type': 'multipart/form-data', 
                    },
                });
                

                fetchFile(id)
                toast.success("File uploaded successfully")
                const data = response.data;
                
                if (data.error) {
                    toast.error(data.message)
                }

                console.log("response", response.data)

            } catch (error) {
                console.error('Error creating folder:', error);
            }
            setSelectedFile(null);
        }
        catch (error) {
            console.error("Error uploading file:", error);
        }
    };
    return (
        <>
            <div className="inline-flex items-center   gap-2 p-3 rounded-lg cursor-pointer" onClick={handleButtonClick}>

                <Button variant="contained" style={{ backgroundColor: 'white', color: 'blue' }}
                    endIcon={<CloudUploadIcon />}>
                    Upload File
                </Button>
            </div>
            <input
                type="file"
                ref={fileInputRef}
                style={{ display: 'none' }}
                onChange={handleFileChange}
            />
      
        </>
    )
}
export default ComponentUploadButton