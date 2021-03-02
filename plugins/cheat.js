let handler = async m => m.reply(`
conn.reply(m.chat, `*Jawaban Benar!*\n+9999 XP`, m)
    global.DATABASE._data.users[m.sender].exp += 9999



`.trim()) // Tambah sendiri kalo mau


handler.command = /^cheat$/i
handler.owner = true
module.exports = handler
