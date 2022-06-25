const express = require('express')
const router = express.Router()
const AuthService = require("../service/auth")


router.post('/sign-up', async (req, res) => {
    const { username, password } = req.body
    console.log("aaa")
    console.log(username + "-----" + password)
    try {
        const user = await AuthService.signUp(username, password)
        const dataSend = JSON.stringify(user.toJson())
        res.send(dataSend)
    } catch (e) {
        res.status(400).json(e)
    }
})

router.post('/sign-in', async (req, res) => {
    const { username, password } = req.body
    console.log(username , password)
    try {
        const user = await AuthService.signIn(username, password)
        const dataSend = JSON.stringify(user.toJson())
        res.send(dataSend)
    } catch (e) {
        res.status(401).json(e)
    }
})

module.exports = router