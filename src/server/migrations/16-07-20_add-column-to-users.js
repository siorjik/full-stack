module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('users', 'image',
      {
        "type": Sequelize.STRING,
        "allowNull": true,
      }
    );
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('image');
  }
};