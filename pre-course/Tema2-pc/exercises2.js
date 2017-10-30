// d) Ahora, elimina la propiedad ID y asegura los cambios.


function delPropObj()
{

    var avenger = 
    { 
        name : "Tony", 
        class : "VII", 
        id : 1 
    };

    showMeObj();

    delete avenger.id

    showMeObj();

    function showMeObj()
    {

        for( key in avenger) {
            // keys
            console.log(avenger[key]) ;  //key = name of property
          }
      
    }

}


delPropObj()