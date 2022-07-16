console.log(`\n${module.id} is loading...\n`)
const serverConstants = require("./server_constants.json")
module.exports = {
    server:function(){
        console.log(`${module.id} enviate server constants\n`)
        return [serverConstants]
    }
}
console.log(`\n${module.id} is terminate...`)