const fs = require('fs')
const chalk = require('chalk')
// EDIT DISINI
global.owner = ['62xxxxxxxxx'] // nomer mu
global.packname = '© Sticker By yusufadi_official' // nama pack sticker
global.author = 'yusufadi_official'// nama author 


let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.yellowBright(`Update File Terbaru ${__filename}`))
delete require.cache[file]
require(file)
})