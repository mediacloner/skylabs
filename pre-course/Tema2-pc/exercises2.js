// e) Añade una nueva propiedad, por ejemplo city y dale un valor.


function addPropObj()
{

    var avenger = 
    { 
        name : "Tony", 
        class : "VII", 
        id : 1 
    };

    showMeObj();

    avenger.city = 'New York City'

    showMeObj();

    function showMeObj()
    {

        for( key in avenger) {
            // keys
            console.log(avenger[key]) ;  //key = name of property
          }
      
    }

}


addPropObj()