const chalk = require('chalk')
const fs = require('fs')
global.textmenfespesan1 = `𝚈𝚘? 𝚒𝚗𝚒 𝚐𝚠 𝚋𝚘𝚝 𝚠𝚊 𝚕𝚐𝚒 𝚖𝚎𝚗𝚏𝚎𝚜𝚜
𝚍𝚛𝚒 𝚘𝚛𝚐 𝚐𝚠 𝚐𝚔 𝚋𝚒𝚜𝚊 𝚜𝚎𝚋𝚞𝚝 𝚗𝚊𝚖𝚊 𝚍𝚒𝚊 𝚗𝚒𝚑 𝚙𝚎𝚜𝚊𝚗 𝚗𝚢𝚊` // lalu ke variabel pesan 
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})