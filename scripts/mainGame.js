function generateRandomNumber(range) {
    return Math.floor(Math.random()*range)+1
}
//This function generates a random number between 1 and the variable 'range'

var numTries = 0;
var popup = true;
var randomNumber = generateRandomNumber(10);
var level = 1;
const levelText = document.getElementById("level");
const input = document.getElementById("input");
const button = document.getElementById("button");
//Initialized and declared variables

function handleSubmit() {
    if(randomNumber==input.value) {
        //This code will run if the user correctly guesses the randomly generated number

        numTries++;
        alert(`Well done! That took ${numTries} tries!`)
        level++;
        levelText.innerText = `Level ${level}`;
        randomNumber = generateRandomNumber(10*level);
        //Generate a new random number when the old one has been guessed

        input.value = "";
        //Clear the input box

        numTries = 0;
        //Reset the numbr of tries for the next level

        if(level==11) {
            window.location.replace("public/winner.html")
            //Redirect the user to 'winner.html' if the user reaches level 10
        }
    } else {
        //This code will run if the user incorrectly guesses a number

        if(popup) {
            //This code will run if the variable 'popup', which is Boolean, is set to true
            //It will be set to false once it has been run once.

            alert("Incorrect guess, try again.")
            alert("In future, you will not see this popup box, rather the input box will be cleared.")
            popup = false;
            input.value = "";
            //Reset input box and make sure this code will not run again
        } else {
            //This code will run if the popup has already been viewed
            input.value = "";
            //Reset input box value
        }
        numTries++;
        //Automatically increment the variable 'numTries' if the user guesses incorrectly
    }
}
button.addEventListener("click", handleSubmit);
//Listen for the click event on the submit button; if clicked run the function 'handleSubmit', which will check if user input is correct, or not
input.addEventListener("keypress", function(e) {
    if(e.key == "Enter") {
        handleSubmit();
    }
})
//Listen for 'Enter' event in teh input box, in which case run teh same process as if submit button has been clicked


//Thanks examiner!
