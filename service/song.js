const Song = require("../model/song")
const songRepo = require('../repositories/song')
const postMusic = async (title, artist, uri) => {
    const song = await songRepo.findSongByName(title)
    if (song) {
        throw new Error("Song existed")
    }
    const songPush = new Song(title, artist, uri)
    const newSong = await songRepo.createSong(songPush)
    return newSong
}


const getMusic = async (titleOrArtist) => {
    const listSong = await songRepo.findSongByNameOrArtist(titleOrArtist)
    if (listSong.length == 0) {
        throw new Error("Can't find")
    }
    return listSong
}

module.exports = { postMusic, getMusic }