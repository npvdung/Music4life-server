const express = require('express')
const router = express.Router()
const songService = require("../service/song")

router.post('/post_song', async (req, res) => {
    const { title, artist, uri } = req.body
    console.log(title, artist, uri)
    try {
        await songService.postMusic(title, artist, uri)
        res.send("success")
    } catch (e) {
        res.status(404).json(e)
        console.log(e)
    }
})

router.post('/get_song', async (req, res) => {
    const { titleOrArtist } = req.body
    try {
        const listSong = await songService.getMusic(titleOrArtist)
        res.json(listSong)
    } catch (e) {
        res.status(404).json(e)
    }

})

module.exports = router