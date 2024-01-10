function getComputerChoice(){
    const choices = ["rock","paper","scissors"];
    let compChoice = Math.floor(Math.random()*choices.length);
    return choices[compChoice];
}


function playRound(player, computer){
    let winner = "none";

    if(player == "rock"){
        if(computer == "rock"){
            console.log("tie\nReplay round");
            winner = "tie";
        }else if(computer == "paper"){
            console.log("You Lose! Paper beats Rock");
            winner = "comp";
        }else if(computer == "scissors"){
            console.log("You Win! Rock beats Scissors");
            winner = "player";
        }
        return winner;
    }else if(player == "paper"){
        if(computer == "paper"){
            console.log("tie\nReplay round");
            winner = "tie";
        }else if(computer == "scissors"){
            console.log("You Lose! Scissors beats Paper");
            winner = "comp";
        }else if(computer == "rock"){
            console.log("You Win! Paper beats Rock");
            winner = "player";
        }
        return winner;
    }else if(player == "scissors"){
        if(computer == "scissors"){
            console.log("tie\nReplay round");
            winner = "tie";
        }else if(computer == "rock"){
            console.log("You Lose! Rock beats Scissors");
            winner = "comp";
        }else if(computer == "paper"){
            console.log("You Win! Scissors beats Paper");
            winner = "player";
        }
        return winner;
    }
}

function game(){
    let playerWins = 0;
    let compWins = 0;
    
    for(let i = 0; i<5; i++){
        const playerSelection = prompt("Enter the name of your weapon: ");
        let win = playRound(playerSelection, getComputerChoice());
        if (win == "comp"){
            compWins++ ;
        }else if(win == "player"){
            playerWins++ ;
        }else if(win == "tie"){
            console.log("Tie, Play Round again");
            i--;
        }
        console.log(`Player: ${playerWins}\nComputer: ${compWins}`);
    }
}

game();
