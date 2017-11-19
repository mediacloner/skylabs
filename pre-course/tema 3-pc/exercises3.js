
//p) 🔞 👊🏼 Llama a ésta nueva función dos veces, muestra sus resultados por pantalla y compara sus randomNums, mostrando un mensaje 
//indicando cual es mayor. El nombre pasado por parámetro también deberá ser random entre una array de nombres, con lo cual, también deberás
// refactorizar las funciones hijas.
function twoTimes() {

    gandFather();
    gandFather();

    function gandFather() {
        var names = ['hulk', 'ironMan', 'Thor', 'Scarlet Witch']
        var selectedName = { name: names[random(4)], number: random(50)};
        var selectedName2 = { name: names[random(4)], number: random(50)};
        if (selectedName.number > selectedName2.number){
            console.log (selectedName.name + ' es mayor que ' + selectedName2.name + ' porque tiene una valor de ' + selectedName.number + ' respecto a  ' + selectedName2.number + '.' );
        }

        else{
            console.log(selectedName2.name + ' es mayor que ' + selectedName.name + ' porque tiene una valor de ' + selectedName2.number + ' respecto a ' + selectedName.number + '.');
        }
            
        
    }
 
    function random(maxNum) {
        return Math.floor(Math.random() * maxNum);
    }
}

twoTimes();
