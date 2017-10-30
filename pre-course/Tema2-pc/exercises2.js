// h1) Añade más propiedades al objeto, como... markAverage, country, job, studies...
// h2) Asegura los cambios volviendo a listar los valores del objeto



function changeKeyObj()
{

    var avenger = 
    { 
        fullName : "Tony", 
        class : "VII", 
        id : 1 ,
        city : 'New York City'
    };
    
    
    addProperty();

    showMeObj();
    function addProperty()
    {
      avenger.job = 'Rich';
      avenger.studies = 'Full Stark Developer';
      avenger.mark = 'A';
      avenger.country = 'EE.UU.'
    }

    function showMeObj()
    {

        for( key in avenger) {
            // keys
            console.log(key +' : '+avenger[key]) ;  //key = name of property
          }
       
    }

}
changeKeyObj()