const {uploadFileService,deleteFileService}=require("../services/uploadService")
const upload=require("../multer")
const uploadFileController=(req,res)=>{


        const maxsize=10*1024*1024
          const { size } = req.file;
      
          if (size > maxsize) {
            return res.status(400).json({ error: 'File size exceeds the allowed limit (10MB)' });
          }
      
    uploadFileService(req,res)

}

const deleteFileController=(req,res)=>{
deleteFileService(req,res)
}
module.exports={uploadFileController,deleteFileController}