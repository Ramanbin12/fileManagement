const {uploadFileController,deleteFileController}=require('../controllers/uploadController')
const app=require("../index")
const uploadvalidate=require('../multer')
const uploadMiddleware=require("../multer")
// app.post("/uploadFile",upload.single('random'),uploadFileController)
app.post("/uploadFile",uploadMiddleware,uploadFileController)

app.delete("/deletefile",deleteFileController)
