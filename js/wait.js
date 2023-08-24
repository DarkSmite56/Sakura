const chalk = require('chalk')
const fs = require('fs')
global.wait = `🔎 𝙶𝚠 𝚕𝚐𝚒 𝚌𝚛𝚒 𝚙𝚎𝚛𝚖𝚒𝚗𝚊𝚝𝚊𝚊𝚗 𝚕𝚞 𝚜𝚋𝚛...`
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})