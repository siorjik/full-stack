module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users', [
      {
        firstName: 'nameFromSeed',
        lastName: 'nameFromSeed',
        email: 'emailFromSeed',
        login: 'loginFromSeed',
        password: 'passFromSeed',
        image: 'image',
      },
      {
        firstName: 'nameFromSeed',
        lastName: 'nameFromSeed',
        email: 'emailFromSeed',
        login: 'loginFromSeed',
        password: 'passFromSeed',
        image: 'image',
      }
    ]

    );
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', { email: 'emailFromSeed' })
  }
};