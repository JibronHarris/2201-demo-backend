const { Sequelize } = require("sequelize");

const db = new Sequelize("postgres://localhost:5432/musicschool");

module.exports = {
  db,
};
