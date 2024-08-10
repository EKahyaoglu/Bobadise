const { DataTypes } = require("sequelize")

const sequelize = require('../lib/sequelize')

const Order = sequelize.define('order', {
    tea: {type: DataTypes.STRING, allowNull: false},
    toppings: {type: DataTypes.ARRAY, allowNull: true},
    location: {type: DataTypes.STRING, allowNull:false}
})

exports.Order = Order

exports.OrderClientFields =  [
    'tea',
    'toppings',
    'location'
]
