const express=require("express")
const cors=require("cors")
const bodyparser=require("body-parser")
const app=express()
module.exports=app
app.use(cors())
// app.use(cors({
//     origin: 'http://localhost:3000/',
//   }));
app.use(bodyparser.json())
app.use(express.static(__dirname + '/public'));
app.use('/uploadFile', express.static('uploads'));

require('./database/datasource')
require('./models/folder.model')
require('./models/upload.model')
require('./router/folderroute')
require('./router/uploadfileroute')

app.listen(3001,()=>{
    console.log("server connected")
})