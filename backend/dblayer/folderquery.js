const Folder=require("../models/folder.model")
const sequelize=require("../database/datasource")
const getFolders=async(id)=>{
    console.log("id",id)
    if(id){
       return await Folder.findAll({where: { parent_id:id }})
    }
    else{
       const sqlquery= 'select * from Folders where parent_id IS null' ;
        const data= await sequelize.query(sqlquery,{type:sequelize.QueryTypes.select})
        // console.log("dataaaaaaaaaaaaaaaaaa",data)
        return data[0]
    }
}
const createFolder=async(req,res)=>{
    const {Folder_id,Folder_Name,parent_id}=req.body
    console.log("Folder_id,Folder_Name,parent_id", Folder_id,Folder_Name,parent_id)

    return await Folder.create(req.body)
}
const deleteFolder=async(id)=>{
    return await Folder.destroy({where:{Folder_id:id}})
}
module.exports={getFolders,createFolder,deleteFolder}