const commentRepo = require("../repositories/comment")

exports.pushComment = async (title, displayName, comment) => {
    const checkSong = await commentRepo.findSongByName(title)
    if (!checkSong) {
        throw new Error("Cannot find this song")
    }
    const com = await commentRepo.pushComment(title, displayName, comment)
    return com
}