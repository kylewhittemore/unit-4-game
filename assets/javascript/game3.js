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
    characterArray: [['homer', '', 100, 24, 10, 10], ['marge', 'there', 200, 23, 9, 9], ['lisa', 'school', 300, 22, 8, 8], ['bart', 'factory', 400, 21, 7, 7], ['milhouse', 'playground', 500, 20, 6, 6], ['ralph', 'class', 600, 19, 5, 5], ['nelson', 'whatever', 700, 18, 4, 4], ['principle skinner', 'office', 800, 17, 3, 3], ['martin', 'broom closet', 900, 16, 2, 2]],

    generateCharactersAvailable: function () {
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

    makeTemplateString: function (characterObject) {
        let templateString =
            `<div id="card-` + characterObject.index + `" class="card m-2" style="width: 18rem;">
            <div class="card-body">
                <img class=" img-thumbnail" src="./assets/images/SImpsons Sprites/apu_punch.png" />
                <h5 class="card-title">` + characterObject.name + `</h5>
                <h6 class="card-subtitle mb-2 text-muted">Current AP: ` + characterObject.currentAttackPower + `</h6>
                <h6 class="card-subtitle mb-2 text-muted">Counter: ` + characterObject.counterPower + `</h6>
                <p class="card-text">` + characterObject.healthPoints + `</p>
            </div>
        </div>`;
        return templateString;
    },

    renderDefeatedOpponents: function () {
        $('#defeated-opponents').html('');
        this.defeatedOpponents.forEach(function (element) {
            let templateString = game.makeTemplateString(element);
            $('#defeated-opponents').append(templateString);
        });
    },


    renderCharacterSelection: function () {
        $('#available-characters').html('');
        this.availableCharacters.forEach(function (element) {
            let templateString = game.makeTemplateString(element);
            $('#available-characters').append(templateString);
        });
    },
    
    renderBattleCards: function () {
        $('#battle-area').html('');
        this.players.forEach(function (element) {
            let templateString = game.makeTemplateString(element);
            $('#battle-area').append(templateString);
        });
    },

    addClickEvents: function () {
        $('#card-0').on('click', function () {
            let index = 0;
            game.cardClickEvent(index);
        });
        $('#card-1').on('click', function () {
            let index = 1;
            game.cardClickEvent(index);
        });
        $('#card-2').on('click', function () {
            let index = 2;
            game.cardClickEvent(index);
        });
        $('#card-3').on('click', function () {
            let index = 3;
            game.cardClickEvent(index);
        });    
    },

    initializeGame: function () {
        this.players = [],
        this.opponentsLeft = 3;
        this.availableCharacters = [];
        $('#available-characters').html('');
        $('#battle-area').html('');
        $('#defeated-opponents').html('');
        this.generateCharactersAvailable();
        this.renderCharacterSelection();
        this.addClickEvents();
    },

    cardClickEvent: function (inputIndex) {
        if (this.players.length <= 1) {
            this.players.push(this.availableCharacters[inputIndex]);
            this.availableCharacters.splice(inputIndex, 1);
            for (i = 0; i < this.availableCharacters.length; i++) {
                if (this.availableCharacters[i].index > inputIndex) {
                    this.availableCharacters[i].index = this.availableCharacters[i].index - 1;
                }
            }
        }
        this.renderCharacterSelection();
        this.renderBattleCards();
        this.addClickEvents();
    },

    battleEvent: function () {
        let user = this.players[0];
        let comp = this.players[1];
        
        user.healthPoints -= comp.counterPower;
        comp.healthPoints -= user.currentAttackPower;
        
        if (user.healthPoints <= 0) {
            alert('you lose');
            this.initializeGame();
        } else if (comp.healthPoints <= 0) {
            alert('you win')
            comp.healthPoints = 0;
            this.defeatedOpponents.push(this.players.pop());
            this.renderDefeatedOpponents();
        } else {
            user.currentAttackPower += user.baseAttackPower;
        }
        this.renderBattleCards();
    },
};

game.initializeGame();

$('#attack-button').on('click', function() {
    game.battleEvent();
})