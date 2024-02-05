function getComputerChoice(){
    const choices = ["rock","paper","scissors"];
    let compChoice = Math.floor(Math.random()*choices.length);
    return choices[compChoice];
}

function playRound(player) {
    let result = "";
    let computer = getComputerChoice();
  
    // Converted to single conditional statement
    if (player === computer) {
      result = "tie";
    } else if (player === "rock" && computer === "paper") {
      result = "You Lose! Paper beats Rock";
    } else if (player === "rock" && computer === "scissors") {
      result = "You Win! Rock beats Scissors";
    } else if (player === "paper" && computer === "scissors") {
      result = "You Lose! Scissors beats Paper";
    } else if (player === "paper" && computer === "rock") {
      result = "You Win! Paper beats Rock";
    } else if (player === "scissors" && computer === "rock") {
      result = "You Lose! Rock beats Scissors";
    } else if (player === "scissors" && computer === "paper") {
      result = "You Win! Scissors beats Paper";
    }
    return result;
  }

//create variables
const buttonDiv = document.querySelector("#choice");
const rockBtn = document.createElement('button');
const paperBtn = document.createElement('button');
const scissorsBtn = document.createElement('button');

//name buttons
rockBtn.textContent = "ROCK";
paperBtn.textContent = "PAPER";
scissorsBtn.textContent = "SCISSORS";

//Append buttons to buttonDiv element
buttonDiv.appendChild(rockBtn);
buttonDiv.appendChild(paperBtn);
buttonDiv.appendChild(scissorsBtn);

//more variables
const resultDiv = document.querySelector("#result");
const scoreDiv = document.querySelector("#scores");
const outcome = document.createElement("p");
const player = document.createElement("h3");
const comp = document.createElement("h3");


// // 5 rounds function
// function game(rounds){
//     let playerWins = 0;
//     let compWins = 0;
//     let win = "";
//     let currentRound = 1;

//     player.textContent = `Player: ${playerWins}`;
//     comp.textContent =  `Computer: ${compWins}`;
//     scoreDiv.appendChild(player);
//     scoreDiv.appendChild(comp);

//     if((currentRound <= rounds) && (playerWins+compWins !== 5)){
//         // Add event listeners with player choice argument
//     rockBtn.addEventListener("click", () => {
//         win = playRound("rock");
//         outcome.textContent = win;
  
//         // Calculate wins
//         if (win.includes("You Lose!")) {
//           compWins++;
//           currentRound++;
//         } else if (win.includes("You Win!")) {
//           playerWins++;
//           currentRound++;
//         }
        
//         //append results to div
//         resultDiv.appendChild(outcome);
//         //display overall winner
//         player.textContent = `Player: ${playerWins}`;
//         comp.textContent =  `Computer: ${compWins}`;
//         scoreDiv.appendChild(player);
//         scoreDiv.appendChild(comp);
        
//     });
//     paperBtn.addEventListener("click", () => {
//         win = playRound("paper");
//         outcome.textContent = win;
  
//         // Calculate wins
//         if (win.includes("You Lose!")) {
//           compWins++;
//           currentRound++;
//         } else if (win.includes("You Win!")) {
//           playerWins++;
//           currentRound++;
//         }

//         //append results to div
//         resultDiv.appendChild(outcome);
//         //display overall winner
//         player.textContent = `Player: ${playerWins}`;
//         comp.textContent =  `Computer: ${compWins}`;
//         scoreDiv.appendChild(player);
//         scoreDiv.appendChild(comp);
//     });
//     scissorsBtn.addEventListener("click", () => {
//         win = playRound("scissors");
//         outcome.textContent = win;
  
//         // Calculate wins
//         if (win.includes("You Lose!")) {
//           compWins++;
//           currentRound++;
//         } else if (win.includes("You Win!")) {
//           playerWins++;
//           currentRound++;
//         }

//         //append results to div
//         resultDiv.appendChild(outcome);
//         //display overall winner
//         player.textContent = `Player: ${playerWins}`;
//         comp.textContent =  `Computer: ${compWins}`;
//         scoreDiv.appendChild(player);
//         scoreDiv.appendChild(comp);
//     });

   

//     }else{
//         resultDiv.textContent = "GAME OVER";
//     }
// }

// game(5);

// Existing code (getComputerChoice, playRound, button creation) remains the same

function game(rounds) {
    let playerWins = 0;
    let compWins = 0;
    let win = "";
    let currentRound = 1;
  
    player.textContent = `Player: ${playerWins}`;
    comp.textContent = `Computer: ${compWins}`;
    scoreDiv.appendChild(player);
    scoreDiv.appendChild(comp);
  
    // Event listeners attached within the game function
    rockBtn.addEventListener("click", () => {
      if ((playerWins + compWins !== 5)) {
        win = playRound("rock");
        outcome.textContent = win;
  
        // Calculate wins and update scores
        if (win.includes("You Lose!")) {
          compWins++;
        } else if (win.includes("You Win!")) {
          playerWins++;
        }
  
        // Append results and update scores display
        resultDiv.appendChild(outcome);
        player.textContent = `Player: ${playerWins}`;
        comp.textContent = `Computer: ${compWins}`;
        scoreDiv.appendChild(player);
        scoreDiv.appendChild(comp);
  
        // currentRound++; // Increment round counter
      } else {
        resultDiv.textContent = "GAME OVER";
      }
    });
  
    // Event listeners for paper and scissors buttons (similar logic)
    paperBtn.addEventListener("click", () => {
      if ((playerWins + compWins !== 5)) {
        win = playRound("paper");
        outcome.textContent = win;
  
        // Calculate wins and update scores
        if (win.includes("You Lose!")) {
          compWins++;
        } else if (win.includes("You Win!")) {
          playerWins++;
        }
  
        // Append results and update scores display
        resultDiv.appendChild(outcome);
        player.textContent = `Player: ${playerWins}`;
        comp.textContent = `Computer: ${compWins}`;
        scoreDiv.appendChild(player);
        scoreDiv.appendChild(comp);
  
        // currentRound++; // Increment round counter
      } else {
        resultDiv.textContent = "GAME OVER";
      }
    });
  
    scissorsBtn.addEventListener("click", () => {
      if ((playerWins + compWins !== 5)) {
        win = playRound("scissors");
        outcome.textContent = win;
  
        // Calculate wins and update scores
        if (win.includes("You Lose!")) {
          compWins++;
        } else if (win.includes("You Win!")) {
          playerWins++;
        }
  
        // Append results and update scores display
        resultDiv.appendChild(outcome);
        player.textContent = `Player: ${playerWins}`;
        comp.textContent = `Computer: ${compWins}`;
        scoreDiv.appendChild(player);
        scoreDiv.appendChild(comp);
  
        // currentRound++; // Increment round counter
      } else {
        resultDiv.textContent = "GAME OVER";
      }
    });
  }
  
  game(5); // Start the game with 5 rounds
  