const mysql = require ('mysql');
const password = require('./password').password;
const express = require("express");
const router = express.Router();
const connection =mysql.createConnection({
    host: 'ec2-18-133-30-35.eu-west-2.compute.amazonaws.com',
    user: 'StafflyDB',
    password: 'JungKook27',
    database: 'test'
});
connection.connect();

module.exports = function test(request,response) {
    connection.query("SELECT * FROM test;",function (error,result,field) {
        if (error) throw error;
        console.log("testing")
        response.json(result)
    })

};
