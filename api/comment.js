const express = require('express')
const router = express.Router()
const commentService = require("../service/comment")
router.post('/', async (req, res) => {
    const { title, displayName, comment } = req.body
    try {
        await commentService.pushComment(title, displayName, comment)
        res.send("success")
    } catch (e) {
        res.status(404).json(e)
    }

})

module.exports = router