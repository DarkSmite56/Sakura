const chalk = require('chalk')
const fs = require('fs')
global.textmenfespesan3 = `𝙺𝚕𝚘 𝚕𝚞 𝚖𝚊𝚞 𝚋𝚊𝚕𝚊𝚜 𝚙𝚎𝚜𝚊𝚗 𝚛𝚊𝚑𝚊𝚜𝚒𝚊 𝚐𝚒𝚝𝚞/𝚖𝚎𝚗𝚏𝚎𝚜𝚜 𝚔𝚎𝚝𝚒𝚔 𝚐𝚒𝚗𝚒
Contoh : !balas <pesan>
contoh : !balas Ini Siapa ya?

𝚗𝚊𝚑 𝚒𝚗𝚒 𝚔𝚊𝚕𝚘 𝚕𝚞 𝚖𝚊𝚞 𝚗𝚐𝚒𝚛𝚒𝚖 𝚋𝚞𝚔𝚊𝚗 𝚋𝚊𝚕𝚊𝚜 𝚢𝚎 𝚝𝚙𝚒 𝚗𝚐𝚒𝚛𝚒𝚖 𝚖𝚎𝚗𝚏𝚎𝚜𝚜 𝚔𝚝𝚒𝚔 𝚐𝚒𝚗𝚒
!menfes nomor|pesan
𝚌𝚘𝚗𝚝𝚘𝚑
!menfes 628512345577|haiii bapak gw rudi

©Privasi  𝚙𝚛𝚒𝚟𝚊𝚜𝚒 𝚕𝚞 𝚊𝚖𝚊𝚗 𝚝𝚎𝚗𝚊𝚗𝚐 𝚊𝚓'
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})