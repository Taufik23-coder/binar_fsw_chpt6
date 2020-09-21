'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
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
      'user_game',
      [{
          id: '9b03e274-fe1d-4837-82e4-a6df5c328d24',
          username: 'harrypotter',
          password: '123456789aa',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: '2170d3a8-394d-4c3e-8952-6f3994226620',
          username: 'ron.weasley',
          password: 'binaracademyoye',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 'e6f2dd52-12c4-4684-bd42-225264eb7847',
          username: 'hermione',
          password: 'akusayangibu12',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ], {}
    )
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('user_game', null, {})
  }
};