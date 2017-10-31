// i) Crea un constructor de objetos llamado "Avenger", al cual le pasarás ciertos parametros, 
// creando una instancia del objeto con las propiedades 
// de nuestro objeto creado. (Échale un ojo a la referencia de abajo.)



function createConstructor()
{
    
    var tonyStark = new avenger ("Tony Stark", "XI", "NYC", "Ingeneer", "MIT", 10)
    console.log(tonyStark)

  
    function avenger (fullName, classRoom, city, job, studies,markAv){
        this.fullName = fullName;
        this.classRoom = classRoom;
        this.city = city;
        this.job= job;
        this.studies= studies;
        this.markAv = markAv;
    }


    
}
createConstructor()


