let handler = async (m, { conn }) => {
  global.DATABASE._data.chats[m.chat].isBanned = false
  m.reply('*Sekarang Public dinyalakan di group ini*')
}
handler.help = ['public on']
handler.tags = ['owner']
handler.group = true
handler.command = /^public on$/i

handler.owner = true

module.exports = handler
