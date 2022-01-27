const { Sequelize } = require("sequelize");

const db = new Sequelize("postgres://localhost:5432/musicschool");

const Network = db.define("network", {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
    channel: {
      type: Sequelize.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
  },
});

const Show = db.define("show", {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
    rating: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
  },
});

const Genre = db.define("genre", {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
});

Network.hasMany(Show);

Show.belongsToMany(Genre, { through: "show_genre" });
Genre.belongsToMany(Show, { through: "show_genre" });

module.exports = {
  Network,
  Show,
  Genre,
  db,
};
