const chalk = require('chalk')
const fs = require('fs')
global.premiums = `𝙸𝚗𝚒 𝚔𝚑𝚞𝚜𝚞𝚜 𝚢𝚐 𝚞𝚍𝚑 𝚙𝚛𝚎𝚖𝚒𝚞𝚖\n𝙼𝚊𝚞 𝚋𝚎𝚕𝚒 𝚙𝚛𝚎𝚖𝚒𝚞𝚖? 𝚔𝚎𝚝𝚒𝚔 !buyprem\nContoh : !buyprem` //ini untuk wm stiker ya kawan
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})