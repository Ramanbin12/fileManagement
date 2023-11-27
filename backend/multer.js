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
  const fileExtension = path.extname(file.originalname).toLowerCase();
  console.log("type",fileExtension)
  if (forbiddenExtensions.includes(fileExtension)) {
    // return cb(new Error('File type is not allowed'), false);

    const customError = messages.FILE_NOT_ALLOWED;
    customError.status = statusCode.BAD_STATUS; 

    return cb(customError, false);

  }

  cb(null, true);
};
const maxSize = 10 * 1024 * 1024; 
const upload = multer({
  storage: storage,
  limits: { fileSize: maxSize },
  fileFilter: fileFilter

}).single('random');

// const logStoragePath = (req, res, next) => {
//   upload(req, res, (err) => {
//     if (err instanceof multer.MulterError) {
//       console.error('Multer error:', err);
//     } else if (err) {
//       console.error('Unknown error:', err);
//     } else {
//       console.log('Storage file path:', path.resolve('./uploads', req.file.filename));
//     }
//     next();
//   });
// };

module.exports=upload