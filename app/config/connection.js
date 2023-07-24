const mysql = require('mysql2');
const dotenv = require('dotenv');
const { Sequelize } = require('sequelize');
const dbConfig = require("../config/db.config.js");

dotenv.config();


const sequelize = new Sequelize("heroku_2cd5405f4dcc3cc", "bd4a4c434254c5", "e691b6a1", {
    host: "us-cdbr-east-06.cleardb.net",
    dialect: "mysql",
    operatorsAliases: false,

    pool: {
      max: dbConfig.pool.max,
      min: dbConfig.pool.min,
      acquire: dbConfig.pool.acquire,
      idle: dbConfig.pool.idle
    }
});

console.log(process.env.HOST);


module.exports = { sequelize };

/*
      HOST: "us-cdbr-east-06.cleardb.net",
    USER: "bd4a4c434254c5",
    PASSWORD: "e691b6a1",
    DB: "heroku_2cd5405f4dcc3cc"




    
    const sequelize = new Sequelize(process.env.DB_DATABASE, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.HOST,
    dialect: process.env.DB_DIALECT,
    operatorsAliases: false,

    pool: {
      max: dbConfig.pool.max,
      min: dbConfig.pool.min,
      acquire: dbConfig.pool.acquire,
      idle: dbConfig.pool.idle
    }
});
*/