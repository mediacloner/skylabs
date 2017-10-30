// c) Cambia el valor de la propiedad class por "XI" y asegurate de
// que los cambios se han efectuado.

function changePropObj()
{

    var avenger = 
    { 
        name : "Tony", 
        class : "VII", 
        id : 1 
    };

    showMeObj();

    avenger.class = 'XI'

    showMeObj();


    function showMeObj()
    {

        for( key in avenger) {
            // keys
            console.log(avenger[key]) ;  //key = name of property
          }
      

    }




}


changePropObj()