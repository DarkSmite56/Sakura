const chalk = require('chalk')
const fs = require('fs')
global.wm = `𝙳𝚊𝚛𝚔𝙱𝚘𝚝𝚣 𝚖𝚊𝚍𝚎 𝚋𝚢 𝚘𝚠𝚗𝚎𝚛 𝚢𝚐 𝚊𝚞𝚝𝚒𝚜` //lenttobs
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})