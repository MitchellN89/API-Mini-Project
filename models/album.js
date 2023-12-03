const { DataTypes, Model } = require("sequelize");
let dbConnect = require("../dbConnect");
const sequelizeInstance = dbConnect.Sequelize;

class Album extends Model {}

Album.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
  },
  {
    sequelize: sequelizeInstance,
    modelName: "albums", //use lowercase plural format
    timestamps: false,
    freezeTableName: true,
  }
);

module.exports = Album;
