

// ñ1) Intenta crear las parejas de forma aleatoria.


function pairMaxMarkAv() {
    var arrAvengers = [];
    arrAvengers.push(new avenger('1','Ironman','Tony Stark', 'XI', 'NYC', 'Ingeneer', 'MIT', 10));
    arrAvengers.push(new avenger('2','Hulk','Robert Bruc Banner', 'XI', 'NYC', 'Scientist', 'Columbia University',8));
    arrAvengers.push(new avenger('3','Thor', 'Thor Odinson', 'XI', 'Asgard' , 'Superhero', 'unknown', 4  ));
    arrAvengers.push(new avenger('4','Scarlet Witch','Wanda Maximoff', 'X', 'Mount Wundagore', 'Witch', 'unknown',9  ));
    arrAvengers.push(new avenger('5','Buglex', 'Alex Sanchez', 'V', 'Vilanova', 'Dev', 'Life University', 3));


    pairMaxArray() 

    function pairMaxArray() {
        for (i = 0; i <= 10 ; i++){
        var r1 = getRandom();
        var r2 = getRandom();
            console.log(arrAvengers[r1].nickname + ' - ' + arrAvengers[r2].nickname );
           
        }

        function getRandom() {
            return Math.floor(Math.random() * 5)
        }
    };
    

    function avenger (id, nickname, fullName, classRoom, city, job, studies,markAv){
        this.id = id;
        this.nickname = nickname;
        this.fullName = fullName;
        this.classRoom = classRoom;
        this.city = city;
        this.job= job;
        this.studies= studies;
        this.markAv = markAv;
        this.description = function () {
                    console.log(
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
pairMaxMarkAv();


