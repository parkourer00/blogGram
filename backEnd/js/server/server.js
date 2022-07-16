console.log(`\n${module.id} is loading...\n`)
const [app] = require("../configs/configs").server()
const [serverConstants] = require("../constants/constants").server()
const loadServer = require("./load_server")

loadServer(app, serverConstants.serverDoor)
console.log(`\n${module.id} is terminate...`)