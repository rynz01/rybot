let handler = async (m, { conn, text }) => {
  conn.reply(m.chat, `
*Pertanyaan:* ${m.text}
*Jawaban:* ${pickRandom(['10% kamu memang ganteng Ya ganteng buat monyet','15% kasian orang jelek','38% Kmu terlalu buluqq','50% kamu lumayan ganteng','70% Ganteng sekali tiap hari ke salon','86% Ganteng sekali','97% kamu terlalu ganteng'])}
`.trim(), m)
}
handler.help = ['gantengcek']
handler.tags = ['kerang']
handler.command = /^gantengcek$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}

