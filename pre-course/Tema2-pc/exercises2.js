// k) Crea una propiedad del objeto que liste automáticamente los valores de la instancia. 




function newFunConstructor()
{
    
    var tonyStark = new avenger ("Tony Stark", "XI", "NYC", "Ingeneer", "MIT", 10);
    var hulk = new avenger ("Robert Bruce Banner", "X", "NYC", "Scientist", "Columbia University", 10);
    hulk.description();  // Remember ()
    function avenger (fullName, classRoom, city, job, studies,markAv){
        this.fullName = fullName;
        this.classRoom = classRoom;
        this.city = city;
        this.job= job;
        this.studies= studies;
        this.markAv = markAv;
        this.description = function () {
            console.log (
                          this.fullName 
                + ' , ' + this.classRoom 
                + ' , ' + this.city 
                + ' , ' + this.job
                + ' , ' + this.studies
                + ' , ' + this.markAv 

            )
        }
    }


    
}
newFunConstructor()


