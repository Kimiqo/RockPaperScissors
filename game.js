// Game Logic
let playerScore = 0;
let computerScore = 0;
let drawCount = 0;
const maxRounds = 5;
let currentRound = 0;

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerChoice, computerChoice) {
    const resultDiv = document.getElementById('result');
    const playerScoreDiv = document.querySelector('.player-score');
    const computerScoreDiv = document.querySelector('.computer-score');
    const currentRoundDiv = document.getElementById('current-round');
    const drawCountDiv = document.getElementById('draw-count');

    currentRound++;
    currentRoundDiv.textContent = currentRound;

    if (playerChoice === computerChoice) {
        resultDiv.textContent = "It's a tie!";
        drawCount++;
        drawCountDiv.textContent = drawCount;
    } else if (
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "scissors" && computerChoice === "paper")
    ) {
        playerScore++;
        resultDiv.textContent = `You win! ${playerChoice} beats ${computerChoice}`;
    } else {
        computerScore++;
        resultDiv.textContent = `Computer wins! ${computerChoice} beats ${playerChoice}`;
    }

    playerScoreDiv.textContent = `Player: ${playerScore}`;
    computerScoreDiv.textContent = `Computer: ${computerScore}`;

    if (currentRound >= maxRounds) {
        endGame();
    }
}

function endGame() {
    const resultDiv = document.getElementById('result');
    const choiceDiv = document.getElementById('choice');
    
    choiceDiv.innerHTML = '<button id="reset">Play Again</button>';
    
    if (playerScore > computerScore) {
        resultDiv.textContent = `You won the game ${playerScore}-${computerScore}! `;
    } else if (playerScore < computerScore) {
        resultDiv.textContent = `Computer won the game ${computerScore}-${playerScore}. `;
    } else {
        resultDiv.textContent = `The game is a tie ${playerScore}-${computerScore}! `;
    }

    document.getElementById('reset').addEventListener('click', resetGame);
}

function resetGame() {
    playerScore = 0;
    computerScore = 0;
    drawCount = 0;
    currentRound = 0;

    document.getElementById('result').textContent = 'Make your choice!';
    document.querySelector('.player-score').textContent = 'Player: 0';
    document.querySelector('.computer-score').textContent = 'Computer: 0';
    document.getElementById('current-round').textContent = '0';
    document.getElementById('draw-count').textContent = '0';

    const choiceDiv = document.getElementById('choice');
    choiceDiv.innerHTML = `
        <button id="rock">Rock</button>
        <button id="paper">Paper</button>
        <button id="scissors">Scissors</button>
    `;
    setupGameListeners();
}

function setupGameListeners() {
    const buttons = document.querySelectorAll('#choice button');
    buttons.forEach(button => {
        button.addEventListener('click', (e) => {
            const playerChoice = e.target.id;
            const computerChoice = getComputerChoice();
            playRound(playerChoice, computerChoice);
        });
    });
}

// Initialize the game
setupGameListeners();