const { DataTypes, Model } = require("sequelize");
let dbConnect = require("../dbConnect");
const sequelizeInstance = dbConnect.Sequelize;

class Photo extends Model {}

Photo.init(
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
    url: {
      type: DataTypes.STRING(),
      allowNull: false,
    },
    thumbnailUrl: {
      type: DataTypes.STRING(),
      allowNull: true,
    },
  },
  {
    sequelize: sequelizeInstance,
    modelName: "photos", //use lowercase plural format
    timestamps: false,
    freezeTableName: true,
  }
);

module.exports = Photo;
