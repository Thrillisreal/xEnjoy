'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Anime extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Anime.belongsTo(models.User, { foreignKey: 'userId' })

      Anime.hasMany(models.Comment, { foreignKey: 'animeId' })
    }
  };
  anime.init({
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    userId: {
    type: Sequelize.INTEGER,
    onDelete: 'CASCADE',
    references: {
      model: 'users',
      key: 'id'
    }
  }
},
   {
    sequelize,
    modelName: 'Anime',
    tableName: 'animes'
  }
  );
  return Anime;
};