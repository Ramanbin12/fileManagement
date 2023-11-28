var multer  = require('multer')
const responseHandler=require("./cors/ResponseHandler")
const {statusCode,messages}=require("./cors/constant")

const path=require("path")
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './uploads')
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname)
    }
})
const fileFilter = function (req, file, cb) {
  const forbiddenExtensions = ['.wav', '.exe', '.api', '.ios', '.js'];
  if (file.originalname) {

  const fileExtension = path.extname(file.originalname).toLowerCase();
  console.log("type",fileExtension)
  if (forbiddenExtensions.includes(fileExtension)) {
    return cb(new Error('File type is not allowed'), false);

    // const customError = messages.FILE_NOT_ALLOWED;
    // customError.status = statusCode.BAD_STATUS; 

    // return cb(customError, false);

  //   const data=responseHandler({
  //     statusCode:statusCode.BAD_STATUS,
  //     error:true,
  //     res,
  //     message:messages.FILE_NOT_ALLOWED
  // }) 
  // return cb(data,)
  }
  }
  cb(null, true);
};

// const fileFilter = function (req, res, file, cb) {
//   const forbiddenExtensions = ['.wav', '.exe', '.api', '.ios', '.js'];
  
//   if (file.originalname) {
//     const fileExtension = path.extname(file.originalname).toLowerCase();
//     console.log("type", fileExtension)

//     if (forbiddenExtensions.includes(fileExtension)) {
//       // Use your custom response handler here
//       const customResponse = responseHandler({
//         statusCode: statusCode.BAD_STATUS,
//         error: true,
//         res,
//         message: messages.FILE_NOT_ALLOWED
//       });

//       // Pass the custom response to the callback
//       return cb(customResponse, false);
//     }
//   }

//   // If no issues, pass null as the error and true as the result
//   cb(null, true);
// };
const maxSize = 10 * 1024 * 1024; 
const upload = multer({
  storage: storage,
  // limits: { fileSize: maxSize },
  fileFilter: fileFilter

}).single('random');



module.exports=upload