const chalk = require('chalk')
const fs = require('fs')

//SELEBIHNYA JIKA MAU SETTING ADA DI FOLDER JS 

//api ibeng
global.apiibeng = 'Fp7rhSE9yv' // letakan apikey kalian daftar dlu ya
// •> https://api.ibeng.tech
//lalu klian daftar jika sudah daftar di dashboard ada tulisan apikey kalian salin aja Paste di 'APIKEY'





global.owner = ['6285791762177'] 
global.ownernomer = "628971507809"
global.socialmedia = "𝙸𝙶: 𝚜𝚎𝚊𝚗_𝚍1456"
global.yutub = "𝙶𝚔 𝚊𝚍"
global.lokasi = "𝙸𝚗𝚍𝚘𝚗𝚎𝚜𝚒𝚊, 𝚂𝚞𝚕𝚊𝚠𝚎𝚜𝚒 𝚞𝚝𝚊𝚛𝚊"
global.sakuraurl = 'https://lenttobs.xyz'
global.packgename = "𝚋𝚢 𝙳𝚊𝚛𝚔𝚂" 
global.author = "𝙳𝚊𝚛𝚔𝚂" 
global.title = '𝙳𝚊𝚛𝚔𝚂'
global.body = '𝚈𝚘'
global.welcome = true //false mati true nyala
global.left = true //false mati true nyala
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Telah di update'${__filename}'`))
	delete require.cache[file]
	require(file)
})