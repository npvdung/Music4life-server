const express = require('express')
const router = express.Router()
const historyService = require("../service/listenHistory")


router.post('/push', async (req, res) => {
    const { username, title } = req.body
    console.log(username, title)
    try {
        await historyService.pushHistory(username, title)
        res.send("sucess")
    }
    catch (e) {
        res.send("error")
        console.log(e.message)
    }
})

router.post('/get', async (req, res) => {
    // const { username } = req.body
    // const listenHistory = await historyService.getHistory(username)
    res.json({})
})

module.exports = router