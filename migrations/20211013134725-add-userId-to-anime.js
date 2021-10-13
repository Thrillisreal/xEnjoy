'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.addColumn('animes','userId',{
      type: Sequelize.INTEGER,
      onDelete:'CASCADE',
      references:{
      model:'users',
      key:'id'
  }
  })
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('animes','userId',{
      type: Sequelize.INTEGER,
      onDelete:'CASCADE',
      references:{
      model:'users',
      key:'id'
      }
    }
  )
  }
};
