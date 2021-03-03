let handler = async (m, { conn }) => {
  if (new Date - global.DATABASE._data.users[m.sender].lastclaim > 86400000) {
    global.DATABASE._data.users[m.sender].exp += 999999
    m.reply('Selamat anda mendapatkan 999999 Exp')
    global.DATABASE._data.users[m.sender].lastclaim = new Date * 1
  } else m.reply('Udah nge cheat masih aja mau nge cheat lagi😒')
}
handler.help = ['cheat']
handler.tags = ['owner']
handler.command = /^(cheat)$/i
handler.owner = true
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0

module.exports = handler













