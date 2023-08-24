const chalk = require('chalk')
const fs = require('fs')
global.botname = `𝙳𝚊𝚛𝚔𝙱𝚘𝚝𝚣`//nickhelp
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})