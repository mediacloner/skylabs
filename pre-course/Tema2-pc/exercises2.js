// l) Ahora, crea una función que solo liste los nombres de los objetos instanciados




function listFullName()
{
    var arrAvengers = [];
    arrAvengers.push(new avenger ("Tony Stark", "XI", "NYC", "Ingeneer", "MIT", 10));
    arrAvengers.push(new avenger ("Robert Bruce Banner", "X", "NYC", "Scientist", "Columbia University", 10));
    arrAvengers.push(new avenger (   ));
    arrAvengers.push(new avenger (   ));
    arrAvengers.push(new avenger (   ));
    arrAvengers.push(new avenger (   ));

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
listFullName();


