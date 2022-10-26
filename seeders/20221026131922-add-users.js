'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
  
     await queryInterface.bulkInsert('user', [{
      username: 'Maicol',
      email: 'mscorrea18@misena.edu.co',
      password: 'Sexo?'
     },
     {
      username: 'Enrique',
      email: 'Enrique19@misena.edu.co',
      password: 'Goku?'
     },
     {
      username: 'Nicolas',
      email: 'npGamez18@misena.edu.co',
      password: 'Gey?'
     }
    ], {});
    
  },

  async down (queryInterface, Sequelize) {

     await queryInterface.bulkDelete('user', null, {});
     
  }
};