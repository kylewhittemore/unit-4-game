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
        //attacks opponent reducing opponent hp
        //raises users hp by baseAttackPower
        //puts counter-attack on user
        
    }
};

class Opponent extends Character {
    constructor(character) {
        super(character);
        this.counterPower = character[3];
    }
};

const game = {
        playerUser: {},
        playersComputer: [],
        currentOpponent: {},

    startGame: function () {
        this.playerUser = {};
        this.playersComputer = [];
        this.currentOpponent = {};
        this.toggleButtons(true);
        this.playerUser = this.selectAvatar();
        this.playersComputer = this.generateOpponents();
        this.toggleButtons(true);
    },

    generateOpponents: function () {
        // for loop to push 3 characters[random]
        
        let opponentsArray = [ characterArray[0], characterArray[1], characterArray[2], characterArray[3]];
        $('#opponent-one').text(opponentsArray[0][0]);
        $('#opponent-two').text(opponentsArray[1][0]);
        $('#opponent-three').text(opponentsArray[2][0]);
        $('#opponent-four').text(opponentsArray[3][0]);
        return opponentsArray;
    },
    selectAvatar: function () {
        this.toggleButtons()
        return characterArray[0];
    },
    selectOpponent: function (value) {

    },

    toggleButtons: function (value) {
        if (value === true) {
            $('.action-button').prop('disabled', true);
            $('.opponent-button').prop('disabled', false);
        } else if (value === false) {
            $('.action-button').prop('disabled', false);
            $('.opponent-button').prop('disabled', true);
        }
    },

    updateBoard: function () {

    },
    endGame: function (result) {
    }
};

// let newGame = new Game();
// newGame.toggleButtons(false);
$('#start-button').on('click', function () {
    console.log('start!');
    game.startGame();
});

$('#attack-button').on('click', function () {
    console.log('attack event!');
});

$('#opponent-one').on('click', function () {
    if (game.playerUser) {
    }
    game.currentOpponent = game.playersComputer[0];
    console.table(game.currentOpponent);
    game.toggleButtons(false);
});

$('#opponent-two').on('click', function () {
    game.currentOpponent = game.playersComputer[1];
    console.table(game.currentOpponent);
    game.toggleButtons(false);
});

$('#opponent-three').on('click', function () {
    game.currentOpponent = game.playersComputer[2];
    console.table(game.currentOpponent);
    game.toggleButtons(false);
});




