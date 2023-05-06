const dotenv = require("dotenv");
dotenv.config();

module.exports = {
  development: {
    username: "jaehyeon",
    password: process.env.DB_PASSWORD,
    database: "node_auction",
    host: "127.0.0.1",
    dialect: "mysql",
  },
  test: {
    username: "jaehyeon",
    password: process.env.DB_PASSWORD,
    database: "node_auction_test",
    host: "127.0.0.1",
    dialect: "mysql",
  },
  production: {
    username: "jaehyeon",
    password: process.env.DB_PASSWORD,
    database: "node_auction_production",
    host: "127.0.0.1",
    dialect: "mysql",
  },
};
