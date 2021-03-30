'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Anak_pertama extends Model {
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
  Anak_pertama.init({
    rm_anak_pertama: DataTypes.INTEGER,
    anak_pertama: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Anak_pertama',
  });
  return Anak_pertama;
};