var player1 = 'Player 1';
var player2 = 'Player 2';
var scorePlayer1 = 0;
var scorePlayer2 = 0;
var faultPlayer1 = 0;
var faultPlayer2 = 0;
var text = '';
var lastPosPlayer1 = 'A';
var lastPosPlayer2 = 'A';
var lettersPlayer1 = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var lettersPlayer2 = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var stateAction = 0;  // 0-Ask Player 1, 1- Ask player 2, 
var setOfQuestions = {
    letter:
        ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
    ,
    question: ['With the letter "A", American electronic commerce and cloud computing company based in Seattle',
        'With the letter "B", is one of the world\'s most popular and widely viewed sports',
        'With the letter "C", the world\'s most populous country',
        'With the letter "D", is the most widely abundant terrestrial carnivore',
        'With the letter "E", is an American rapper, songwriter, record producer, and actor.',
        'With the letter "F", website was launched on February 4, 2004, by Mark Zuckerberg',
        'With the letter "G", American multinational technology company that specializes in online advertising technologies, search, cloud computing, software, and hardware.',
        'With the letter "H", is the novels chronicle the life of a young wizard',
        'With the letter "I", mobile operating system created and developed by Apple Inc',
        'With the letter "J", interpreted programming language. It is used to make webpages ',
        'With the letter "K", Katheryn Elizabeth Hudson is an American singer and songwriter, known professionally as ...',
        'With the letter "L", City has a diverse range of people and cultures, and more than 300 languages are spoken in the region',
        'With the letter "M", It is the fifth-largest natural satellite in the Solar System',
        'With the letter "N", Japanese multinational founded on 1889, it originally produced handmade playing cards. ',
        'With the letter "O", is an art form in which singers and musicians perform a dramatic work ',
        'With the letter "P", originally defined as the ratio of a circle\'s circumference to its diameter',
        'With the letter "Q", is a sovereign country located in Western Asia, on the northeastern coast of the Arabian Peninsula. ',
        'With the letter "R", is the belief in the superiority of one race over another',
        'With the letter "S",  is widely considered to be one of the greatest and most influential TV sitcoms ever made.the show features a handful of Jerry\'s friends and acquaintances, particularly best friend George Costanza.',
        'With the letter "T", is the city will host the 2020 Summer Olympics. ',
        'With the letter "U", is in its strictest definition any apparent object in the sky that is not identifiable as a known object or phenomenon.',
        'With the letter "V", (singular) is an electronic game that involves interaction with a user interface to generate visual feedback on a video device such as a TV screen or computer monitor.',
        'With the letter "W", is the largest and most popular general reference work on the Internet',
        'With the letter "X", is a video gaming brand created and owned by Microsoft',
        'With the letter "Y", is an American video-sharing website headquartered in San Bruno, California.',
        'With the letter "Z", is a chemical element with symbol Zn and atomic number 30.']
    ,
    answer: ['amazon', 'basket', 'china', 'dog', 'eminem', 'facebook', 'google', 'harry potter', 'ios', 'javascript', 'katy perry', 'london', 'moon', 'nintendo', 'opera', 'pi', 'qatar', 'racism', 'seinfeld', 'tokio', 'ufo', 'video game', 'wikipedia', 'xbox', 'youtube', 'zinc']
}
var valueSw = 'p1';
UIPlayer('wellcome1');
function mainGame(stateQuestion) {

    valueSw = stateQuestion;

    switch (valueSw) {
        case 'p1': //turn1
            if (lettersPlayer1.length > 0 && lettersPlayer2.length > 0) {     // while no emty letters some player
                UIPlayer('turn1');
                var pos = -1;
                var count = 0;
                var fback = true;
                valueSw = 'p1Ask';
                break;
            }
            else{
                results();
                break
            }
        case 'p1Ask': //Ask Player1
            fback = askQuestionsp1(lastPosPlayer1);
            break;
        case 'p1Eval': //evaluation answer
            if (fback == true && lettersPlayer1.length > 0) {   // loop about right questions.
                valueSw = 'p1'
            }
            else {
                valueSw = 'p2'
            }
            break;
        case 'p2':
            UIPlayer('turn2');
            var pos = -1;
            var count = 0;
            var fback = true;
            while (fback == true && count < 1001 && lettersPlayer2.length > 0) {
                var fback = askQuestionsp2(lastPosPlayer2);
                if (count == 1000) {
                    console.error('Error loop Player2')
                }
            }
            valueSw = 'p1'
            break;
    }
}
    
   
function results() {
    alert('                                    Final Score\n' + '================================================ \n' +
        ' Right Answers: ' + scorePlayer1 + '  Wrong Answers: ' + faultPlayer1 + ' Player 1 : ' + player1 + '\n' +
        ' Right Answers: ' + scorePlayer2 + '  Wrong Answers: ' + faultPlayer2 + ' Player 2 : ' + player2 + '\n');
}
    

function askQuestionsp1(letter) {
    var result = '';
    var posQuestion = setOfQuestions.letter.indexOf(letter);
    var pos = lettersPlayer1.indexOf(letter);

    text = setOfQuestions.question[posQuestion];
    document.getElementById("questions").innerHTML = text;

    stateAction = 2; // enterButton state
    }

function askQuestionsp2(letter) {
    var result = '';
    var posQuestion = setOfQuestions.letter.indexOf(letter);
    var pos = lettersPlayer2.indexOf(letter);
    result = prompt(player2 + ' >>>> ' + setOfQuestions.question[posQuestion], "");
    if (setOfQuestions.answer.indexOf(result.toLowerCase()) >= 0) { // Answer it's true
        UIPlayer('correct');
        if (pos + 1 == lettersPlayer2.length) {                        // Jump X  -->  A
            lastPosPlayer2 = lettersPlayer2[0];
        }
        else {
            lastPosPlayer2 = lettersPlayer2[(pos + 1)];            // A --> B
        }
        lettersPlayer2.splice(pos, 1);                             // A, , C
        scorePlayer2++;
        return true
    }
    else {
        if (result.toLowerCase() == 'pasapalabra') {                 // Change the player.
            UIPlayer('pasapalabra');
            if (pos == lettersPlayer2.length) {
                lastPosPlayer2 = lettersPlayer2[0];                 // Jump to the next one without slice
                return false
            }
            else {
                lastPosPlayer2 = lettersPlayer2[(pos + 1)];
                return false
            }
        }
        else {                                                      // Wrong answer.
            UIPlayer('false');
            if (pos == lettersPlayer1.length) {
                lastPosPlayer2 = lettersPlayer2[0];
            }
            else {
                lastPosPlayer2 = lettersPlayer2[pos + 1];
            }
            lettersPlayer2.splice(pos, 1);
            faultPlayer2++;
            return false;
        }
    }
}
function enterButton() {
    if (stateAction == 1) { //Wellcome Player 2
        player2 = document.getElementById("inputBox").value;
        text = ('Wellcome ' + player2 + '!');
        document.getElementById("questions").innerHTML = text;
        mainGame('p1');
        return true;
    }
    if (stateAction == 0) { // Wellcome Player 1
        player1 = document.getElementById("inputBox").value;
        stateAction = 1;
        UIPlayer('wellcome2');  
        return true; 
    }

    if (stateAction == 2){ //answer player 1
        result = document.getElementById("inputBox").value;
        if (setOfQuestions.answer.indexOf(result.toLowerCase()) >= 0) { // Answer it's true
            UIPlayer('correct');
            if (pos + 1 == lettersPlayer1.length) {                        // Jump X  -->  A   
                lastPosPlayer1 = lettersPlayer1[0];
            }
            else {
                lastPosPlayer1 = lettersPlayer1[(pos + 1)];            // A --> B
            }
            lettersPlayer1.splice(pos, 1);                             // A, , C
            scorePlayer1++;
            return true
        }
        else {
            if (result.toLowerCase() == 'pasapalabra') {                 // Change the player.
                UIPlayer('pasapalabra');
                if (pos == lettersPlayer1.length) {
                    lastPosPlayer1 = lettersPlayer1[0];                 // Jump to the next one without slice
                    return false
                }
                else {
                    lastPosPlayer1 = lettersPlayer1[(pos + 1)];
                    return false
                }
            }
            else {                                                      // Wrong answer.
                UIPlayer('false');
                if (pos == lettersPlayer1.length) {
                    lastPosPlayer1 = lettersPlayer1[0];
                }
                else {
                    lastPosPlayer1 = lettersPlayer1[pos + 1];
                }
                lettersPlayer1.splice(pos, 1);
                faultPlayer1++;
                return false;
            }
        }
    }
}
    

function UIPlayer(what) {
    if (what == 'wellcome1') {
        var text = "Please Player 1, writte your user name";
        document.getElementById("questions").innerHTML = text;
        return
    }
    if (what == 'wellcome2') {
        MyTextBox = document.getElementById("inputBox");
        MyTextBox.value = "Your nickname here!";
        text = ('Wellcome ' + player1 + '! <br>' +"Please Player 2, writte your user name:") ;
        document.getElementById("questions").innerHTML = text;
        changePlayerUI(2);
        return
    }
    if (what == 'turn1') {
        text = ('Is your turn ' + player1 + '!');
        document.getElementById("questions").innerHTML = text;
        changePlayerUI(1);
        return


                }
    if (what == 'turn2') {
        text = ('Is your turn ' + player2 + '!');
        document.getElementById("questions").innerHTML = text;
        changePlayerUI(2);
        return
    }
    if (what == 'correct') {
        text = 'Answer Correct!';
        document.getElementById("questions").innerHTML = text;
    }
    if (what == 'false') {
        text = 'Ups! You are wrong';
        document.getElementById("questions").innerHTML = text;
        return
    }
    if (what == 'pasapalabra') {
        text = 'OK! Change the player';
        document.getElementById("questions").innerHTML = text;
        return
    }
}

function wait(seconds) {
    var ms = seconds * 1000;
    var start = new Date().getTime();
    var end = start;
    while (end < start + ms) {
        end = new Date().getTime();
    }
}

    
function changePlayerUI(num) {

    if (num == 1) {
        document.getElementById("playerName").innerHTML = player1;
        document.getElementById('playerImg').src = "img/player1.png"
    }
    else {
        document.getElementById("playerName").innerHTML = player2;
        document.getElementById('playerImg').src = "img/player2.png"
    }
}