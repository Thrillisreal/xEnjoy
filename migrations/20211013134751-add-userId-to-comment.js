'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.addColumn('comments','userId',{
      type: Sequelize.INTEGER,
      onDelete:'CASCADE',
      references:{
      model:'users',
      key:'id'
  }
  })
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('comments','userId',{
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
