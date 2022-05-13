'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

     await queryInterface.bulkInsert(
      "Todos",
      [
        {
          name: "Create Template Engine Material",
          description: "Template Engine with EJS",
          isDone: true,
          user: "Vanessa",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Learning JWT",
          description: "Create Boilerplate Express with JWT",
          isDone: false,
          user: "Eko",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Create challenge 7",
          isDone: false,
          user: "Agus",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Create weekly report",
          isDone: false,
          user: "Dwi Bagus",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Reading a book today",
          description: "Start with Why?",
          isDone: true,
          user: "Muklish",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Sleep earlier",
          isDone: false,
          user: "Avinska",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
