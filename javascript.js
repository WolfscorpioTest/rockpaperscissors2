function getComputerChoice(){
    let compNum = Math.floor(Math.random() * 3);
    if (compNum == 0){
        return "rock";
    } else if (compNum == 1){
        return "scissors";
    } else {
        return "paper";
    }
    
}

function game(){
    let playerChoice = prompt("Rock, Paper, Scissors");
    playerChoice = playerChoice.toLowerCase();
    let computerChoice = getComputerChoice();
    console.log(computerChoice);
    if (playerChoice == computerChoice){
        return "Tie";
    } else if ((playerChoice == "rock" && computerChoice == "scissors") || (playerChoice == "paper" && computerChoice == "rock") ||(playerChoice == "scissors" && computerChoice == "paper") ) {
        return "Player wins";
    } else {
        return "Computer wins";
    }

    
}
for (let i = 0 ; i < 5 ; i++){
console.log(game());
}