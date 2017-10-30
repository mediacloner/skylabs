// f) Lista el numero de propiedades que contiene el objeto.


function countPropObj()
{

    var avenger = 
    { 
        name : "Tony", 
        class : "VII", 
        id : 1 
    };

  

    avenger.city = 'New York City'
    var countProp = 0;
    countPropObj();

    
        function countPropObj()
        {
    
            for( key in avenger) {
                countProp += 1
              }

              console.log ('There are ' + countProp + ' info fields')
          
        }

   
}


countPropObj()