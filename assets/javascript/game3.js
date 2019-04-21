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
    characterArray: [['Moe', 'assets/images/moe_gun.png', 100, 24, 10, 10], ['marge', 'assets/images/marge_fireball.png', 200, 23, 9, 9], ['Apu', 'assets/images/apu_punch.png', 300, 22, 8, 8], ['bart', 'assets/images/bart_slingshot.png', 400, 21, 7, 7], ['Sideshow Bob', 'assets/images/bob_zombie.png', 500, 20, 6, 6], ['Ned Flanders', 'assets/images/flanders_bible.png', 600, 19, 5, 5], ['Grandpa', 'assets/images/grandpa_gun.png', 700, 18, 4, 4], ['Maggie', 'assets/images/maggie_push.png', 800, 17, 3, 3]],

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

    makeTemplateString(characterObject) {
        let templateString =

            `<div id="card-` + characterObject.index + `" class="card">
                <img class="card-image" src="` + characterObject.image + `" />
                <p class="card-text">` + characterObject.name + `</p>
            </div>`

        return templateString;
    },

    makeStatsTemplateString(characterObject) {
        let templateString =
            `<div>
                <h6>Health Points: ` + characterObject.healthPoints + `</h6>
                <h6>Attack Power: ` + characterObject.currentAttackPower + `</h6>
                <h6>Counter Power: ` + characterObject.counterPower + `</h6>
            </div>`;
        return templateString;
    },

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

    renderBattleStats() {
        // debugger;
        $('#stats-display').empty();
        this.players.forEach((element) => $('#stats-display').append(game.makeStatsTemplateString(element)));
    },

    addClickEvents() {
        $('#card-0').on('click', () => game.cardClickEvent(0));
        $('#card-1').on('click', () => game.cardClickEvent(1));
        $('#card-2').on('click', () => game.cardClickEvent(2));
        $('#card-3').on('click', () => game.cardClickEvent(3));
        $('#attack-button').on('click', () => game.battleEvent())
    },

    initializeGame() {
        this.players = [];
        this.opponentsLeft = 3;
        this.availableCharacters = [];
        $('#available-characters').empty();
        $('#battle-area').empty();
        $('#defeated-opponents').empty();
        this.generateCharactersAvailable();
        this.renderCharacterSelection();
        this.addClickEvents();
        $('#attack-button').hide();
    },

    cardClickEvent(inputIndex) {
        if (this.players.length <= 1) {
            console.log(this.players);
            this.players.push(this.availableCharacters[inputIndex]);
            this.availableCharacters.splice(inputIndex, 1);
            for (i = 0; i < this.availableCharacters.length; i++) {
                if (this.availableCharacters[i].index > inputIndex) {
                    this.availableCharacters[i].index = this.availableCharacters[i].index - 1;
                }
            }
        }

        this.renderBattleStats();
        this.renderCharacterSelection();
        this.renderBattleCards();
        this.addClickEvents();
        $('#attack-button').show();
    },

    battleEvent() {
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
        this.renderBattleStats();
    },
};

game.initializeGame();

// $('#attack-button').on('click', () => game.battleEvent())