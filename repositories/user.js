const User = require('../model/user')
const db = require('./index')

exports.findUserByUserName = async (username) => {
    const rawUser = await db.users.findOne({ username: username })
    return rawUser
}

exports.createUser = async (user) => {
    const result = await db.users.insertOne({
        username: user.username,
        password: user.password,
        salt: user.salt
    })
    const insertedUser = result.ops[0]
    const savedUser = new User(insertedUser.username)
    return savedUser
}



