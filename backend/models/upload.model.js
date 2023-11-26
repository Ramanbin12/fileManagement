const {DataTypes}=require("sequelize")
const sequelize=require("../database/datasource")
const Folder = require("./folder.model")
const file=sequelize.define("File",{
 file_id:{
    type:DataTypes.INTEGER,
    primaryKey:true,
    allowNull:false,
    autoIncrement:true
 },
 file_name:{
    type:DataTypes.STRING,
    allowNull:false
 },
file_size:{
    type:DataTypes.FLOAT,
    allowNull:false
}
    
})
file.belongsTo(Folder,{
    foreignKey:"folder_id",
    onDelete:"CASCADE"
})
module.exports=file