'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Keluarga extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Anak_pertama, Anak_kedua }) {
      this.belongsTo(Anak_pertama, { foreignKey: 'userId' }),
      this.belongsTo(Anak_kedua, { foreignKey: 'userId' })
    }

    toJSON() {
      return { ...this.get(), id: undefined, userId: undefined }
    }
  };
  Keluarga.init({
    nomer_rm_kepala_keluarga: DataTypes.INTEGER,
    kepala_keluarga: DataTypes.STRING,
    nomer_rm_istri: DataTypes.INTEGER,
    istri: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Keluarga',
  });
  return Keluarga;
};