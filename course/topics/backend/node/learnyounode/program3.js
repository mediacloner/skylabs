var fs = require("fs");

let [node, path, pathFile] = process.argv

let rawFile = fs.readFileSync(pathFile);

let arr = rawFile.toString().split("\n");

console.log (arr.length-1)