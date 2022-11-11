var newGame = new Game()

newGame.trackTurns("topRight")

newGame.trackTurns("bottomLeft")

newGame.trackTurns("middleMiddle")

newGame.trackTurns("bottomMiddle")

newGame.trackTurns("middleRight")

newGame.trackTurns("bottomRight")

console.log(newGame.player1.wins)
console.log(newGame.player2.wins)