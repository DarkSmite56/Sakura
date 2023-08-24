const chalk = require('chalk')
const fs = require('fs')
global.textmenfespesan2 = `𝚒𝚝𝚞 𝚍𝚛𝚒 𝚜𝚎𝚜𝚎𝚘𝚛𝚐 𝚐𝚠 𝚐𝚔 𝚋𝚒𝚜𝚊 𝚜𝚋𝚞𝚝 𝚗𝚊𝚖𝚊 𝚍𝚒𝚊 𝚢𝚎, 𝚍𝚎𝚖𝚒 𝚖𝚎𝚗𝚓𝚊𝚐𝚊 𝚙𝚛𝚒𝚟𝚊𝚜𝚒`
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})