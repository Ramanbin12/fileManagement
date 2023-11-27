const {createFolder,getFolders,deleteFolder,getParentFolders}=require("../dblayer/folderquery")
const  responseHandler=require("../cors/ResponseHandler")
const to=require("await-to-js").to
const {statusCode,messages}=require("../cors/constant")
const insertFolderService=async(req,res)=>{
    const[error,data]=await to (createFolder(req,res))
    if(error){
        return await responseHandler({
            statusCode:statusCode.BAD_STATUS,
            error:true,
            res,
            message:error.message
        })
    }
    return await responseHandler({statusCode:statusCode.CREATED_STATUS,message:messages.INSERT_MESSAGE,res,data})
}
const getFolderService=async(req,res)=>{
    const id=req.query.id
    console.log("nnnnnnnnnnnnnnnnn",id)

    const[error,data]=await to (getFolders(id))
    if(error){
        return await responseHandler({
            statusCode:statusCode.BAD_STATUS,
            error:true,
            res,
            message:error.message
        })
    }
    return await responseHandler({statusCode:statusCode.CREATED_STATUS,message:messages.SELECT_MESSAGE,res,data})
}
const deleteFolderService=async(req,res)=>{
    const id=req.query.id
    const[error,data]=await to(deleteFolder(id))
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
const getParentFolderService=async(req,res)=>{
        const id=req.query.id
        console.log("nnnnnnnnnnnnnnnnn",id)
    
        const[error,data]=await to (getParentFolders(id))
        if(error){
            return await responseHandler({
                statusCode:statusCode.BAD_STATUS,
                error:true,
                res,
                message:error.message
            })
        }
        return await responseHandler({statusCode:statusCode.CREATED_STATUS,message:messages.SELECT_MESSAGE,res,data})
    }

module.exports={insertFolderService,getFolderService,deleteFolderService,getParentFolderService}