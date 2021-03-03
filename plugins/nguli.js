let handler = async (m, { conn }) => {
  if (new Date - global.DATABASE._data.users[m.sender].lastclaim > 86400000) {
    global.DATABASE._data.users[m.sender].exp += 5000
    m.reply('Upah mu ngaduk semen sebanyak 5000xp ')
    global.DATABASE._data.users[m.sender].lastclaim = new Date * 1
  } else m.reply('Sudah selesai ngaduk semen nya nanti punggung mu patah gimana?')
}
handler.help = ['nguli']
handler.tags = ['main']
handler.command = /^(nguli)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0

module.exports = handler

