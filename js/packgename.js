const chalk = require('chalk')
const fs = require('fs')
global.packgename = `𝙼𝚊𝚍𝚎 𝚋𝚢\n` //ini untuk wm stiker ya kawan
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})