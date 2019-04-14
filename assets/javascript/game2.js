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
    activeOpponent: {},

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
    },
    updateBattleOpponentCard: function (characterObject) {
        // $('#battle-opponent-image').attr('src', characterObject.image);
        $('#battle-opponent-name').text(characterObject.name);
        $('#battle-opponent-HP').text(characterObject.healthPoints);
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
        //lower opponent HP by userCharacter currentAttackPower
        //lower userCharacter HP by counterAttackPower
        //increase userCharacter currentAttackPower by baseAttackPower
        //check if either character HP <= 0
        //if so call this.removeCharacter()
        //update the text in the battle cards
    },

    removeCharacter: function () {
        //move characterCard to the defeated area
        //set this.activeOpponent to {}
        //set this.gameActive to false
    },

    selectOpponent: function (characterObject) {
        //moves the selected opponentCard to the battle area
        //sets this.activeOpponenet to opponentClicked
        //sets this.gameActive to true
        this.activeOpponent = characterObject;
        this.updateBattleOpponentCard(this.activeOpponent);

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

    //on click listeners
    $('#character-one-button').on('click', function () {
        if (game.isActive === false) {
            game.selectUserCharacter(characterObjectOne);
        } else if (game.isActive === true) {
            game.selectOpponent(characterObjectOne);
        };

    });
    $('#character-two-button').on('click', function () {
        if (game.isActive === false) {
            game.isActive = true;
            game.selectUserCharacter(characterObjectTwo);
        } else if (game.isActive === true) {
            game.selectOpponent(characterObjectTwo);
        };

    });
    $('#character-three-button').on('click', function () {
        if (game.isActive === false) {
            game.isActive = true;
            game.selectUserCharacter(characterObjectThree);

        } else if (game.isActive === true) {
            game.selectOpponent(characterObjectThree);
        };

    });
    $('#character-four-button').on('click', function () {
        if (game.isActive === false) {
            game.isActive = true;
            game.selectUserCharacter(characterObjectFour);
        } else if (game.isActive === true) {
            game.selectOpponent(characterObjectFour);
        };

    });

});




