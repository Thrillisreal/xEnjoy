'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.addColumn('animes','img',{
      type: Sequelize.STRING
  })
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('animes','img',{
      type: Sequelize.STRING
    }
  )
  }
};