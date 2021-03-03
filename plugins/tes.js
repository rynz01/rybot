const { MessageType } = require('@adiwajshing/baileys')
let handler  = async (m, { conn, args }) => {
.sendFile(m.chat, '../src/sticker.webp', "", null, m, false, { asSticker: true })
}
handler.command = /^anjay$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
