// j) Crea otro objeto y imprime sus propiedades por pantalla.



function newObjConstructor()
{
    
    var tonyStark = new avenger ("Tony Stark", "XI", "NYC", "Ingeneer", "MIT", 10)
    var hulk = new avenger ("Robert Bruce Banner", "X", "NYC", "Scientist", "Columbia University", 10)
    console.log( hulk )  
    function avenger (fullName, classRoom, city, job, studies,markAv){
        this.fullName = fullName;
        this.classRoom = classRoom;
        this.city = city;
        this.job= job;
        this.studies= studies;
        this.markAv = markAv;
    }


    
}
newObjConstructor()


