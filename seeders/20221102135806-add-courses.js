'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.bulkInsert('courses', [{
       title: 'Java Avanzado',
       description: 'Curso avanzado de JS - NodeJs',
       weeks: '10',
       enroll_cost:'1000',
       minimum_skill:'JS Basico',
       bootcamp_id: 1
     },
     {
      title: 'Java - SpringBoot',
      description: 'Inducción a SpringBoot',
      weeks: '2',
      enroll_cost:'500',
      minimum_skill:'Java avanzado',
      bootcamp_id: 2
    },
    {
      title: 'SQL - MySQL',
      description: 'Inducción a MYSQL',
      weeks: '4',
      enroll_cost:'5000',
      minimum_skill:'Conocimientos básicos de UML',
      bootcamp_id: 3
    }
   ], {});
 },

 async down (queryInterface, Sequelize) {

     await queryInterface.bulkDelete('courses', null, {});

 }
};