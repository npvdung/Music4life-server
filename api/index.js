const express = require('express')
const router = express.Router()

const authRouter = require("./auth")
const musicRouter = require("./song")
const commentRouter = require('./comment')
const historyRouter = require("./listenHistory")

router.use('/auth', authRouter)
router.use('/song', musicRouter)
router.use('/post_comment', commentRouter)
router.use('/history', historyRouter)

module.exports = router