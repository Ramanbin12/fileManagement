const {insertFolderService,getFolderService,deleteFolderService}=require("../services/folderService")
const createFolderController=(req,res)=>{
    insertFolderService(req,res)
}
const getFolderController=(req,res)=>{
    getFolderService(req,res)
}
const deleteFolderController=(req,res)=>{
deleteFolderService(req,res)
}
module.exports={createFolderController,getFolderController,deleteFolderController}