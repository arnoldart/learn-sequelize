'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Anak_kedua extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Keluarga }) {
      this.hasMany(Keluarga, { foreignKey: 'userId' })
    }

    toJSON() {
      return { ...this.get(), id: undefined }
    }
  };
  Anak_kedua.init({
    rm_anak_kedua: DataTypes.INTEGER,
    anak_kedua: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Anak_kedua',
  });
  return Anak_kedua;
};