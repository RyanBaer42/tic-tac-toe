var newGame = new Game()

var gameBoard = document.getElementById("game-board")
var gameBoxes = document.querySelectorAll(".grid-block")
var player1Wins = document.getElementById("player1-wins")
var player2Wins = document.getElementById("player2-wins")
var turnIndicator= document.querySelector(".turn-indicator")

gameBoard.addEventListener('click', function(event){
    chooseBox(event)
})

function chooseBox(event){
    for(var i = 0; i < gameBoxes.length; i++){
        if (event.target.id === gameBoxes[i].id && gameBoxes[i].innerText === ''){
            displayToken(gameBoxes[i])
            newGame.chooseBlock(gameBoxes[i].id)
            checkForWinner()
            displayCurrentTurn()
        }
    }
}

function displayToken(selectedBox){
    selectedBox.innerText = newGame.currentPlayer.token
}

function checkForWinner(){
    newGame.checkForWinner()
    if (newGame.hasWon === true){
        turnIndicator.innerText = `${newGame.currentPlayer.token} has won!`
        displayPlayerWins()
        setTimeout("resetGame()", 5000);
    }
}

function displayCurrentTurn(){
    if (newGame.hasWon === false){
        turnIndicator.innerText = `It's ${newGame.currentPlayer.token}'s turn!`;
        newGame.changeTurns();
    } 
}

function displayPlayerWins(){
    player1Wins.innerText = `${newGame.player1.wins} Wins`
    player2Wins.innerText = `${newGame.player2.wins} Wins`
}

function resetGame(){
    for (let i = 0; i < gameBoxes.length; i++){
        gameBoxes[i].innerText = ''
    }
    newGame.resetGameData()
    displayNewGameTurn()
}

function displayNewGameTurn(){
    turnIndicator.innerText = `It's ${newGame.currentPlayer.token}'s turn!`;
}