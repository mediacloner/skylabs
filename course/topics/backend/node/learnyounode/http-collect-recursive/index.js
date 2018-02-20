const http = require("http");
const concatStrem = require("concat-stream");


const urlArr =  [
    'http://www.google.es', 
    'http://www.google.co.uk'
    , 'http://www.google.it']


let result = urlArr.reduce(addData, '')
console.log (result)
function addData(result, url) {

    return result += http.get(url, (res) => {
        res.setEncoding("utf-8");
      
        res.pipe(
          concatStrem (data => {
            console.log("res.pipe -> on data");

            console.log (data);
            })
        )

        
        
        
    })
}






