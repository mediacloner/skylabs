var player1 = "Player 1";
var player2 = "Player 2";
var scorePlayer1 = 0;
var scorePlayer2 = 0;
var faultPlayer1 = 0;
var faultPlayer2 = 0;
var text = "";            // text for UI
var randomQuestion1 = []; //select group of questions for every question
var randomQuestion2 = [];  
var lastPosPlayer1 = "A";
var lastPosPlayer2 = "A";
var lettersPlayer1 = [  "A",  "B",  "C",  "D",  "E",  "F",  "G",  "H",  "I",  "J",  "K",  "L",  "M",  "N",  "O",  "P",  "Q",  "R",  "S",  "T",  "U",  "V",  "W",  "X",  "Y",  "Z"];
var lettersPlayer2 = [  "A",  "B",  "C",  "D",  "E",  "F",  "G",  "H",  "I",  "J",  "K",  "L",  "M",  "N",  "O",  "P",  "Q",  "R",  "S",  "T",  "U",  "V",  "W",  "X",  "Y",  "Z"];
var stateAction = "inputPlayer1";
var result1 = "";
var posQuestion1 = 0;
var pos1 = -1;
var count1 = 0;
var result2 = "";
var fback1 = true;
var posQuestion2 = 0;
var pos2 = -1;
var count2 = 0;
var fback2 = true;
var timePlayer1 = 150;
var timePlayer2 = 150;
var fcDown; // funtion Count Down
var stopVal; // stop loop seconds
var letterStateUI = {
  // round yellow = 0 blue = 1 green = 2 red = 3
  player1: [    0,    0,    0,    0,    0,    0,    0,    0,    0,    0,    0,    0,    0,    0,    0,    0,    0,    0,    0,    0,    0,    0,    0,    0,    0,    0  ],
  player2: [    0,    0,    0,    0,    0,    0,    0,    0,    0,    0,    0,    0,    0,    0,    0,    0,    0,    0,    0,    0,    0,    0,    0,    0,    0,    0  ]};
var setOfQuestions = {
  letter: [    "A",    "B",    "C",    "D",    "E",    "F",    "G",    "H",    "I",    "J",    "K",    "L",    "M",    "N",    "O",    "P",    "Q",    "R",    "S",    "T",    "U",    "V",    "W",    "X",    "Y",    "Z"  ],
  question: [
    'With the letter "A", American electronic commerce and cloud computing company based in Seattle',
    'With the letter "B", is one of the world\'s most popular and widely viewed sports. Short name.',
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
    'With the letter "S", is considered to be one of the greatest and most influential TV sitcoms.The show features a handful of Jerry\'s friends and acquaintances, particularly best friend George Costanza.',
    'With the letter "T", is the city will host the 2020 Summer Olympics. ',
    'With the letter "U", is in its strictest definition any apparent object in the sky that is not identifiable as a known object or phenomenon.',
    'With the letter "V", is an electronic game that involves interaction with a user interface to generate visual feedback on a video device such as a TV screen or computer monitor. One word and singular.',
    'With the letter "W", is the largest and most popular general reference work on the Internet',
    'With the letter "X", is a video gaming brand created and owned by Microsoft.',
    'With the letter "Y", is an American video-sharing website headquartered in San Bruno, California.',
    'With the letter "Z", is a chemical element with symbol Zn and atomic number 30.'
  ],
  answer: [
    "amazon",
    "basket",
    "china",
    "dog",
    "eminem",
    "facebook",
    "google",
    "harry potter",
    "ios",
    "javascript",
    "katy perry",
    "london",
    "moon",
    "nintendo",
    "opera",
    "pi",
    "qatar",
    "racism",
    "seinfeld",
    "tokio",
    "ufo",
    "videogame",
    "wikipedia",
    "xbox",
    "youtube",
    "zinc"
  ]
};

var setOfQuestions1 = {
  letter: [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z"
  ],
  question: [
    'With the letter "A", is a natural science that studies celestial objects and phenomena',
    'With the letter "B", is a cryptocurrency and worldwide payment system. It is the first decentralized digital currency.',
    'With the letter "C", complex combinations of spices or herbs, usually including fresh or dried hot chillies. Originating in the cuisine of the Indian',
    'With the letter "D",  is a British science-fiction television programme produced by the BBC since 1963. The programme depicts the adventures of a Time Lord',
    'With the letter "E", invented by the German engineer Arthur Scherbius at the end of World War I.Electro-mechanical rotor cipher machines developed to protect commercial, diplomatic and military communication.',
    'With the letter "F", is a free and open-source web browser. Use the Gecko layout engine to render web pages ',
    'With the letter "G", is an American fantasy drama television series created by David Benioff and D. B. Weiss. The series premiered on HBO in the United States on April 17, 2011.',
    'With the letter "H", is an American actor and film producer.He gained worldwide fame for his starring roles in the Star Wars or Blade Runner',
    'With the letter "I", is a numerical label assigned to each device connected to a computer network that uses the Internet Protocol for communication. Two letters',
    'With the letter "J", American slang term for coffee',
    'With the letter "K", The ... Protocol is an international treaty of United Nations Framework Convention on Climate Change that commits State Parties to reduce greenhouse gas emissions',
    'With the letter "L", the most populated city in the state of Nevada.The city bills itself as The Entertainment Capital of the World.',
    'With the letter "M",  is the capital and the most populated city in the German state of Bavaria.',
    'With the letter "N", is an American multinational that is engaged in the design, development, manufacturing, and worldwide marketing and sales of footwear, apparel, equipment, accessories, and services.',
    'With the letter "O", is computer software which the copyright holder provides the rights to study, change, and distribute the software to anyone and for any purpose.',
    'With the letter "P", o franchise was created by Satoshi Tajiri in 1995	and is centered on fictional creatures.The franchise began as a pair of video games for the original Game Boy.',
    'With the letter "Q", are a British rock band that formed in London in 1970. Their classic line-up was Freddie Mercury , Brian May , Roger Taylor , and John Deacon.',
    'With the letter "R", is a series of small single-board computers developed in the United Kingdom to promote the teaching of basic computer science in schools and in developing countries',
    'With the letter "S", is an American science fiction-horror web television. Set in the fictional town of Hawkins, Indiana, in the 1980s.',
    'With the letter "T", is an American automaker, energy storage company, and solar panel manufacturer based in Palo Alto, California. Founded in 2003.',
    'With the letter "U", is an industry standard that defines cables, connectors and communications protocols for connection, communication, and power supply between computers and devices.',
    'With the letter "V", is an Italian brand of scooter manufactured by Piaggio. The name means wasp in Italian.',
    'With the letter "W", is an American science fiction western thriller television series created by Jonathan Nolan and Lisa Joy for HBO. It is based on the 1973 film of the same name.',
    'With the letter "X", Professor ... (also known as Professor X) is a fictional character appearing in comic books published by Marvel Comics and is the founder and leader of the X-Men.',
    'With the letter "Y", is a group of physical, mental, and spiritual practices or disciplines which originated in ancient India',
    'With the letter "Z", is a file may contain one or more files or directories that may have been compressed.'
  ],
  answer: [
    "astronomy",
    "bitcoin",
    "curry",
    "doctor who",
    "enigma",
    "firefox",
    "game of thrones",
    "harrison ford",
    "ip",
    "java",
    "kyoto",
    "las vegas",
    "munich",
    "nike",
    "open source",
    "pokemon",
    "queen",
    "raspberry pi",
    "stranger things",
    "tesla",
    "usb",
    "vespa",
    "westworld",
    "xavier",
    "yoga",
    "zip"
  ]
};
var setOfQuestions2 = {
  letter: [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z"
  ],
  question: [
    'With the letter "A", is the capital and largest city of Greece.',
    'With the letter "B", is an American politician who served as the 44th President of the United States from 2009 to 2017. Name and surname.',
    'With the letter "C", is an American television host, comedian, and television producer. He is best known for hosting several late-night talk shows; since 2010, he has hosted on channel TBS.',
    'With the letter "D", also known by his birth name Anakin Skywalker, is a fictional character in the Star Wars franchise.',
    'With the letter "E", invented by the German engineer Arthur Scherbius at the end of World War I.Electro-mechanical rotor cipher machines developed to protect commercial, diplomatic and military communication.',
    'With the letter "F", is an association which describes itself as an international governing body of association football, futsal, and beach soccer.',
    'With the letter "G", is the largest city in Scotland, and third-largest in the United Kingdom.',
    'With the letter "H", this animal interact with humans in a wide variety of sport competitions and non-competitive recreational pursuits, as well as in working activities such as police work, agriculture, entertainment, and therapy.',
    'With the letter "I", manufactures and markets computer hardware, middleware and software, and provides hosting and consulting services. The American company originated in 1911.',
    'With the letter "J", he is the central figure of Christianity.',
    'With the letter "K", Situated in the northern edge of Eastern Arabia at the tip of the Persian Gulf, it shares borders with Iraq and Saudi Arabia.',
    'With the letter "L", is a home video format and the first commercial optical disc storage. One word.',
    'With the letter "M", is an American actor and filmmaker.  Produced, directed, and starred in the epic historical drama film Braveheart',
    'With the letter "N", is an independent agency of the executive branch of the United States federal government responsible for the civilian space program, as well as aeronautics and aerospace research',
    'With the letter "O", was an Irish poet and playwright. His novel The Picture of Dorian Gray',
    'With the letter "P", is a training discipline, includes running, climbing, swinging, vaulting, jumping, rolling, quadrupedal movement, and other movements as deemed most suitable for the situation.',
    'With the letter "Q", are a British rock band that formed in London in 1970. Their classic line-up was Freddie Mercury , Brian May , Roger Taylor , and John Deacon.',
    'With the letter "R", is a passive two-terminal electrical component that implements electrical resistance as a circuit element.',
    'With the letter "S",  is a chemical element with symbol Ag.A soft, white, lustrous transition metal, it exhibits the highest electrical conductivity, thermal conductivity, and reflectivity of any metal.',
    'With the letter "T", is a racket sport that can be played individually against a single opponent (singles) or between two teams of two players each (doubles).',
    'With the letter "U", is designed to protect a person against rain or sunlight. ',
    'With the letter "V", automaker founded on May 28, 1937 by the German Labour Front. Knows how "people\'s car"',
    'With the letter "W", was a music festival in the United States in 1969 which attracted an audience of over 400,000.',
    'With the letter "X", company that in 1970, opened Palo Alto Research Center, known as XPARC. The facility developed many modern computing technologies such as the graphical user interface (GUI), laser printing, WYSIWYG text editors and Ethernet.',
    'With the letter "Y", is a Japanese multimedia artist, singer, songwriter, and peace activist who is also known for her work in performance art and filmmaking. She is known for being the second wife and widow of John Lennon.',
    'With the letter "Z", is the sky and thunder god in ancient Greek religion, who ruled as king of the gods of Mount Olympus. '
  ],
  answer: [
    "athens ",
    "barack obama",
    "conan o'brien",
    "darth vader",
    "enigma",
    "fifa",
    "glasgow",
    "horse",
    "ibm",
    "jesus",
    "kuwait",
    "laserdisk",
    "mel gibson",
    "nasa",
    "oscar wilde",
    "parkour",
    "queen",
    "resistor",
    "silver",
    "tennis",
    "umbrella",
    "vespa",
    "woodstock",
    "xerox",
    "yoko ono",
    "zeus"
  ]
};

function enterButton() {
  if (stateAction == "inputPlayer1") {
    player1 = document.getElementById("inputBox").value;
    wellcome(2);
    document.getElementById("inputBox").value = "Your nickname here!";
    document.getElementById("inputBox").disabled = false;
    document.getElementById("inputBox").type = "text";
    text =
      "Wellcome " +
      player1 +
      "! <br>" +
      "Please Player 2, writte your user name:";
    document.getElementById("questions").innerHTML = text;
    changePlayerUI(2);
    stateAction = "inputPlayer2";
  } 
  
  
  
  else if (stateAction == "inputPlayer2") {
    player2 = document.getElementById("inputBox").value;
    changePlayerUI(1);
    document.getElementById("inputBox").value = " Please click enter";
    document.getElementById("inputBox").disabled = true;
    document.getElementById("inputBox").type = "text";
    text = "Wellcome " + player2 + "! Are you prepare " + player1 + "?";
    document.getElementById("questions").innerHTML = text;
    stateAction = "questionPlayer1";
    document.getElementById("audioMain").src = "mp3/questions-long.mp3";

  } 
  
  
  else if (stateAction == "questionPlayer1") {
    if (lettersPlayer1.length > 0 && lettersPlayer2.length > 0) {
      // while no emty letters some player

      document.getElementById("inputBox").disabled = false;
      document.getElementById("inputBox").type = "password";
      fback1 = askQuestionsp1(lastPosPlayer1);
        countdown("start", timePlayer1, 1);
    } else {
      results();
    }
  } 
  
  
  else if (stateAction == "questionPlayer2") {
    if (lettersPlayer1.length > 0 && lettersPlayer2.length > 0) {
      // while no emty letters some player
      document.getElementById("inputBox").disabled = false;
      document.getElementById("inputBox").type = "password";
      fback2 = askQuestionsp2(lastPosPlayer2);
      countdown("start", timePlayer2, 2);

    } else {
      results();
    }
  } 
  
  
  else if (stateAction == "changePlayer1") {
    changePlayerUI(1);
    refreshLettersUI(1);
    stateAction = "questionPlayer1";

  } 
  
  
  else if (stateAction == "changePlayer2") {
    changePlayerUI(2);
    refreshLettersUI(2);
    stateAction = "questionPlayer2";

  } 
  
  
  else if (stateAction == "answerPlayer1") {
    result1 = document.getElementById("inputBox").value;
    if (result1.toLowerCase() == 'end'){
      results();
    }  

    if (randomQuestion1.answer.indexOf(result1.toLowerCase()) >= 0) {
      // Answer it's true
      document.getElementById("inputBox").value = " Please click enter";
      document.getElementById("inputBox").disabled = true;
      document.getElementById("inputBox").type = "text";
      text = "Answer Correct!";
      updateLettersUI(1, posQuestion1, 2);
      document.getElementById("questions").innerHTML = text;
      stateAction = "questionPlayer1"; //UIPlayer('correct');
      if (pos1 + 1 == lettersPlayer1.length) {
        // Jump X  -->  A
        lastPosPlayer1 = lettersPlayer1[0];
      } else {
        lastPosPlayer1 = lettersPlayer1[pos1 + 1]; // A --> B
      }
      lettersPlayer1.splice(pos1, 1); // A, , C
      scorePlayer1++;
      return true;
    } else {
      if (result1.toLowerCase() == "pasapalabra") {
        // Change the player.
        document.getElementById("questions").innerHTML = "OK! Change the player";
        document.getElementById("inputBox").value = " Please click enter";
        document.getElementById("inputBox").disabled = true;
        document.getElementById("inputBox").type = "text";
        countdown("stop");
        stateAction = "changePlayer2";
        updateLettersUI(1, posQuestion1, 0);
        if (pos1 == lettersPlayer1.length) {
          lastPosPlayer1 = lettersPlayer1[0]; // Jump to the next one without slice
          return false;
        } else {
          lastPosPlayer1 = lettersPlayer1[pos1 + 1];
          return false;
        }
      } else {
        // Wrong answer.
        document.getElementById("questions").innerHTML = "Ups! You are wrong";
        updateLettersUI(1, posQuestion1, 3);
        document.getElementById("inputBox").value = " Please click enter";
        document.getElementById("inputBox").disabled = true;
        document.getElementById("inputBox").type = "text"; //UIPlayer('false');
        countdown("stop");
        if (pos1 == lettersPlayer1.length) {
          lastPosPlayer1 = lettersPlayer1[0];
        } else {
          lastPosPlayer1 = lettersPlayer1[pos1 + 1];
        }
        lettersPlayer1.splice(pos1, 1);
        faultPlayer1++;
        stateAction = "changePlayer2";
        return false;
      }
    }
  } 
  
  
  else if (stateAction == "answerPlayer2") {
    result2 = document.getElementById("inputBox").value;
    if (result2.toLowerCase() == "end") {
      results();
    }
    if (randomQuestion2.answer.indexOf(result2.toLowerCase()) >= 0) {
      // Answer it's true
      document.getElementById("inputBox").value = " Please click enter";
      document.getElementById("inputBox").disabled = true;
      document.getElementById("inputBox").type = "text";
      text = "Answer Correct!";
      updateLettersUI(2, posQuestion2, 2);
      document.getElementById("questions").innerHTML = text;
      stateAction = "questionPlayer2"; //UIPlayer('correct');
      if (pos2 + 1 == lettersPlayer2.length) {
        // Jump X  -->  A
        lastPosPlayer2 = lettersPlayer2[0];
      } else {
        lastPosPlayer2 = lettersPlayer2[pos2 + 1]; // A --> B
      }
      lettersPlayer2.splice(pos2, 1); // A, , C
      scorePlayer2++;
      return true;
    } else {
      if (result2.toLowerCase() == "pasapalabra") {
        // Change the player.
        document.getElementById("questions").innerHTML = "OK! Change the player";
        document.getElementById("inputBox").value = " Please click enter";
        document.getElementById("inputBox").disabled = true;
        document.getElementById("inputBox").type = "text";
        updateLettersUI(2, posQuestion2, 0);
        stateAction = "changePlayer1";
        countdown("stop");
        if (pos2 == lettersPlayer2.length) {
          lastPosPlayer2 = lettersPlayer2[0]; // Jump to the next one without slice
          return false;
        } else {
          lastPosPlayer2 = lettersPlayer2[pos2 + 1];
          return false;
        }
      } else {
        // Wrong answer.
        document.getElementById("questions").innerHTML = "Ups! You are wrong";
        document.getElementById("inputBox").value = " Please click enter";
        document.getElementById("inputBox").disabled = true;
        document.getElementById("inputBox").type = "text"; //UIPlayer('false');
        countdown("stop");
        updateLettersUI(2, posQuestion2, 3);
        if (pos2 == lettersPlayer2.length) {
          lastPosPlayer2 = lettersPlayer2[0];
        } else {
          lastPosPlayer2 = lettersPlayer2[pos2 + 1];
        }
        lettersPlayer2.splice(pos2, 1);
        faultPlayer2++;
        stateAction = "changePlayer1";
        return false;
      }
    }
  }
}

function askQuestionsp1(letter) {
  randomQuestion1 = ranQuestion();
  posQuestion1 = randomQuestion1.letter.indexOf(letter);
  pos1 = lettersPlayer1.indexOf(letter);
  updateLettersUI(1, posQuestion1, 1);
  text = randomQuestion1.question[posQuestion1];
  document.getElementById("questions").innerHTML = text;

  stateAction = "answerPlayer1";
}

function askQuestionsp2(letter) {
  randomQuestion2 = ranQuestion();
  posQuestion2 = randomQuestion2.letter.indexOf(letter);
  pos2 = lettersPlayer2.indexOf(letter);
  updateLettersUI(2, posQuestion2, 1);
  text = randomQuestion2.question[posQuestion2];
  document.getElementById("questions").innerHTML = text;

  stateAction = "answerPlayer2";
}

function wellcome(num) {
  var text = "";
  if (num == 1) {
    text = "Please Player 1, writte your user name";
  } else {
    text = "Thanks" + player1 + ". Please Player 2, writte your user name";
  }

  document.getElementById("questions").innerHTML = text;
}
function changePlayerUI(num) {
  if (num == 1) {
    document.getElementById("playerName").innerHTML = player1;
    document.getElementById("playerImg").src = "img/player1.png";
  } else {
    document.getElementById("playerName").innerHTML = player2;
    document.getElementById("playerImg").src = "img/player2.png";
  }
}
function refreshLettersUI(numPlayer) {
  var state;
  if (numPlayer == 1) {
    for (i = 0; i < letterStateUI.player1.length; i++) {
      state = letterStateUI.player1[i];

      var varClass = "round yellow";

      if (state == 1) {
        varClass = "round blue";
      } else if (state == 2) {
        varClass = "round green";
      } else if (state == 3) {
        varClass = "round red";
      } else {
        varClass = "round yellow";
      }

      document.getElementById(i).className = varClass;
    }
  } else {
    for (i = 0; i < letterStateUI.player2.length; i++) {
      state = letterStateUI.player2[i];

      var varClass = "round yellow";

      if (state == 1) {
        varClass = "round blue";
      } else if (state == 2) {
        varClass = "round green";
      } else if (state == 3) {
        varClass = "round red";
      } else {
        varClass = "round yellow";
      }

      document.getElementById(i).className = varClass;
    }
  }
}

function updateLettersUI(numPlayer, pos, state) {
  // round yellow = 0 blue = 1 green = 2 red = 3
  var varClass = "round yellow";

  if (state == 1) {
    varClass = "round blue";
  } else if (state == 2) {
    varClass = "round green";
  } else if (state == 3) {
    varClass = "round red";
  } else {
    varClass = "round yellow";
  }

  if (numPlayer == 1) {
    letterStateUI.player1[pos] = state;
    document.getElementById(pos).className = varClass;
  } else {
    letterStateUI.player2[pos] = state;
    document.getElementById(pos).className = varClass;
  }
}

//countdown('start', timePlayer1, 1);
//countdown('stop')

function countdown(startStop, time, player) {
  stopVal = 0;
  if (startStop == 'start') {
    var setCountDown = setTimeout(cDown, 1000);

    function cDown() {
      time--;
      if (player == 1) {
        timePlayer1 = time;
      } else {
        timePlayer2 = time;
      }
      if (time <= 0) { //timeout
        results(); 
      }
      else if  (time > 0 && stopVal == 0) {
        setTimeout(cDown, 1000);
      }
      document.getElementById("countdown").innerHTML =
        "<b>Countdown:</b> <br>" + time + " seconds";
    }
  } else {
    stopVal = 1;
  }
}

function results() {
  window.location.href = "finalScore.html";
    
}

function ranQuestion(){
var numRandom = Math.floor(Math.random() * 2) + 1; 

if (numRandom == 1){
  return setOfQuestions1;
}
else{
  return setOfQuestions;
}

}

