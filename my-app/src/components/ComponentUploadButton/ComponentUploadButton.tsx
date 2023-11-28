import { upload } from "../../assests"
import React, { useState } from "react"
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
    console.log("cccccccccccccc", id)
    const id2 = useAppSelector((state) => state.folders.currentFolderId)

    const fetchFile = async () => {
        try {
            console.log("inside fetch", id2)
            if (id !== undefined) {
                const response = await axios.get('http://localhost:3001/getFile', {
                    params: { id: id2 }
                });
                console.log("response.data", response.data)
                console.log("helllllllloooooo")
                await dispatch(fetchFileSuccess(response.data));
            } else {
                console.error('Invalid id value. Please provide a valid id.');
            }
        } catch (error) {
            console.error('Error fetching folders:', error);
        }
    };
    const handleFileUpload = async () => {
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
                const response = await axios.post<YourResponseType>('http://localhost:3001/uploadFile', formData, {
                    params: { id: id },
                    headers: {
                        'Content-Type': 'multipart/form-data', // Set the content type for FormData
                    },
                });
                // toast.error('Test error message');

                const data = response.data;
                // toast.error(data.error);
                // alert(data.error)
                if (data.error) {
                    // alert(data.message)
                    console.log("dddddddddddddddddeeeeeeeeeeeeeeeeeee", data.error)
                    toast.error(data.message)
                }

                console.log("response", response.data)

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
            {selectedFile && (
                <button onClick={handleFileUpload}>Upload Selected File</button>
            )}
        </>
    )
}
export default ComponentUploadButton