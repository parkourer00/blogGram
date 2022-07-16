console.log(`\n${module.id} is loading...\n`)
function loadServer(app, door){
    app.listen(door, function(){
        console.log(`${module.id} loading server in the door ${door}`)
    })
}


module.exports = loadServer
console.log(`\n${module.id} is terminate...`)