'use strict';
const Sequelize = require('sequelize');
const db = require('../db');
const Student = require('./student');
const sequelize = require('sequelize');

const Test = db.define('test', {
    subject: {
        type: sequelize.STRING,
        allowNull: false
    },
    grade: {
        type: sequelize.INTEGER,
        allowNull: false
    }
});

Test.belongsTo(Student)

module.exports = Test;
