'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.addColumn('comments','animeId',{
      type: Sequelize.INTEGER,
      onDelete:'CASCADE',
      references:{
      model:'animes',
      key:'id'
  }
  })
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('comments','animeId',{
      type: Sequelize.INTEGER,
      onDelete:'CASCADE',
      references:{
      model:'animes',
      key:'id'
      }
    }
  )
  }
};
