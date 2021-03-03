let handler  = async (m, { conn }) => {
  conn.reply(m.chat,`${pickRandom(global.rynz)}`, m)
}
handler.help = ['cantikcek']
handler.tags = ['fun']
handler.command = /^(cantikcek|cekcantik)$/i
module.exports = handler


function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}


global.rynz = [
"*Tingkat kecantikan kakak 50%* pasti tiap hari mandinya 5×",
"*Tingkat kecantikan kakak 56%* Kakak mandi berapa kali? kok bisa cantik kayak gitu",
"*Tingkat kecantikan kakak 62%* kakak kok cans banget sih terpesona aku😍",
"*Tingkat kecantikan kakak 74%* Kakak rahasianya jadi cantik gimana sih?",
"*Tingkat kecantikan kakak 86%* Kakak nih cantik cantik pasti buaya",
"*Tingkat kecantikan kakak 98%* Kakak Cantik sih Tapi sayang, Kk Punya orang",
]
