const players1 = document.getElementById("players1");
const players2 = document.getElementById("players2");

const start = () => {

let playersValue1 = players1.value, playersValue2 = players2.value;
let playerNames1 = [], playerNames2 = [];
let counter = 0;
let saveword = "";

function players (value, names, counter, saveword){
    for (var i = 0; i < value.length; i++){
        if (value[i] != "," && value[i] != " "){
                saveword += value[i];
            }
        if (value[i] == " " || i == value.length-1){
            names.push(saveword);
            saveword = "";
            counter++;
        }
    }
    if(counter > 11){
        alert("The number of players in the team cannot be more than 11")
    }
    else if(counter == 0){
        alert("Please, enter the name of players")
    }
    return names;
}

let names1 = players(playersValue1, playerNames1, counter, saveword);
let names2 = players(playersValue2, playerNames2, counter, saveword);
console.log("Members of 1st team: ")
names1.forEach(output);
console.log("Members of 2nd team: ")
names2.forEach(output);


let value1 = document.getElementById("score1").value;
let value2 = document.getElementById("score2").value;

function getlist(value){
let savelist = "";
switch(Number(value)){
    case 1:
        savelist += "(1)";
        break;
    case 2:
        savelist += "(1, 1), (2)";
        break;
    case 3:
        savelist += "(1, 1, 1), (1, 2), (3)";
        break;
    case 4:
        savelist += "(1, 1, 1, 1), (1, 1, 2), (1, 3), (2, 2), (4)";
        break;
    case 5:
        savelist += "(1, 1, 1, 1, 1), (1, 1, 1, 2), (1, 1, 3), (1, 2, 2), (1, 4), (5)";
        break;
    case 6:
        savelist += "(1, 1, 1, 1, 1, 1), (1, 1, 1, 1, 2), (1, 1, 1, 3), (1, 1, 2, 2), (1, 1, 4), (1, 2, 3), (1, 5), (2, 2, 2), (2, 4), (6)";
        break;
    case 7:
        savelist += "(1, 1, 1, 1, 1, 1, 1), (1, 1, 1, 1, 1, 2), (1, 1, 1, 1, 3), (1, 1, 1, 4), (1, 1, 2, 3), (1, 1, 5), (1, 2, 2, 2), (1, 2, 4), (7)";
        break;
}
return (savelist);
}

let list1 = getlist(value1);
let list2 = getlist(value2);

if((Number(value1) + Number(value2)) > 7){
    alert("Error! Please, enter the score correctly")
}
else if(value1<0 || value2<0){
    alert("Score can not be negative number, please edit it!")
}

if(value1>value2){
    document.getElementById("result").innerHTML = "The winner team is 1, the score list of team 1 can be "+ list1 + " and the score list of team 2 is " + list2;
}

if(value1<value2){
    document.getElementById("result").innerHTML = "The winner team is 2, the score list of team 1 can be " + list1+ " and the score list of team 2 is " + list2;
}

if(value1==value2){
    document.getElementById("result").innerHTML = "Friendship won, the score list of team 1 can be " + list1 + " and the score list of team 2 is" + list2;
}


/* function for forEach */

function output(item) {
  console.log(item);
}

}

/* Add event listener*/
document.getElementById("start").addEventListener("click", function() {
    start();
});