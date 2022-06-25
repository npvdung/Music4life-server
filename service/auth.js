const User = require('../model/user')
const UserRepo = require('../repositories/user')

const signUp = async (username, password) => {
    const user = await UserRepo.findUserByUserName(username)
    if (user) {
        throw new Error('Username existed!')
    }
    const newUser = new User(username)
    newUser.generatePassword(password)
    const savedUser = await UserRepo.createUser(newUser)
    return savedUser
}

const signIn = async (username, password) => {
    const user = await UserRepo.findUserByUserName(username)
    if (!user) {
        throw new Error("Username not existed")
    }
    const userVerify = new User(user.username)
    userVerify.password = user.password
    userVerify.salt = user.salt
    if (!userVerify.verifyPassword(password)) {
        throw new Error('Password is incorrect')
    }
    return new User(userVerify.username)
}
module.exports = { signUp, signIn }

