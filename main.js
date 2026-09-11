// Fill in your attributes for your character. (Look at basic_types.js for help.)
// Fill in attributes that add up to 100 (health + attack + defense = 100)
// Make sure to install node, javascript run extension, prompt-sync

let playerName;
let health;
let attack;
let defense;
let hasKey;

// prints out to your console
// console.log('playerName: ' + playerName + ', health: ' + health + ', attack: ' + attack + ', defense: ' + defense + ', hasKey: ' + hasKey);



// Classes
// Fill in your hero class with your variables from before. 
class Hero {
    constructor(name, health, attack, defense) {
        this.name;
        this.health;
        this.attack;
        this.defense;
        this.hasKey = false;
        this.gear = [];

        
    }

    // This prints out your hero in a clean way. 
    toString() {
        return `
    Hero: ${this.name}
    Health: ${this.health}
    Attack: ${this.attack}
    Defense: ${this.defense}
    Has Key: ${this.hasKey}
    Gear: ${this.gear}
            `;
    }
}

// Instantiate your Hero 
let hero = new Hero();


// console.log(hero.toString());

const prompt = require('prompt-sync')();
const choice = prompt("Choose your path:\n 1) Forest\n 2) Cave\n 3) Castle\n Make sure you put JUST the number of your choice.\n");

if (choice == 1) {
    console.log("You enter the forest...");
    console.log("You found a Wooden Sword!");

    gear.push('Wooden Sword');

} else if (choice == 2) {
    console.log("You enter the cave...");
    console.log("You found an Iron Shield!");

    gear.push('Iron Shield');

} else if (choice == 3) {
    console.log("You approach the castle...");
    console.log("You found a Healing Potion!");

    gear.push('Potion');

} else {
    console.log("That is not a valid choice.");
}

// Show the hero's updated progress
console.log(hero.toString());

// Push two more items into your gear.
gear.push();
gear.push();

