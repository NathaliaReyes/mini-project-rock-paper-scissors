var wins = 0;
var losses = 0;
var ties = 0;
var start = confirm("Do you want to play Rock, Paper, Scissors? ");



function play() {
    if(start) {
        var userChoice = prompt("Do you choose rock, paper or scissors?");
        var computerChoice = Math.random();
    
        function user() {
            if (userChoice === "rock" || userChoice === "paper" || userChoice === "scissors") {
                console.log("You chose " + userChoice);
            } else {
                console.log("You didn't choose rock, paper or scissors.");
            }
        }
        
        function computer() {
            if (computerChoice < 0.34) {
                computerChoice = "rock";
            } else if (computerChoice <= 0.67) {
                computerChoice = "paper";
            } else {
                computerChoice = "scissors";
            }
        }
    
    
        function compare(userChoice, computerChoice) {
            if (userChoice === computerChoice) {
                ties++;
                return "TIE!";
            } else if (userChoice === "rock") {
                if (computerChoice === "scissors") {
                    wins++;
                    return "You won!";
                } else {
                    losses++;
                    return "Computer won :(";
                }
            } else if (userChoice === "paper") {
                if (computerChoice === "rock") {
                    wins++;
                    return "You won!";
                } else {
                    losses++;
                    return "Computer won :(";
                }
            } else if (userChoice === "scissors") {
                if (computerChoice === "rock") {
                    losses++;
                    return "Computer won :(";
                } else {
                    wins++;
                    return "You won!";
                }
            }
        }
    
        user();
        computer();
        console.log("Computer chose: " + computerChoice);
        console.log(compare(userChoice, computerChoice));
        console.log("Wins: " + wins + ", Losses: " + losses + ", Ties: " + ties);
    
    } else {
        alert("Maybe next time.");
        return;
    }
}

play();

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





