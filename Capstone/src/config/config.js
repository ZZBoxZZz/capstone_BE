// biến môi trường => .env => environment
// lưu trữ tất cả các dữ liệu theo dạng hằng số (const) vì ít thay đổi


// node src/config/config.js


require('dotenv').config();

module.exports={
    db_host: process.env.DB_HOST,
    db_user: process.env.DB_USER,
    db_pass: process.env.DB_PASS,
    db_database: process.env.DB_DATABASE,
    db_port: process.env.DB_PORT,
    db_dialect: process.env.DB_DIALECT
}








console.log(process.env.DB_HOST)
// yarn add dotenv
// const dotenv = require('dotenv');
// dotenv.config();

// const express = require('express');
// const bodyParser = require('body-parser');