

// ñ) Ahora, crea una funcion que recoja los avengers en parejas (será necesario que tengan un id,
// por comodidad al aparejarlos), es decir, de dos en dos, compare sus markAv y que muestre 
// el mayor de ambos.


function pairMaxMarkAv() {
    var arrAvengers = [];
    arrAvengers.push(new avenger('1','Ironman','Tony Stark', 'XI', 'NYC', 'Ingeneer', 'MIT', 10));
    arrAvengers.push(new avenger('2','Hulk','Robert Bruc Banner', 'XI', 'NYC', 'Scientist', 'Columbia University',8));
    arrAvengers.push(new avenger('3','Thor', 'Thor Odinson', 'XI', 'Asgard' , 'Superhero', 'unknown', 4  ));
    arrAvengers.push(new avenger('4','Scarlet Witch','Wanda Maximoff', 'X', 'Mount Wundagore', 'Witch', 'unknown',9  ));
    arrAvengers.push(new avenger('5','Buglex', 'Alex Sanchez', 'V', 'Vilanova', 'Dev', 'Life University', 3));


    pairMaxArray() 

    function pairMaxArray() {
        for (i = 0; i <= arrAvengers.length; i= i+2){
            var maxValue = 0;
            if (arrAvengers[i].markAv > arrAvengers[i+1].markAv ){
                maxValue = arrAvengers[i].markAv;
            }
            else{
                maxValue = arrAvengers[i+1].markAv;
            }
            console.log(arrAvengers[i].nickname + ' - ' + arrAvengers[i=i+1].nickname + 
                ' the maximum value of AvMark is ' + maxValue);
           
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


