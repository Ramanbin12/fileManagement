const {insertFolderService,getFolderService,deleteFolderService,getParentFolderService}=require("../services/folderService")
const createFolderController=(req,res)=>{
    insertFolderService(req,res)
}
const getFolderController=(req,res)=>{
    getFolderService(req,res)
}
const deleteFolderController=(req,res)=>{
deleteFolderService(req,res)
}
const getParentFolderController=(req,res)=>{
    getParentFolderService(req,res)
}
module.exports={createFolderController,getFolderController,deleteFolderController,getParentFolderController}