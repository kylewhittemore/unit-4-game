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
    }
    attackEvent = function () {
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
        this.playerUser = {};
        this.playersComputer = [];
        this.currentOpponent = {};
    }
    startGame = function () {
        console.log('new game');
        newGame.selectOpponent(true);
        this.playerUser = this.selectAvatar();
        console.table(this.playerUser);
        this.playersComputer = this.generateOpponents();
        console.table(this.playersComputer);
        newGame.selectOpponent(true);
    };
    generateOpponents = function () {
        //returns array of objects holding the three opponents drawn from the potential players array
        let opponentsArray = [characterArray[1], characterArray[2], characterArray[3]];
        $('#opponent-one').text(opponentsArray[0][0]);
        $('#opponent-two').text(opponentsArray[1][0]);
        $('#opponent-three').text(opponentsArray[2][0]);
        return opponentsArray;
    }
    selectAvatar = function () {
        this.selectOpponent()
        return characterArray[0];
    }
    selectOpponent = function (value) {
        //lets maybe do this with a .toggleClass()
        if (value === true) {
            $('#start-button').attr('disabled', true);
            $('#quit-button').attr('disabled', true);
            $('#attack-button').attr('disabled', true);
            $('#opponent-one').attr('enabled');
            $('#opponent-two').attr('enabeled');
            $('#opponent-three').attr('enabled');
        } else if (value === false) {
            $('#start-button').attr('enabled');
            $('#quit-button').attr('enabled');
            $('#attack-button').attr('enabled');
            $('#opponent-one').attr('disabled', 'disabled');
            $('#opponent-two').attr('disabled', 'disabled');
            $('#opponent-three').attr('disabled', 'disabled');
        }
    }

    updateBoard = function () {

    }
    endGame = function (result) {
        // if (result) {
        //     //display win msg
        // } else {
        //     //display loss msg
        // };
        //display a win/loss message
        //reset game counters and players
        //prompt to press [ENTER] to this.startGame();
    };
};

let newGame = new Game();
newGame.selectOpponent(false);
$('#start-button').on('click', function () {
    // $('#start-button').attr('disabled', 'disabled');
   
    console.log('start!');
    newGame.startGame();
});

$('#attack-button').on('click', function () {
    console.log('attack event!');
});

$('#opponent-one').on('click', function () {
    console.log('Marge!');
    let marge = new Opponent(characterArray[1]);
    console.table(marge);
    newGame.currentOpponent = marge;
    newGame.selectOpponent(false);
});
$('#opponent-two').on('click', function () {
    console.log('Marge!');
    let lisa = new Opponent(characterArray[2]);
    console.table(lisa);
    newGame.currentOpponent = lisa;
    newGame.selectOpponent(false);
});
$('#opponent-three').on('click', function () {
    console.log('Marge!');
    let bart = new Opponent(characterArray[3]);
    console.table(bart);
    newGame.currentOpponent = bart;
    newGame.selectOpponent(false);
});




