// g) Cambia la propiedad name por fullName.
// g1) Asegura los cambios.




function changeKeyObj()
{

    var avenger = 
    { 
        name : "Tony", 
        class : "VII", 
        id : 1 ,
        city : 'New York City'
    };
    
    showMeObj();

    changeKey();

    showMeObj();
    function changeKey()
    {
        var variable = avenger.name;
        delete avenger.name;
        avenger.fullName = variable;
    }

    function showMeObj()
    {

        for( key in avenger) {
            // keys
            console.log(avenger[key]) ;  //key = name of property
          }
      
    }

}
changeKeyObj()