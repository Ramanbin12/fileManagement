const statusCode={
    CREATED_STATUS:200,
    BAD_STATUS:400,
    OK_STATUS:200,
    PAGE_NOT_FOUND:404
}
const messages={
    INSERT_MESSAGE:"Folder Created Successfully",
    UPDATE_MESSAGE:"updated Successfully",
    DELETE_MESSAGE:"deleted Successfully",
     SELECT_MESSAGE:"selected Successfully",
    ALREADY_EXISTS:"already exists kindly change your folder name",
    INCORRECT_FORMAT:"Input data is not in the correct format." ,
    UPLOAD_MESSAGE:" uploaded successfully",
    FILE_NOT_ALLOWED:"File type is not allowed",
    FILE_SIZE_EXCEEDS:"Fle size should not be graeter than 10Mb"
}
module.exports={statusCode,messages}