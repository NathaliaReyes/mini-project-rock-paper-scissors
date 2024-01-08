const ROCK = 'rock';
const PAPER = 'paper';
const SCISSORS = 'scissors';

var wins = 0;
var losses = 0;
var ties = 0;

var userChoice = "";
var computerChoice = "";


function play() {

    var start = confirm("Do you want to play Rock, Paper, Scissors?");

    if(start) {
        userChoice = prompt("Do you choose rock, paper or scissors?");
        computerChoice = computer();
        user();
        console.log("Computer chose: " + computerChoice);
        console.log(compare(userChoice, computerChoice));
        console.log("Wins: " + wins + ", Losses: " + losses + ", Ties: " + ties);
        console.log("------------------------------------------------------------------");
    } else {
        alert("Maybe next time.");
        return;
    }
}


function user() {
    
    if (userChoice === "rock" || userChoice === "paper" || userChoice === "scissors") {
        console.log("You chose " + userChoice);
    } else {
        console.log("You didn't choose rock, paper or scissors.");
    }
}

function computer() {
    var number = Math.floor(Math.random() * 3);
    switch(number) {
        case 0:
            return ROCK;
        case 1:
            return PAPER;
        case 2:
            return SCISSORS;
    }
}

function compare(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        ties++;
        return "TIE!";
        
    } else if (userChoice === ROCK) {

        if (computerChoice === SCISSORS) {
            wins++;
            return "You won!";
        } else {
            losses++;
            return "Computer won :(";
        }
    } else if (userChoice === PAPER) {
        if (computerChoice === ROCK) {
            wins++;
            return "You won!";
        } else {
            losses++;
            return "Computer won :(";
        }
    } else if (userChoice === SCISSORS) {
        if (computerChoice === ROCK) {
            losses++;
            return "Computer won :(";
        } else {
            wins++;
            return "You won!";
        }
    }
}


    


do {
    var playAgain = confirm("Do you want to play again?");
    if(playAgain) {
        console.log("------------------------------------------------------------------");
        play();
        
    } else {
        alert("Maybe next time.");
        break;
    }
} while(playAgain);





