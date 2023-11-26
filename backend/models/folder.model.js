const {DataTypes}=require("sequelize")
const sequelize=require("../database/datasource")
const Folder=sequelize.define("Folders",{
 Folder_id:{
    type:DataTypes.INTEGER,
    primaryKey:true,
    allowNull:false,
    autoIncrement:true
 },
 Folder_Name:{
    type:DataTypes.STRING,
    allowNull:false
 },
 parent_id:{
    type:DataTypes.INTEGER,
    allowNull:true,
    onDelete: 'CASCADE', 
    references: {
      model: 'Folders', 
      key: 'Folder_id'
    }
 }
    
})
Folder.hasMany(Folder, { as: 'children', foreignKey: 'parent_id', onDelete: 'CASCADE' });
Folder.belongsTo(Folder, { as: 'parent', foreignKey: 'parent_id' });
module.exports=Folder