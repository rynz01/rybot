let handler  = async (m, { conn }) => {
  conn.reply(m.chat,`${pickRandom(global.salam)}`, m)
}
handler.customPrefix = /^assalamualaikum$/
handler.command = new RegExp
handler.exp = 0

module.exports = handler
















function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}


global.salam= [
"waalaikumsalam kakak"
"waalaikumsalam"
"iya waalaikumsalam"
]
