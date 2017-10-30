// h) Lista todas las propiedades del objeto a través de un console.log()



function changeKeyObj()
{

    var avenger = 
    { 
        name : "Tony", 
        class : "VII", 
        id : 1 ,
        city : 'New York City'
    };
    
    
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

      console.log ('Hello man! I\'m ' + avenger.fullName + ' and I live in ' + avenger.city + '. I\'m not a looser because my class is ' 
                    + avenger.class)
      
    }

}
changeKeyObj()