const {Transform} = require ('stream')

const toUppercase = new Transform ({
    transform (chunk, encoding, proceed){
        this.push(chunk.toString().toUpperCase())
        proceed()
    }


})

process.stind.pipe(toUppercase).pipe(process.stdout)