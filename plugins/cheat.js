let handler = async m => m.reply(`
selamat anda mendapatkan exp sebanyak ${handler.exp}



`.trim()) // Tambah sendiri kalo mau

handler.exp = 5555555555
handler.command = /^dona(te|si)$/i
handler.owner = true
module.exports = handler
