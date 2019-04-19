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
    availableCharacters: [],
    characterArray: [['homer', 'not here', 100, 24, 10, 10], ['marge', 'there', 200, 23, 9, 9], ['lisa', 'school', 300, 22, 8, 8], ['bart', 'factory', 400, 21, 7, 7], ['milhouse', 'playground', 500, 20, 6, 6], ['ralph', 'class', 600, 19, 5, 5], ['nelson', 'whatever', 700, 18, 4, 4], ['principle skinner', 'office', 800, 17, 3, 3], ['martin', 'broom closet', 900, 16, 2, 2]],

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
                <img class=" img-thumbnail" src="" />
                <h5 class="card-title">` + characterObject.name + `</h5>
                <h6 class="card-subtitle mb-2 text-muted">` + characterObject.currentAttackPower + `</h6>
                <p class="card-text">` + characterObject.healthPoints + `</p>
            </div>
        </div>`;
        return templateString;
    },

    renderCharacterSelection: function () {
        $('#available-characters').html('');
        this.availableCharacters.forEach(function (element) {
            let templateString = game.makeTemplateString(element);
            $('#available-characters').append(templateString);
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

    renderBattleCards: function () {
        $('#battle-area').html('');
        this.players.forEach(function (element) {
            let templateString = game.makeTemplateString(element);
            $('#battle-area').append(templateString);
        })
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
        this.players[1].healthPoints -= this.players[0].currentAttackPower;
        this.players[0].healthPoints -= this.players[1].counterPower;
        if (this.players[0].healthPoints <= 0) {
            alert('you lose');
            this.initializeGame();
        } else if (this.players[1].healthPoints <= 0 && this.players.length > 1) {
            this.players.pop();
            this.renderBattleCards();
            alert('you win');
        } else if (this.players[1].healthPoints <= 0 && this.players.length === 1) {
            //win game overall.
            
        } else {
            this.players[0].currentAttackPower += this.players[0].baseAttackPower;
            this.renderBattleCards();
        }
    },
};

game.initializeGame();

$('#attack-button').on('click', function() {
    game.battleEvent();
})

