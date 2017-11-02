// m) Crea varios objetos con las mismas propiedades, como por ejemplo la ciudad, crea una función 
// para que solo liste los nombres de los Avengers que sean de la misma ciudad y cuantos hay.




function listFullName()
{
    var arrAvengers = [];
    arrAvengers.push(new avenger ('Ironman','Tony Stark', 'XI', 'NYC', 'Ingeneer', 'MIT', 10));
    arrAvengers.push(new avenger ('Hulk','Robert Bruc Banner', 'XI', 'NYC', 'Scientist', 'Columbia University'));
    arrAvengers.push(new avenger('Thor', 'Thor Odinson', 'XI', 'Asgard' , 'Superhero', 'unknown'  ));
    arrAvengers.push(new avenger('Scarlet Witch','Wanda Maximoff', 'X', 'Mount Wundagore', 'Witch', 'unknown'  ));

    findAv ('XI', classRoom)

    function findAv(searchDef, keyVar) {

        // a
        // b
        // c
       
        var a = ['a', 'b', 'c'];

        a.forEach(function (element) {
            console.log(element);
        });



        // Filtered array longWords is ["exuberant", "destruction", "present"]
        var words = ["spray", "limit", "elite", "exuberant", "destruction", "present", "happy"];

        var longWords = words.filter(function (word) {
            return word.length > 6;
        });



    }

    function avenger (nickname, fullName, classRoom, city, job, studies,markAv){
        this.nickname = nickname;
        this.fullName = fullName;
        this.classRoom = classRoom;
        this.city = city;
        this.job= job;
        this.studies= studies;
        this.markAv = markAv;
        this.description = function () {
            console.log (
                          this.nickname
                + ' , ' + this.fullName 
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


