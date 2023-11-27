const Folder=require("../models/folder.model")
const file=require("../models/upload.model")
const sequelize=require("../database/datasource")
const to=require("await-to-js").to

const getFolders=async(id)=>{
    console.log("id",id)
    if(id){
       return await Folder.findAll({where: { parent_id:id }         
        // include: [{ model: file, where: { folder_id:id } }]
       })

    // const [error,data1]=await to (file.findAll({where:{folder_id:id}}))
    // const [error1,data2]=await to (Folder.findAll({where:{parent_id:id}}))
    // const data=[data1,data2]
    // return data;

    // const data1=await (file.findAll({where:{folder_id:id}}))
    // const data2=await (Folder.findAll({where:{parent_id:id}}))
    // const data=[data1,data2]
    // return data;
    // console.log("running")
    // console.log(data1,data2)

}
    // if(id){
    //     const sqlquery=`SELECT 'file' as type, file_id, file_name, file_size FROM Files WHERE folder_id =${id} UNION SELECT 'folder' as type, Folder_id, Folder_Name, parent_id FROM Folders  WHERE parent_id = ${id};`
    //     const data= await sequelize.query(sqlquery,{type:sequelize.QueryTypes.select})
    //     return data[0]
    // }
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
// const getParentFolders=async(id)=>{
//   return await Folder.findAll({where:{Folder_id:id}})
// }
const getParentFolders=async(id)=>{
    return await Folder.findAll({where:{Folder_id:id}})
  }
module.exports={getFolders,createFolder,deleteFolder,getParentFolders}