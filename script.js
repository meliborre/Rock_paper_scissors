// ====================== HTML Elements Start ======================
let scorePlayerDisplay = document.getElementById ("scorePlayer")

let scoreCpuDisplay = document.getElementById("scoreCpu")

let playerSeleccionDisplay = document.getElementById ("playerSeleccion")

let computerSelectionDisplay = document.getElementById ("computerSelection")

let winnerDisplay = document.getElementById ("winnerDisplay")

let finalWinnerDisplay = document.getElementById ("winner")

let finalScore = document.getElementById ("finalScore")

let endGameScreen = document.querySelector(".Mega-finalScore")

let playAgainBtn = document.getElementById ("playAgainBtn")
// ====================== HTML Elements End ======================


// ====================== Helper Functions Start ======================
function getComputerChoice() {
    
    let numRam = Math.floor(Math.random() * 3)

    if (numRam == 0) {
        return "piedra";
    }
    else if (numRam == 1) {
        return "papel";
    }
    else if (numRam == 2) {
        return "tijera"; 
    }
}
//enable and disable buttoms//
function disableButtons() {
    b_piedra.classList.add('disable-options');
    b_papel.classList.add('disable-options');
    b_tijera.classList.add('disable-options');
}

function enableButtons() {
    b_piedra.classList.remove('disable-options');
    b_papel.classList.remove('disable-options');
    b_tijera.classList.remove('disable-options');
}

function checkForWinner() {
    //cambio textcontent con la var
    if (humanScore >= 5) {
      finalWinnerDisplay.textContent = "HUMAN"
      finalScore.textContent = humanScore + " - " + computerScore
      // endGameScreen.setAttribute ("style", "display: block")
      endGameScreen.classList.add('Show-Mega-finalScore');
      disableButtons();
  } 
  
   //cambio textcontent con getelementbyid
  if (computerScore >= 5) {
      document.getElementById("winner").textContent = "CPU"
      document.getElementById ("finalScore").textContent = `${computerScore} - ${humanScore}`
      // endGameScreen.setAttribute ("style", "display: block");
      endGameScreen.classList.add('Show-Mega-finalScore');
      disableButtons();
  }
}

function playRound(compuChoice, playerChoice) {

    let resultVar 

    if ((compuChoice == "piedra" && playerChoice == "tijera") || 
        (compuChoice == "tijera" && playerChoice == "papel") || 
        (compuChoice == "papel" && playerChoice == "piedra" )) 
    {
        computerScore++
        scoreCpuDisplay.textContent = computerScore
        resultVar = "Gano la compu!";
        
    } 

    else if (compuChoice == playerChoice) {
        resultVar = "Empate!";
    }

    else {
        humanScore++
        scorePlayerDisplay.textContent = humanScore
        resultVar = "Ganaste!"
    }

    winnerDisplay.textContent = resultVar
}

function resetGame() {
    endGameScreen.classList.remove('Show-Mega-finalScore')
    humanScore = 0;
    computerScore = 0;

    scorePlayerDisplay.textContent = humanScore;
    scoreCpuDisplay.textContent = computerScore;

    playerSeleccionDisplay.textContent = "";
    computerSelectionDisplay.textContent = "";
    winnerDisplay.textContent = "";

    enableButtons();
}
// ====================== Helper Functions End ======================

// ====================== Main Functions Start ======================
function playGame(valor_b) {

    let computerSelection = getComputerChoice();
    let playerSelection = valor_b;

    playerSeleccionDisplay.textContent = playerSelection;
    computerSelectionDisplay.textContent = computerSelection;

    playRound(computerSelection, playerSelection);

    checkForWinner();
}
// ====================== Main Functions End ======================


// ====================== Event listeners Start ======================
let b_piedra = document.getElementById("piedra")

function playGamePiedra() {
    playGame("piedra")
}
b_piedra.addEventListener("click", playGamePiedra) 


let b_papel = document.getElementById("papel")
b_papel.addEventListener("click",  function() {
    playGame("papel")
})

let b_tijera = document.getElementById("tijera")
b_tijera.addEventListener("click", function() {
    playGame("tijera")
})

// si no tiene parantesis la funcion, esta solo haciendo referencia y la va a buscar al momento del click
playAgainBtn.addEventListener ("click", resetGame)
// ====================== Event listeners End ======================

let humanScore = 0;
let computerScore = 0;

