const historyRepo = require("../repositories/listenHistory")

const pushHistory = async (username , title ) => {
    const checkSong = await historyRepo.findSongByName(title)
    if (!checkSong) {
        throw new Error("Cannot find this song")
    }
    const checkUser = await historyRepo.findUsername(username)
    if (!checkUser) {
        throw new Error("Cannot find this username")
    }

    const his = historyRepo.pushHistory(username, title)
    return his
}

const getHistory =  async(username) => {
    const listHistory = await historyRepo.getHistory(username)
    return listHistory

}
module.exports = {pushHistory , getHistory}