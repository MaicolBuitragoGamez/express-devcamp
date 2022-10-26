'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.bulkInsert('bootcamps', [{
      name: 'Maicol',
      description: 'asd',
      website: 'https://google.com/',
      phone: '3123155542',
      average_rating: '1',
      average_cost: '10'
     }], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('bootcamps', null, {});
  }
};
