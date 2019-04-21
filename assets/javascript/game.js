class Character {
    constructor(character) { //is passed a character array
        this.name = character[0];
        this.image = character[1];
        this.healthPoints = character[2];
        this.counterPower = character[3];
        this.currentAttackPower = character[4];
        this.baseAttackPower = character[5];
        this.index;
    }
};

const game = {
    players: [],
    defeatedOpponents: [],
    availableCharacters: [],
    characterArray: [['Moe', 'assets/images/moe_gun.png', 100, 8, 10, 10], ['Marge', 'assets/images/marge_fireball.png', 110, 10, 9, 9], ['Apu', 'assets/images/apu_punch.png', 110, 12, 8, 8], ['Bart', 'assets/images/bart_slingshot.png', 120, 3, 7, 7], ['Bob', 'assets/images/bob_zombie.png', 120, 5, 6, 6], ['Flanders', 'assets/images/flanders_bible.png', 110, 12, 4, 4], ['Grandpa', 'assets/images/grandpa_gun.png', 100, 10, 4, 4], ['Maggie', 'assets/images/maggie_push.png', 100, 10, 5, 5]],

    // This is so there are four unique, randomly selected characters available for each game. They are pushed to the availableCharacters arrray to begin their flow through the game.
    generateCharactersAvailable() {
        let randNumArray = [];
        for (i = 0; i < 4; i++) {
            let randNum = Math.floor(Math.random() * this.characterArray.length);
            while (randNumArray.includes(randNum)) {
                randNum = Math.floor(Math.random() * this.characterArray.length);
            };
            randNumArray.push(randNum);
            let newCharacter = new Character(this.characterArray[randNum]);
            newCharacter.index = i;
            this.availableCharacters.push(newCharacter);
        };
    },
    
    // The two template string generators avoid redundancy by generating the relevant CSS for whichever character object is passed to them.
    makeTemplateString(characterObject) {
        let templateString =
            `<div id="card-` + characterObject.index + `" class="card">
                <img class="card-image" src="` + characterObject.image + `" />
                <p class="card-text">` + characterObject.name + `</p>
                <p class="card-text">HP: ` + characterObject.healthPoints + `</p>
                <p class="card-text">AP: ` + characterObject.currentAttackPower + `</p>
                <p class="card-text">CP: ` + characterObject.counterPower + `</p>
            </div>`
        return templateString;
    },

    // There are three '.render....' methods, one for each major screen area.  Since all of the information for each element to be rendered is stored in arrays, these methods can simply be called to update the screen areas to reflect the contents of each array. 
    renderDefeatedOpponents() {
        $('#defeated-opponents').empty();
        this.defeatedOpponents.forEach((element) => $('#defeated-opponents').append(game.makeTemplateString(element)));
    },

    renderCharacterSelection() {
        $('#available-characters').empty();
        this.availableCharacters.forEach((element) => $('#available-characters').append(game.makeTemplateString(element)));
    },

    renderBattleCards() {
        $('#battle-area').empty();
        this.players.forEach((element) => $('#battle-area').append(game.makeTemplateString(element)));
    },

    // since the html of each display is emptied every render, there is also a method to re-apply the click listeners to each character.
    addClickEvents() {
        $('#card-0').on('click', () => game.cardClickEvent(0));
        $('#card-1').on('click', () => game.cardClickEvent(1));
        $('#card-2').on('click', () => game.cardClickEvent(2));
        $('#card-3').on('click', () => game.cardClickEvent(3));
    },

    initializeGame() {
        this.players = [];
        this.opponentsLeft = 3;
        this.availableCharacters = [];
        this.defeatedOpponents = [];
        $('#available-characters').empty();
        $('#battle-area').empty();
        $('#defeated-opponents').empty();
        $('#attack-button').hide();
        this.generateCharactersAvailable();
        this.renderCharacterSelection();
        this.addClickEvents();
    },

    cardClickEvent(inputIndex) {
        if (this.players.length <= 1) {
            this.players.push(this.availableCharacters[inputIndex]);
            this.availableCharacters.splice(inputIndex, 1);
            for (i = 0; i < this.availableCharacters.length; i++) {
                if (this.availableCharacters[i].index > inputIndex) {
                    this.availableCharacters[i].index = this.availableCharacters[i].index - 1;
                }
            }
        }
        if (this.players.length === 1) {
            $('#screen-text').text('Choose Your Opponent:');
        } else if (this.players.length === 2){
            $('#screen-text').text('Battle!');
        };
        if (this.players.length > 1) {$('#attack-button').show()};
        this.renderCharacterSelection();
        this.renderBattleCards();
        this.addClickEvents();
    },

    battleEvent() {
        let user = this.players[0];
        let comp = this.players[1];
        user.healthPoints -= comp.counterPower;
        comp.healthPoints -= user.currentAttackPower;

        if (user.healthPoints <= 0) {
            $('#screen-text').text('Defeat! Choose A New Character');

            this.initializeGame();
        } else if (comp.healthPoints <= 0 && this.availableCharacters.length < 1) {
            $('#screen-text').text('You have Defeated All Opponents! Select a Character To Play Again!');
         
            this.initializeGame();
        } else if (comp.healthPoints <= 0) {
            $('#screen-text').text('Victory! Choose Your Next Opponent:');
            this.players[1].healthPoints = 0;
            this.defeatedOpponents.push(this.players.pop());
        } else {
            user.currentAttackPower += user.baseAttackPower;
        }
        
        this.renderDefeatedOpponents();
        this.renderBattleCards();
    },
};

game.initializeGame();
$('#attack-button').on('click', () => game.battleEvent())