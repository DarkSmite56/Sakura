const chalk = require('chalk')
const fs = require('fs')
global.erorapi = `𝚈𝚊𝚑 𝚊𝚍𝚊 𝚔𝚎𝚜𝚊𝚕𝚊𝚑𝚊𝚗 𝚒𝚗𝚒, 𝚌𝚘𝚋𝚊 𝚝𝚞𝚗𝚐𝚐𝚞 𝚋𝚗𝚝𝚛, 𝚔𝚕𝚘 𝚖𝚜𝚒𝚑 𝚐𝚔 𝚓𝚍𝚒 𝚙𝚗𝚐𝚐𝚒𝚕 𝚘𝚠𝚗𝚎𝚛 𝚊𝚓𝚊 𝚍𝚑.`
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})