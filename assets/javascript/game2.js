let characterArray = [['homer', 'not here', 100, 24, 10, 10], ['marge', 'there', 200, 23, 9, 9], ['lisa', 'school', 300, 22, 8, 8], ['bart', 400, 21, 7, 7]]

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

// class Card {
//     constructor(character) { //is passed a character object
//         this.name = character.name;
//         this.image = character.image;
//         this.healthPoints = character.healthPoints;
//         this.counterPower = character.counterPower;
//         this.currentAttackPower = character.currentAttackPower;
//         this.baseAttackPower = character.baseAttackPower;
//         this.position = '';
//     }
// }

const game = {
    isActive: false,
    userCharacter: {},
    randomThreeOpponents: [],
    activeOpponent: {},

    updateCharacterOneCard: function (characterObject) {
        $('#opponent-one-image').attr('src', $(this).image);
        $('#opponent-one-name').text($(this).name);
        $('#opponent-one-hp').text($(this).healthPoints);
        $('#character-one-button').text($(this).name);
    },
    updateCharacterTwoCard: function () {
        $('#opponent-two-image').attr('src', '');
        $('#opponent-two-name').text('');
        $('#opponent-two-hp').text('');
        $('#character-two-button').text('');

    },
    updateCharacterThreeCard: function () {
        $('#opponent-three-image').attr('src', '');
        $('#opponent-three-name').text('');
        $('#opponent-three-hp').text('');
        $('#character-three-button').text('');
    },
    updateBattleUserCard: function () {
        $('#battle-user-image').attr('src', '');
        $('#battle-user-name').text('');
        $('#battle-user-hp').text('');
    },
    updateBattleOpponentCard: function () {
        $('#battle-opponent-image').attr('src', '');
        $('#battle-opponent-name').text('');
        $('#battle-opponent-hp').text('');
    },

    selectUserCharacter: function () {
        //disable buttons except characters
        //jumbotron prompts to select character
        //button chooses character
        //create a userCard object with the character object selected 
        //move card to the battle Area
    },

    selectCharacters: function () {
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

    selectOpponent: function (opponentClicked) {
        //moves the selected opponentCard to the battle area
        //sets this.activeOpponenet to opponentClicked
        //sets this.gameActive to true
    }
};

//on click listeners
$('#character-one').on('click', function () {

});

$('#character-two').on('click', function () {

});
$('#character-three').on('click', function () {

});

