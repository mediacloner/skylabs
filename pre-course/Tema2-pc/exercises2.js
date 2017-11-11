

//n) Para acabar, créate a ti mismo y crea una función que recoja todas las markAv y
// muestre la media.



function avgMarkAv() {
    var arrAvengers = [];
    arrAvengers.push(new avenger ('Ironman','Tony Stark', 'XI', 'NYC', 'Ingeneer', 'MIT', 10));
    arrAvengers.push(new avenger ('Hulk','Robert Bruc Banner', 'XI', 'NYC', 'Scientist', 'Columbia University',8));
    arrAvengers.push(new avenger('Thor', 'Thor Odinson', 'XI', 'Asgard' , 'Superhero', 'unknown', 4  ));
    arrAvengers.push(new avenger('Scarlet Witch','Wanda Maximoff', 'X', 'Mount Wundagore', 'Witch', 'unknown',9  ));
    arrAvengers.push(new avenger('Buglex', 'Alex Sanchez', 'V', 'Vilanova', 'Dev', 'Life University', 3));

    console.log('Average Mark Avengers is: ' + avgMarkAv())


    function avgMarkAv() {
        var sumMarkAvgrs = 0;
        var iterationsAvgrs = 0;

        arrAvengers.forEach(function (element) {
            sumMarkAvgrs = sumMarkAvgrs + element.markAv;
            iterationsAvgrs ++;
        }); 
        
        return avgMark = sumMarkAvgrs / iterationsAvgrs;
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
avgMarkAv();


