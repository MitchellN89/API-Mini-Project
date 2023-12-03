const { DataTypes, Model } = require("sequelize");
let dbConnect = require("../dbConnect");
const sequelizeInstance = dbConnect.Sequelize;

class User extends Model {}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING(80),
      allowNull: false,
    },
    username: {
      type: DataTypes.STRING(80),
      allowNull: false,
      unique: true,
    },
    email: {
      type: DataTypes.STRING(100),
      allowNull: false,
      unique: true,
    },
    phone: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    website: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    addressStreet: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    addressSuite: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    addressCity: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    addressZipcode: {
      type: DataTypes.STRING(20),
      allowNull: true,
    },
    geoLat: {
      type: DataTypes.DECIMAL(7, 4),
      allowNull: true,
    },
    geoLng: {
      type: DataTypes.DECIMAL(7, 4),
      allowNull: true,
    },
    companyName: {
      type: DataTypes.STRING(80),
      allowNull: true,
    },
    companyCatchPhrase: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    companyBS: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
  },
  {
    sequelize: sequelizeInstance,
    modelName: "users", //use lowercase plural format
    timestamps: false,
    freezeTableName: true,
  }
);

module.exports = User;
