const { DataTypes } = require("sequelize")

const bcrypt = require("bcryptjs")

const sequelize = require('../lib/sequelize')

const {Order} = require('./order')

const User = sequelize.define('user', {
    name: {type: DataTypes.STRING, allowNull: false },
    username: {type: DataTypes.STRING, allowNull: false},
    email: {type: DataTypes.STRING, allowNull: false},
    password: {type: DataTypes.STRING, allowNull: false},
    location:{type: DataTypes.STRING, allowNull: true}
})

User.hasMany(Order, {foreignKey: {allowNull: false}})
Order.belongsTo(User)

exports.User = User
exports.UserClientFields =  [
    'name',
    'username',
    'email',
    'password',
    'location'
]

exports.insertNewUser = async function (newUser) {
    try {
        const hash = await bcrypt.hash(User.password, 8)
        const newUser = await User.create({
            name: newUser.name,
            username: newUser.username,
            email: newUser.email,
            password: hash,
            location: newUser.location
        })
        return newUser.id
    } catch (error) {
        console.error("Error inserting new user: ", error)
        throw error
    }
}

async function getUserById(id, includePassword) {
    try {
        const user = await User.findByPk(id, {
            attributes: includePassword ? undefined : {exclude: ['password']}
        })
        return user ? user.toJSON() : null
    } catch (error) {
        console.error('Error fetching user Id: ', error)
        throw error
    }
}

exports.getUserById = getUserById

exports.validateCredentials = async function (id, password) {
    try {
        const user = await getUserById(id, true)
        return user ? await bcrypt.compare(password, user.password) : false
    } catch (error) {
        console.error('Error validating credentials: ', error)
        throw error
    }
}