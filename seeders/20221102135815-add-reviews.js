'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.bulkInsert('reviews', [{
       title: 'PHP AVANZADO',
       text: 'Bueno curso',
       rating: '573172632842',
       user_id: 1,
       bootcamp_id: 1
     },
     {
      title: 'El curso de Spring',
      text: 'Muy bueno',
      rating: '573172632842',
      user_id: 2,
      bootcamp_id: 2
    },
    {
      title: 'Opinión de c#',
      text: 'Mejorable',
      rating: '573172345345',
      user_id: 3,
      bootcamp_id: 3
    }
   ], {});
 },

 async down (queryInterface, Sequelize) {

     await queryInterface.bulkDelete('reviews', null, {});

 }

};