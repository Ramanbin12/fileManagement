const {uploadFileService,deleteFileService,getFileService}=require("../services/uploadService")
const upload=require("../multer")
const responseHandler=require("../cors/ResponseHandler")
const { messages, statusCode } = require("../cors/constant")
const uploadFileController=(req,res)=>{


        const maxsize=10*1024*1024
          const { size } = req.file;
      
          // if (size > maxsize) {
          //   return res.status(400).json({ error: 'File size exceeds the allowed limit (10MB)' });
          // }
          if (size > maxsize) {
            return responseHandler({
              statusCode:statusCode.BAD_STATUS,
              error:true,
              res,
              message:messages.FILE_SIZE_EXCEEDS
          })          }
          // upload(req, res, (err) => {
          //   if (err instanceof multer.MulterError) {
          //     // MulterError is a Multer-specific error
          //     if (err.code === 'LIMIT_FILE_SIZE') {
          //       // File too large error
          //       return res.status(400).json({ error: 'File too large. Max size is 5MB.' });
          //     }
          //   } else if (err) {
          //     // Other unexpected errors
          //     console.error(err);
          //     return res.status(500).json({ error: 'Internal server error' });
          //   }
          // })
      
    uploadFileService(req,res)

}

const deleteFileController=(req,res)=>{
deleteFileService(req,res)
}

const getFileController=async(req,res)=>{
  return await getFileService(req,res)
}
module.exports={uploadFileController,deleteFileController,getFileController}