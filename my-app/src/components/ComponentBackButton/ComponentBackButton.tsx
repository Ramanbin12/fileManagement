// import { useNavigate ,useLocation} from "react-router-dom"
// import { setCurrentFolderId ,popFromFolderIdStack} from "../../redux/slices/folderSlice";
// import { useAppDispatch,useAppSelector } from "../../hooks";
// const ComponentBackButton=()=>{
//     const navigate=useNavigate()
//     const location = useLocation();
//     const dispatch=useAppDispatch()
//     const handleBackClick = () => {

//         dispatch(popFromFolderIdStack());
//         const previousFolderId = useAppSelector((state) => state.folders.folderIdStack.slice(-1)[0]);
//         dispatch(setCurrentFolderId(previousFolderId || null));

//         // dispatch(setCurrentFolderId(null));
//         navigate(-1);
//       };
//     return(
//         <div className="p-4 bg-white rounded"  onClick={handleBackClick}>Back</div>
//     )
// }
// export default ComponentBackButton






import React, { useEffect } from "react";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import { setCurrentFolderId, popFromFolderIdStack ,fetchFoldersSuccess} from "../../redux/slices/folderSlice";
import { useAppDispatch, useAppSelector } from "../../hooks";
import axios from "axios";
const ComponentBackButton = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useAppDispatch();
  const pfi=useAppSelector((state) => state.folders.folderIdStack)
  const iiid=useAppSelector((state)=>state.folders.currentfolderId)
  const params=useParams()
//   console.log("beforearray",pfi)
//   const lastfolderid=useAppSelector((state)=>state.folders.folderIdStack[pfi])
let folderId:number
  const handleBackClick = async() => {
    // folderId = parseInt(params.id, 10);
    // console.log("folderId",typeof(folderId))
    // const folderIdString: string | undefined = params.id;

// if (folderIdString !== undefined) {
//   folderId= parseInt(folderIdString, 10);
//   console.log("folderId", folderId); // Will be "number"
//   if(folderId){
//       getparentid()
//   }
//   else{
//        dispatch(setCurrentFolderId(null));
//        console.log("else",iiid)
// fetchFolders()

//   }
// } else {
//   console.error('params.id is undefined');
// }
    // dispatch(popFromFolderIdStack());
    // console.log("after array",pfi)
    // console.log("iiiid",iiid)
    // console.log("array",pfi)
    //     // const previousFolderId = pfi;
        // const Index=pfi.length-1
        // const lastElement=pfi[Index]
        // console.log("lastElement",lastElement)
        // if(lastElement){
        //     console.log("currentbackbutton",lastElement)
        //     dispatch(setCurrentFolderId( lastElement));
        //     fetchFolders()

        // }
        // else{
        // dispatch(setCurrentFolderId( null));
        // }
    dispatch(setCurrentFolderId(null));

     navigate(-1);
  };

  // Function to handle setting the current folder ID
//   const handleSetCurrentFolderId = () => {
//     const previousFolderId = pfi;
//     dispatch(setCurrentFolderId(previousFolderId || null));
//   };

//   useEffect(() => {
//     handleSetCurrentFolderId();
//     fetchFolders()

//   }, []); // Empty dependency array ensures this effect runs only once, similar to componentDidMount
const getparentid=async()=>{
    try{
       const response=await axios.get('http://localhost:3001/getParent',{
        params:{id:folderId}
       })
       console.log("rrrrrrrrrrrr",response.data)
       console.log("response.data.parent_id",response.data.parent_id)

       await dispatch(fetchFoldersSuccess(response.data));
    }
    catch(err){
        console.log(err)
    }
}

 const fetchFolders = async () => {
      try {

        if (iiid !== undefined) {
           const response=await axios.get('http://localhost:3001/getFolders', {
              params: { id: iiid }
            });
            console.log("response.data",response.data)
            console.log("ggggggggggggggggggggggggggggggggggggggggggg")
            await dispatch(fetchFoldersSuccess(response.data));
          } else {
            console.error('Invalid id value. Please provide a valid id.');
          }
      } catch (error) {
        console.error('Error fetching folders:', error);
      }
    };
  return (
    <button className="p-4 bg-white rounded cursor-pointer" onClick={handleBackClick}>
      Go Back
    </button>
  );
};

export default ComponentBackButton;
