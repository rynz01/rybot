let handler = async (m, { conn, participants }) => {
  // if (participants.map(v=>v.jid).includes(global.conn.user.jid)) {
    global.DATABASE._data.chats[m.chat].isBanned = true
    m.reply('*Sekarang public dimatikan di group ini*')
  // } else m.reply('Ada nomor host disini...')
}
handler.help = ['publicoff']
handler.tags = ['owner']
handler.command = /^publicoff$/i
handler.owner = true

module.exports = handler
