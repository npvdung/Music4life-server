const db = require('./index')
const Song = require("../model/song")

exports.findSongByName = async (title) => {
    const rawSong = await db.songs.findOne({ title: title })
    return rawSong
}

exports.createSong = async (song) => {
    const result = await db.songs.insertOne({
        title: song.title,
        artist: song.artist,
        uri: song.uri,
        comments: []
    })
    const insertedUser = result.ops[0]
    const newSong = new Song(insertedUser.title, insertedUser.artist, insertedUser.uri)
    return newSong
}

exports.findSongByNameOrArtist = async (titleOrArtist) => {
    console.log(titleOrArtist)
    const regex = new RegExp(titleOrArtist , "i")
    const listSong = await db.songs.find({
        $or: [
            {title : regex},
            {artist : regex}
        ]
    }).toArray()
    console.log(listSong)
    return listSong
}