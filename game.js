class Game {
    constructor(){
        this.player1 = new Player(1, '⭐');
        this.player2 = new Player(2, '❤️');
        this.started = this.player1
        this.currentPlayer = this.player1;
        this.hasWon = false;

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
        if (this.started === this.player1){
            this.started = this.player2
            this.currentPlayer = this.player2
        } else if (this.started === this.player2){
            this.started = this.player1
            this.currentPlayer = this.player1
        }
    }
}