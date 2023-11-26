const file=require("../models/upload.model")

const uploadFile=async({file_name,file_size,folder_id})=>{
 console.log(file_name,file_size,folder_id)
    return await file.create({file_name,file_size,folder_id});
}
const deleteFile=async(id)=>{
    return await file.destroy({where:{file_id:id}})
}
module.exports={uploadFile,deleteFile}