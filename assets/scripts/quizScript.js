console.log("hello world");

//taken from - https://www.w3schools.com/js/js_random.asp
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min) ) + min;
}


//set maps for Quiz answers
let goalScorers = new Map();

goalScorers.set(
    '2018', {"Mohamed Salah" : 22,
            "Sergio Aguero" : 21,
            "Eden Hazard" : 16,
            "Richarlison" : 13,
            "Harry Kane" : 17,
            "Jamie Vardy" : 18,
            "Pierre-Emerick Aubameyang" : 22},
);

goalScorers.set(
    '2017', {"Mohammed Salah" : 32,
            "Sergio Aguero" : 21,
            "Eden Hazard" : 12,
            "Raheem Sterling" : 18,
            "Harry Kane" : 30,
            "Jamie Vardy" : 20,
            "Pierre-Emerick Aubameyang" : 10},
);

goalScorers.set(
    '2010', {"Dimitar Berbatov" : 20,
            "Carlos Tevez" : 20,
            "Chicarito" : 13,
            "Robin van Persie" : 18,
            "DJ Campbell" : 13,
            "Andy Carroll" : 13,
            "Darren Bent" : 17},
);

goalScorers.set(
    '2012', {"Christian Benteke" : 20,
            "Gareth Bale" : 21,
            "Luis Suárez" : 23,
            "Robin van Persie" : 26,
            "Michu" : 18,
            "Romelu Lukaku" : 17},
);

//console.log(goalScorers.get("2012"));

let goalAssists = new Map();

goalAssists.set(
    '2018',{"Mohammed Salah" : 10,
            "Eden Hazard" : 15,
            "Ryan Fraser" : 14,
            "Trent Alexander-Arnold" : 12
});

let premierLeagueAppearances = new Map();

premierLeagueAppearances.set(
    'alltime',{"Gareth Barry" : 653,
                "Ryan Giggs" : 632,
                "James Milner" : 552,
                "Emile Heskey" : 516,
                "John Terry" : 492
});


//set question functions

function mostPerSeason(inputMap) {
    
    //function to choose 3 random players
    let outputMap = chooseThreePlayers(inputMap);


}

function chooseThreePlayers(inputMap) {
    let mapItemCount = inputMap.size;
    let chosenKeyNum = getRndInteger(0,mapItemCount);
    let mapKeys = inputMap.keys();
    let chosenMapKey;

    //console.log(chosenKeyNum);

    //iterate through keys until the key position in the map matches the random chosenKeyNum number
    let loopCounter = 0;
    for(key of mapKeys) {
        if(chosenKeyNum == loopCounter) {
            //if the random chosenKeyNum matches the current loop counter, assign the key to chosenMapKey and break, we now know what season we want to ask about
            chosenMapKey = key;
            break;
        }
        else {
            loopCounter++;
        }
    }

    
    console.log("chosen Map Key " + chosenMapKey)

    console.log(inputMap.get(chosenMapKey))


    let chosenPlayers = pickThree(inputMap.get(chosenMapKey));

    //using chosenPlayers, use get method to pull entries for goalscorers, assists, appearances, etc...

    

}

function pickThree(inputIterable) {
    let namesList = [];
    let chosenNameIndexes = [];
    let chosenNames = [];

    for(key in inputIterable) {
        //console.log(key);
        namesList.push(key);

    }



    while(chosenNameIndexes.length < 3) {
        let chosenIndex = getRndInteger(0,namesList.length);
        let alreadyPicked = chosenNameIndexes.includes(chosenIndex);

        if(alreadyPicked == false) {
            chosenNameIndexes.push(chosenIndex);
        }
    }

    console.log(chosenNameIndexes);

    for(index in chosenNameIndexes){
        chosenNames.push(namesList[index]);
    }

    return chosenNames;

}

mostPerSeason(goalScorers);