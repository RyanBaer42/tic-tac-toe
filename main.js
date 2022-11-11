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
            newGame.trackTurns(gameBoxes[i].id)
            displayToken(gameBoxes[i])
        }
    }
}

function displayToken(selectedBox){
    selectedBox.innerText = newGame.currentPlayer.token
}