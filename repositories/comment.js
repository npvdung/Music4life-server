const db = require('./index')

exports.findSongByName = async (title) => {
    const rawSong = await db.songs.findOne({ title: title })
    return rawSong
}

exports.pushComment = async (title, displayName, comment) => {
    const a = {
        displayName: displayName,
        comment: comment
    }
    await db.songs.updateOne(
        { title: title },
        { $push: { comments: a } }
    )
}