const db = require('./index')
exports.findSongByName = async (title) => {
    const rawSong = await db.songs.findOne({ title: title })
    return rawSong
}

exports.findUsername = async (username) => {
    const rawUser = await db.users.findOne({ username: username })
    return rawUser
}

exports.pushHistory = async (username, title) => {
    await db.users.updateOne(
        { username: username },
        { $pull: { history: title } }
    )
    await db.users.updateOne(
        { username: username },
        { $push: { history: title } }
    )
}

exports.getHistory = async (username) => {
    const listHistory = await db.users.findOne({ username: username }, { projection: { history: true, _id: false } })

    const array = await db.songs.find({ title: { $in: listHistory.history } }).toArray()
    console.log(array)

    return array
}
