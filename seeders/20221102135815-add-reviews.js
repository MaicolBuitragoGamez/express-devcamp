'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.bulkInsert('reviews', [{
       title: 'PHP AVANZADO',
       text: 'Bueno curso',
       rating: '573172632842'
     },
     {
      title: 'El curso de Spring',
      text: 'Muy bueno',
      rating: '573172632842'
    },
    {
      title: 'Opinión de c#',
      text: 'Mejorable',
      rating: '573172345345'
    },
    {
      title: 'Opinión de Spring#',
      text: 'Bien',
      rating: '3462736432'
    }
   ], {});
 },

 async down (queryInterface, Sequelize) {

     await queryInterface.bulkDelete('reviews', null, {});

 }

};