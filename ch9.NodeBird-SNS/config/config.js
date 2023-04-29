const dotenv = require("dotenv");
dotenv.config();

module.exports = {
  development: {
    username: "jaehyeon",
    password: process.env.DB_PASSWORD,
    database: "nodebook_nodebird",
    host: "127.0.0.1",
    dialect: "mysql",
  },
  test: {
    username: "jaehyeon",
    password: process.env.DB_PASSWORD,
    database: "nodebook_nodebird_test",
    host: "127.0.0.1",
    dialect: "mysql",
  },
  production: {
    username: "jaehyeon",
    password: process.env.DB_PASSWORD,
    database: "nodebook_nodebird_production",
    host: "127.0.0.1",
    dialect: "mysql",
  },
};
