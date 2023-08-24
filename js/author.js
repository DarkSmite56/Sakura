const chalk = require('chalk')
const fs = require('fs')
global.author = ` 𝙳𝚊𝚛𝚔𝙱𝚘𝚝𝚣\n𝙼𝚔𝚜𝚒𝚑 𝚞𝚍𝚑 𝚙𝚊𝚔𝚎 𝚗𝚒𝚑 𝚋𝚘𝚝` //ini untuk wm stiker ya kawan
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})