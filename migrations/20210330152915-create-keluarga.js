'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Keluargas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nomer_rm_kepala_keluarga: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      kepala_keluarga: {
        type: Sequelize.STRING
      },
      nomer_rm_istri: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      istri: {
        type: Sequelize.STRING
      },
      userId: {
        type: Sequelize.INTEGER,
        defaultValue: Sequelize.INTEGER,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Keluargas');
  }
};