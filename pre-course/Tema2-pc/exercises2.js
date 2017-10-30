// a) Escribe una función que liste los nombres de propiedad 
//    del objeto (Puedes usar el objeto creado más arriba)
function showMeObj()
{
    var avenger = 
    { 
        name : "Tony", 
        class : "VII", 
        id : 1 
    };

    for( key in avenger) {
        // keys
        console.log(avenger[key]) ;  //key = name of property
      }
    

}

showMeObj();



