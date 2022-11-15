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
        if (event.target.id === gameBoxes[i].id && gameBoxes[i].innerText === '' && !newGame.hasWon){
            displayToken(gameBoxes[i])
            newGame.chooseBlock(gameBoxes[i].id)
            checkForWinner()
            checkForDraw()
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
        setTimeout("resetGame()", 3000);
    }
}

function checkForDraw(){
    newGame.checkForDraw()
    if (newGame.hasDraw === true){
        declareDraw()
        setTimeout('resetGame()', 3000)
    }
}

function displayCurrentTurn(){
    if (newGame.hasWon === false && newGame.hasDraw === false){
        newGame.changeTurns();
        turnIndicator.innerText = `It's ${newGame.currentPlayer.token}'s turn!`;
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

function declareDraw(){
    turnIndicator.innerText = 'Its a draw!'
}