// b) Nono, que hora exactamente? Dime la hora sin minutos
function getHour ()
{
        var nowDate = new Date();
        var nowHour = nowDate.getHours();
        var nowMinute = nowDate.getMinutes();

        // Padding 00 like 2:3 = 02:03

        //var strPadHour = nowHour.padStart(2, "0");
        //var strPadMinute = nowMinute.padStart(2, "0");

        console.log( 'Hello! It is around ' + nowHour  );

        
        
}

getHour();


