console.log(`\n${module.id} is loading...\n`)
const [express, [app]] = require("./config-express")
module.exports = {
    server:function(){
        console.log(`${module.id} enviate server modules/frameworks\n`)
        return [app]
    }
}
console.log(`\n${module.id} is terminate...`)