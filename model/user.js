const crypto = require('crypto')

class User {
    username
    password
    salt
    constructor(username) {
        this.username = username
    }
    generatePassword(password) {
        this.salt = crypto.randomBytes(128).toString("base64")
        this.password = crypto
            .pbkdf2Sync(password, this.salt, 10000, 512, "sha512")
            .toString('hex')
    }
    verifyPassword(password) {
        const hashPassword = crypto
        .pbkdf2Sync(password, this.salt, 10000, 512, "sha512").toString('hex')

        return this.password === hashPassword
    }
    toJson() {
        return {
            username: this.username,
        }
    }
}
module.exports = User