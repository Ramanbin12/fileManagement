const {uploadFile,deleteFile}=require("../dblayer/uploadfilequery")
const  responseHandler=require("../cors/ResponseHandler")
const to=require("await-to-js").to
const {statusCode,messages}=require("../cors/constant")
const uploadFileService=async(req,res)=>{
    const folder_id=req.query?.id??""
    const size=req.file.size;
    file_size=(size/(1024*1024)).toFixed(2)
    console.log("filesize",file_size)
    const file_name=req.file.filename
    const[error,data]=await to (uploadFile({file_name,file_size,folder_id}))
    if(error){
        return await responseHandler({
            statusCode:statusCode.BAD_STATUS,
            error:true,
            res,
            message:error.message
        })
    }
    return await responseHandler({statusCode:statusCode.CREATED_STATUS,message:messages.UPLOAD_MESSAGE,res,data})
}

const deleteFileService=async(req,res)=>{
    console.log("ffffffffff")
    const id=req.query.id
    const[error,data]=await to(deleteFile(id))
    if(error){
        return await responseHandler({
            statusCode:statusCode.BAD_STATUS,
            error:true,
            res,
            message:error.message
        })
    }
    return await responseHandler({statusCode:statusCode.OK_STATUS,message:messages.DELETE_MESSAGE,res,data})

}

module.exports={uploadFileService,deleteFileService}