const chalk = require('chalk')
const fs = require('fs')
global.sukses = `𝚂𝚞𝚔𝚜𝚎𝚜\n𝚐𝚔 𝚞𝚜𝚑 𝚏𝚘𝚕𝚕𝚘𝚠\n𝙸𝚗𝚜𝚝𝚊𝚐𝚛𝚊𝚖 : @𝚜𝚎𝚊𝚗_𝚍1456\n𝚈𝚝 𝚖𝚊𝚑 𝚔𝚐𝚔 𝚊𝚍\n`
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})