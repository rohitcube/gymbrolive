const { DataTypes, Model } = require('sequelize');
const { sequelize } = require('../config/connection');

const Booking = sequelize.define('Booking', {
    booking_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        field: 'booking_id'
    },
    student_name: {
        type: DataTypes.STRING(100),
        allowNull: true,
        defaultValue: null,
        field: 'student_name'
    },
    email: {
        type: DataTypes.STRING(100),
        allowNull: true,
        defaultValue: null,
        field: 'email'
    },
    contact_number: {
        type: DataTypes.STRING(100),
        defaultValue: null,
        allowNull: true,
        field: 'contact_number'
    },
    date: {
        type: DataTypes.DATEONLY,
        defaultValue: null,
        allowNull: false,
        field: 'date'
    },
    start_time: {
        type: DataTypes.TIME,
        defaultValue: null,
        allowNull: false,
        field: 'start_time'
    },
    end_time: {
        type: DataTypes.TIME,
        defaultValue: null,
        allowNull: false,
        field: 'end_time'
    },
    status: {
        type: DataTypes.STRING(20),
        defaultValue: null,
        field: 'status'
    }
}, {
    sequelize,
    modelName: 'Booking',
    tableName: 'bookings',
    timestamps: false
});

module.exports = Booking;
