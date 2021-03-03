let handler = async (m, { conn }) => {
  global.DATABASE._data.chats[m.chat].isBanned = false
  m.reply('*Sekarang Public dinyalakan di group ini*')
}
handler.help = ['publicon']
handler.tags = ['owner']
handler.group = true
handler.command = /^publicon$/i

handler.owner = true

module.exports = handler
