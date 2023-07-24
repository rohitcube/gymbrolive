const { DataTypes, Model } = require('sequelize');
const { sequelize } = require('../config/connection');

const Feedback = sequelize.define('Feedback', {
    feedback_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        field: 'feedback_id'
    },
    student_number: {
        type: DataTypes.STRING(100),
        allowNull: false,
        defaultValue: null,
        field: 'student_number'
    },
    tele_id: {
        type: DataTypes.STRING(100),
        allowNull: true,
        defaultValue: null,
        field: 'tele_id'
    },
    email: {
        type: DataTypes.STRING(100),
        allowNull: true,
        defaultValue: null,
        field: 'email'
    },
    paragraph: {
        type: DataTypes.STRING(1250),
        defaultValue: null,
        allowNull: true,
        field: 'paragraph'
    },
    date: {
        type: DataTypes.DATEONLY,
        defaultValue: null,
        allowNull: false,
        field: 'date'
    },
    status: {
        type: DataTypes.STRING(20),
        defaultValue: null,
        field: 'status'
    }
}, {
    sequelize,
    modelName: 'Feedback',
    tableName: 'feedback',
    timestamps: false
});

module.exports = Feedback;