let characterArray = [['homer', 'not here', 100, 24, 10, 10], ['marge', 'there', 200, 23, 9, 9], ['lisa', 'school', 300, 22, 8, 8], ['bart', 400, 21, 7, 7]]

class Character {
    constructor(character) {
        this.name = character[0];
        this.image = character[1];
        this.healthPoints = character[2];
        this.position = '';
        this.isValidChoice = true;
        this.isStyled = false;
    }
};

class User extends Character {
    constructor(character) {
        super(character);
        this.currentAttackPower = character[4];
        this.baseAttackPower = character[5];
        this.attackEvent = function () {

        }
    }
};

class Opponent extends Character {
    constructor(character) {
        super(character);
        this.counterPower = character[3];
    }
};

class Game {
    constructor() {
        this.gameActive = false;
        this.playerUser = {};
        this.playersComputer = [];

        this.startGame = function() {
            this.playerUser = this.selectAvatar();
            this.playersComputer = this.generateOpponents();
            // this.selectOpponent();
            this.gameActive = true;

            // while (gameState = true) {
            //     //wait here for clickevents to drive the game
            //     $('#attack-button').on('click', function() {
            //         this.updateBoard();
            //     if (this.playerUser.healthPoints <= 0 || this.playersComputer.healthPoints <= 0) {
            //         gameState = false;
            //     }
            //     })
            // }
        };

        this.generateOpponents = function() {
            //returns array of objects holding the three opponents drawn from the potential players array
            let opponentsArray = [characterArray[1], characterArray[2], characterArray[3]];
            return opponentsArray;
        };

        // this.updateBoard = function() {

        // };

        // this.endGame = function(result) {
        //     if (result) {
        //         //display win msg
        //     } else {
        //         //display loss msg
        //     };
        //     //display a win/loss message
        //     //reset game counters and players
        //     //prompt to press [ENTER] to this.startGame();
        // };

        // this.selectOpponent = function () {
        //     //prompt user to select an enemy
        //     //listen for a click
        //     // this.updateBoard();
        //     return opponentObject;

        // };

        this.selectAvatar = function() {
            // returns a single object that is the users character choice
            // this.updateBoard();
            return characterArray[0];
        };
    }
};

let newGame = new Game();
newGame.startGame();




