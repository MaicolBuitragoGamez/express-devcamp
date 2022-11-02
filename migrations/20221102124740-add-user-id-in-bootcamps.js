'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    //Crear la columna 'user_id' FK con users
    //addColumn: parametros:
    //    1. La tabla en la cual poner la columna
    //    2. El nombre de la nueva columna
    await queryInterface.addColumn('bootcamps',
      'user_id',
      {
        type: Sequelize.INTEGER,
        references: {
          model: 'users',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
      }
    )
  },
  async down(queryInterface, Sequelize) {
    //Método remove Column
    //Parametros: 1. La tabla de donde se va a remover la
    //            2. La columna a eliminar
    await queryInterface.removeColumn('bootcamps', 'user_id')
  }
};

