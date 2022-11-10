var player1 = new Player(1, 'star');
var player2 = new Player(2, 'heart');
var newGame = new Game(player1, player2)

newGame.trackTurns("topLeft")

newGame.trackTurns("bottomLeft")

newGame.trackTurns("topMiddle")

newGame.trackTurns("bottomMiddle")

newGame.trackTurns("topRight")

newGame.trackTurns("topLeft")

console.log(newGame.player1.wins)
console.log(newGame.player2.wins)