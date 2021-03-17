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
let array = [value1];
let save = "";
function combination (array, index, value, decreasing, output){
    if(decreasing < 0){
        return;
    }
    if(decreasing == 0){
        output += "( ";
        for(var i=0; i<index; i++){
            output += array[i]+" ";
        }
        output += "), ";
    }
    console.log(output);
    output = "";

    var previous = (index == 0) ? 1 : array[index-1];

    for(var i = previous; i <= value; i++){
        combination(array, index+1, value, decreasing-i, output);
    }
} 
combination(array, 0, value1, value1, save);

if((value1 + value2) > 8){
    alert("Error! Please, enter the score correctly")
}
else if(value1<0 || value2<0){
    alert("Score can not be negative number, please edit it!")
}
else{
    alert("It is working")
}


/* function for forEach */

function output(item) {
  console.log(item);
}

}


/* Add event listener*/
document.getElementById("start").addEventListener("click", function() {
    start();1
});