class Game {
    constructor(player1,player2){
        this.player1 = player1;
        this.player2 = player2;
        this.turn = player1;
        this.gameData = {
            topLeft: 0,
            topMiddle:0,
            topRight: 0,
            middleLeft: 0,
            middleMiddle: 0,
            middleRight: 0,
            bottomLeft: 0,
            bottomMiddle: 0,
            bottomRight: 0,
        };
    }
    trackTurns(chosenBlock){
        if (this.turn === this.player1 && this.gameData[chosenBlock] === 0){
            this.gameData[chosenBlock] = 1
            this.checkForWinner()
            this.turn = this.player2
        } else if (this.turn === this.player2 && this.gameData[chosenBlock] === 0){
            this.gameData[chosenBlock] = 1
            this.checkForWinner()
            this.turn = this.player1
        } 
    }
    checkForWinner(){
        if (this.gameData.topLeft === 1 && this.gameData.topMiddle === 1 && this.gameData.topRight === 1){
            this.turn.increaseWins()
            
        }
    }
}