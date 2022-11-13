class Game {
    constructor(){
        this.player1 = new Player(1, '⭐');
        this.player2 = new Player(2, '❤️');
        this.started = this.player1;
        this.currentPlayer = this.player1;
        this.hasWon = false;
        this.hasDraw = false
        this.winningCombinations = [
            ['topLeft', 'topMiddle', 'topRight'],
            ['middleLeft', 'middleMiddle', 'middleRight'],
            ['bottomLeft', 'bottomMiddle', 'bottomRight'],
            ['topLeft', 'middleLeft', 'bottomLeft'],
            ['topMiddle', 'middleMiddle', 'bottomMiddle'],
            ['topRight', 'middleRight', 'bottomRight'],
            ['topLeft', 'middleMiddle', 'bottomRight'],
            ['topRight', 'middleMiddle', 'bottomLeft']
        ];
        this.gameData = {};
    }
    chooseBlock(chosenBlock){
        if (this.currentPlayer === this.player1){
            this.gameData[chosenBlock] = this.player1.id
        } else if (this.currentPlayer === this.player2){
            this.gameData[chosenBlock] = this.player2.id
        } 
    }
    changeTurns(){
        if (this.currentPlayer === this.player1){
            this.currentPlayer = this.player2
        } else if (this.currentPlayer === this.player2){
            this.currentPlayer = this.player1;
        }
    }

    checkForWinner(){
        for (var i = 0; i < this.winningCombinations.length; i++){
            if (this.gameData[this.winningCombinations[i][0]] === this.currentPlayer.id && 
                this.gameData[this.winningCombinations[i][1]] === this.currentPlayer.id && 
                this.gameData[this.winningCombinations[i][2]] === this.currentPlayer.id){
                    this.currentPlayer.increaseWins()
                    this.hasWon = true
            }
        }
    }
    resetGameData(){
        this.gameData = {}
        this.hasWon = false
        this.hasDraw = false
        if (this.started === this.player1){
            this.started = this.player2
            this.currentPlayer = this.player2
        } else if (this.started === this.player2){
            this.started = this.player1
            this.currentPlayer = this.player1
        }
    }
    checkForDraw(){
        if (this.gameData['topLeft'] > 0 &&
            this.gameData['topMiddle'] > 0 &&
            this.gameData['topRight'] > 0 &&
            this.gameData['middleLeft'] > 0 &&
            this.gameData['middleMiddle'] > 0 &&
            this.gameData['middleRight'] > 0 &&
            this.gameData['bottomLeft'] > 0 &&
            this.gameData['bottomMiddle'] > 0 &&
            this.gameData['bottomRight'] > 0 && this.hasWon === false) {
                this.hasDraw = true
        }
    } 
}