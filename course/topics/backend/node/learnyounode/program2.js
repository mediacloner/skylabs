let num = 0 

for (i = 2 ; i < process.argv.length; i++){

    num += parseInt(process.argv[i])
}

console.log(num)
