// c) Ahora, declara tu hora y muéstrala redondeada.
function getOnlyHour ()
{
        var nowDate = new Date();
        var nowHour = nowDate.getHours();
        var nowMinute = nowDate.getMinutes();
        if (nowMinute > 30 )
        {
                roundHour = nowHour + 1
        }
        else
        {
                var roundHour = nowHour;
        }
       

  

        console.log( 'Hello! It is around ' + roundHour  );

        
        
}

getOnlyHour();


