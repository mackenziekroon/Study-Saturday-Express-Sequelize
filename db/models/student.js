'use strict';

const Sequelize = require('sequelize');
const db = require('../db');
const sequelize = require('sequelize');

const Student = db.define('student', {
    firstName: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    lastName: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    email: {
        type: sequelize.STRING,
        allowNull: false,
        validate: {
            isEmail: true,
        }
    },
});

Student.beforeCreate((student) => {
    student.lastName = student.lastName[0].toUpperCase() + student.lastName.slice(1)
    student.firstName = student.firstName[0].toUpperCase() + student.firstName.slice(1)

})

module.exports = Student;
