let characterArray = [['homer', 'not here', 100, 24, 10, 10], ['marge', 'there', 200, 23, 9, 9], ['lisa', 'school', 300, 22, 8, 8], ['bart', 'factory', 400, 21, 7, 7]]

class Character {
    constructor(character) { //is passed a character array
        this.name = character[0];
        this.image = character[1];
        this.healthPoints = character[2];
        this.counterPower = character[3];
        this.currentAttackPower = character[4];
        this.baseAttackPower = character[5];
        this.cardPosition; //
    }
};

const game = {
    isActive: false,
    userCharacter: {},
    randomThreeOpponents: [],
    activeOpponent: false,

    // I think that handlebars could be useful here
    //having a seperate function for each card seems redundant
    //the issue is im not sure how to generate the proper unique id for each card
    //come back to this on refactor
    updateCharacterOneCard: function (characterObject) {
        // $('#opponent-one-image').attr('src', characterObject.image);
        $('#opponent-one-name').text(characterObject.name);
        $('#opponent-one-HP').text(characterObject.healthPoints);
        $('#character-one-button').text(characterObject.name);
    },
    updateCharacterTwoCard: function (characterObject) {
        // $('#opponent-two-image').attr('src', characterObject.image);
        $('#opponent-two-name').text(characterObject.name);
        $('#opponent-two-HP').text(characterObject.healthPoints);
        $('#character-two-button').text(characterObject.name);
    },
    updateCharacterThreeCard: function (characterObject) {
        // $('#opponent-three-image').attr('src', characterObject.image);
        $('#opponent-three-name').text(characterObject.name);
        $('#opponent-three-HP').text(characterObject.healthPoints);
        $('#character-three-button').text(characterObject.name);
    },
    updateCharacterFourCard: function (characterObject) {
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
        //disable buttons except characters
        //jumbotron prompts to select character
        //button chooses character
        //create a userCard object with the character object selected 
        //move card to the battle Area
        this.userCharacter = characterObject;
        game.isActive = true;
        console.table(game.userCharacter);
        this.updateBattleUserCard(this.userCharacter);
    },

    generateOpponents: function () {
        //the three opponents are selected from the characterArray
        //create three opponentCards
        //after selection the opponents are displayed
        //display characters stats on the battle cards
    },

    battleEvent: function () {

        //update the text in the battle cards
        this.activeOpponent.healthPoints -= this.userCharacter.currentAttackPower;
        //check for defeat here :)
        this.userCharacter.healthPoints -= this.activeOpponent.counterPower;
        if (this.userCharacter.healthPoints <= 0) {
            
            //put loss logic here
            alert('you lose');
        } else if (this.activeOpponent.healthPoints <= 0) {
            
            //put win logic here
            alert('you won');
        } else {
            this.userCharacter.currentAttackPower += this.userCharacter.baseAttackPower;
            this.updateBattleOpponentCard(this.activeOpponent);
            this.updateBattleUserCard(this.userCharacter);
        }
    },

    removeCharacter: function () {
        //move characterCard to the defeated area
        //set this.activeOpponent to {}
        //set this.gameActive to false
    },

    selectOpponent: function (characterObject) {
        if (this.activeOpponent === false) {
            this.activeOpponent = characterObject;
            console.table(this.activeOpponent);
            this.updateBattleOpponentCard(this.activeOpponent);
            $('.character-button').attr('disabled', true);

        }
    }
};

$(document).ready(function () {
    let characterObjectOne = new Character(characterArray[0]);
    let characterObjectTwo = new Character(characterArray[1]);
    let characterObjectThree = new Character(characterArray[2]);
    let characterObjectFour = new Character(characterArray[3]);
    game.updateCharacterOneCard(characterObjectOne);
    game.updateCharacterTwoCard(characterObjectTwo);
    game.updateCharacterThreeCard(characterObjectThree);
    game.updateCharacterFourCard(characterObjectFour);

    $('.game-button').attr('disabled', true);
    //on click listeners

    $('#start-button').on('click', function () {
        $('.game-button').attr('disabled', false);
    });
    $('#attack-button').on('click', function () {
        game.battleEvent();
    });

    $('#character-one-button').on('click', function () {
        if (game.isActive === false) {
            game.selectUserCharacter(characterObjectOne);
            $('#opponent-one').hide();
        } else if (game.isActive === true) {
            game.selectOpponent(characterObjectOne);
            $('#opponent-one').hide();
        };

    });
    $('#character-two-button').on('click', function () {
        if (game.isActive === false) {
            game.isActive = true;
            game.selectUserCharacter(characterObjectTwo);
            $('#opponent-two').hide();
        } else if (game.isActive === true) {
            game.selectOpponent(characterObjectTwo);
            $('#opponent-two').hide();
        };

    });
    $('#character-three-button').on('click', function () {
        if (game.isActive === false) {
            game.isActive = true;
            game.selectUserCharacter(characterObjectThree);
            $('#opponent-three').hide();
        } else if (game.isActive === true) {
            game.selectOpponent(characterObjectThree);
            $('#opponent-three').hide();
        };

    });
    $('#character-four-button').on('click', function () {
        if (game.isActive === false) {
            game.isActive = true;
            game.selectUserCharacter(characterObjectFour);
            $('#opponent-four').hide();
        } else if (game.isActive === true) {
            game.selectOpponent(characterObjectFour);
            $('#opponent-four').hide();
        };
    });
});




