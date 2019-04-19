class Character {
    constructor(character) { //is passed a character array
        this.name = character[0];
        this.image = character[1];
        this.healthPoints = character[2];
        this.counterPower = character[3];
        this.currentAttackPower = character[4];
        this.baseAttackPower = character[5];
    }
};

const game = {
    isActive: false,
    userCharacter: {},
    activeOpponent: false,
    opponentsLeft: 3,
    characterObjectOne: {},
    characterObjectTwo: {},
    characterObjectThree: {},
    characterObjectFour: {},
    needsReset: false,
    characterArray: [['homer', 'not here', 100, 24, 10, 10], ['marge', 'there', 200, 23, 9, 9], ['lisa', 'school', 300, 22, 8, 8], ['bart', 'factory', 400, 21, 7, 7], ['milhouse', 'playground', 500, 20, 6, 6], ['ralph', 'class', 600, 19, 5, 5], ['nelson', 'whatever', 700, 18, 4, 4], ['principle skinner', 'office', 800, 17, 3, 3], ['martin', 'broom closet', 900, 16, 2, 2]],

    updateCharacterOneCard: function (characterObject) {
        $('#opponent-one').show();
        // $('#opponent-one-image').attr('src', characterObject.image);
        $('#opponent-one-name').text(characterObject.name);
        $('#opponent-one-HP').text(characterObject.healthPoints);
        $('#character-one-button').text(characterObject.name);
    },
    updateCharacterTwoCard: function (characterObject) {
        $('#opponent-two').show();
        // $('#opponent-two-image').attr('src', characterObject.image);
        $('#opponent-two-name').text(characterObject.name);
        $('#opponent-two-HP').text(characterObject.healthPoints);
        $('#character-two-button').text(characterObject.name);
    },
    updateCharacterThreeCard: function (characterObject) {
        $('#opponent-three').show();
        // $('#opponent-three-image').attr('src', characterObject.image);
        $('#opponent-three-name').text(characterObject.name);
        $('#opponent-three-HP').text(characterObject.healthPoints);
        $('#character-three-button').text(characterObject.name);
    },
    updateCharacterFourCard: function (characterObject) {
        $('#opponent-four').show();
        // $('#opponent-four-image').attr('src', characterObject.image);
        $('#opponent-four-name').text(characterObject.name);
        $('#opponent-four-HP').text(characterObject.healthPoints);
        $('#character-four-button').text(characterObject.name);
    },
    updateBattleUserCard: function (characterObject) {
        // $('#battle-user-image').attr('src', characterObject.image);
        $('#battle-user-name').text(characterObject.name);
        $('#battle-user-HP').text(characterObject.healthPoints);
        $('#battle-user-attack').text(characterObject.currentAttackPower)
    },
    updateBattleOpponentCard: function (characterObject) {
        // $('#battle-opponent-image').attr('src', characterObject.image);
        $('#battle-opponent-name').text(characterObject.name);
        $('#battle-opponent-HP').text(characterObject.healthPoints);
        $('#battle-opponent-counter').text(characterObject.counterPower)
    },

    selectUserCharacter: function (characterObject) {
        $('.start-button').attr('disabled', true);
        this.userCharacter = characterObject;
        game.isActive = true;
        console.table(game.userCharacter);
        this.updateBattleUserCard(this.userCharacter);
    },

    generateCharactersAvailable: function () {
        let randNumArray = [];
        for (i = 0; i < 4; i++) {
            let randNum = Math.floor(Math.random() * this.characterArray.length);
            while (randNumArray.includes(randNum)) {
                randNum = Math.floor(Math.random() * this.characterArray.length);
                // console.log('randnum until valid', randNum);
            };
            randNumArray.push(randNum);
            // console.table(this.characterArray[randNum])
        };

        this.characterObjectOne = new Character(this.characterArray[randNumArray[0]]);
        this.characterObjectTwo = new Character(this.characterArray[randNumArray[1]]);
        this.characterObjectThree = new Character(this.characterArray[randNumArray[2]]);
        this.characterObjectFour = new Character(this.characterArray[randNumArray[3]]);

        this.updateCharacterOneCard(this.characterObjectOne);
        this.updateCharacterTwoCard(this.characterObjectTwo);
        this.updateCharacterThreeCard(this.characterObjectThree);
        this.updateCharacterFourCard(this.characterObjectFour);
    },

    battleEvent: function () {
        this.activeOpponent.healthPoints -= this.userCharacter.currentAttackPower;
        //check for defeat here :)
        this.userCharacter.healthPoints -= this.activeOpponent.counterPower;
        if (this.userCharacter.healthPoints <= 0) {
            this.activeOpponent = false;
            this.isActive = false;
            $('.game-button').attr('disabled', true);
            $('#start-button').attr('disabled', false);
            //put loss logic here
            alert('you lose');
            this.resetBoard();
           
        } else if (this.activeOpponent.healthPoints <= 0) {
            this.opponentsLeft--;
            this.activeOpponent = false;
            $('.game-button').attr('disabled', true);
            $('#start-button').attr('disabled', false);
            //put win logic here
            if (game.opponentsLeft === 0) {
                this.resetBoard();
                this.isActive = false;
            }
            alert('you won');
        } else {
            this.userCharacter.currentAttackPower += this.userCharacter.baseAttackPower;
            this.updateBattleOpponentCard(this.activeOpponent);
            this.updateBattleUserCard(this.userCharacter);
        }
    },

    selectOpponent: function (characterObject) {
        if (this.activeOpponent === false) {
            this.activeOpponent = characterObject;
           
            this.updateBattleOpponentCard(this.activeOpponent);
            $('.character-button').attr('disabled', true);
            $('#attack-button').attr('disabled', false);
        }
    },

    resetBoard: function () {
        isActive: false,
        this.userCharacter = {};
        this.activeOpponent = false;
        this.opponentsLeft = 3;
        this.generateCharactersAvailable();
        $('#battle-user-name').text('');
        $('#battle-user-HP').text('');
        $('#battle-user-attack').text('');
        $('#battle-opponent-name').text('');
        $('#battle-opponent-HP').text('');
        $('#battle-opponent-counter').text('')

    }

};

$(document).ready(function () {

    game.generateCharactersAvailable(game.characterArray);

   

    //set the screen so that the user has to press start to begin the game
    $('.game-button').attr('disabled', true);

    //on click listeners
    $('#start-button').on('click', function () {
        
        $('.game-button').attr('disabled', false);
        $('#attack-button').attr('disabled', true);
        $(this).attr('disabled', true);
    });
    $('#attack-button').on('click', function () {
        game.battleEvent();
    });

    $('#opponent-one').on('click', function() {
        alert('click event');
    })

    $('#character-one-button').on('click', function () {
        debugger;
        if (!game.isActive) {
            game.selectUserCharacter(game.characterObjectOne);
            $('#opponent-one').hide();
        } else if (game.isActive) {
            game.selectOpponent(game.characterObjectOne);
            $('#opponent-one').hide();
        };

    });

    $('#character-two-button').on('click', function () {
        debugger;
        if (!game.isActive) {
            game.isActive = true;
            game.selectUserCharacter(game.characterObjectTwo);
            $('#opponent-two').hide();
        } else if (game.isActive) {
            game.selectOpponent(game.characterObjectTwo);
            $('#opponent-two').hide();
        };

    });

    $('#character-three-button').on('click', function () {
        debugger;
        if (!game.isActive) {
            game.isActive = true;
            game.selectUserCharacter(game.characterObjectThree);
            $('#opponent-three').hide();
        } else if (game.isActive) {
            game.selectOpponent(game.characterObjectThree);
            $('#opponent-three').hide();
        };
    });

    $('#character-four-button').on('click', function () {
        debugger;
        if (!game.isActive) {
            game.isActive = true;
            game.selectUserCharacter(game.characterObjectFour);
            $('#opponent-four').hide();
        } else if (game.isActive) {
            game.selectOpponent(game.characterObjectFour);
            $('#opponent-four').hide();
        };
    });
});




