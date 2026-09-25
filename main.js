const prompt = require('prompt-sync')();
// Fill in your attributes for your character. (Look at basic_types.js for help.)
// Fill in attributes that add up to 100 (health + attack + defense = 100)
// Make sure to install node, javascript run extension, prompt-sync

let playerName = "johnny";
let health = 50;
let attack = 30;
let defense = 20;

// prints out to your console
// console.log('playerName: ' + playerName + ', health: ' + health + ', attack: ' + attack + ', defense: ' + defense + ', hasKey: ' + hasKey);



// Classes
// Fill in your hero class with your variables from before. 
class Hero {
    constructor(name, health, attack, defense) {
        this.name = name;
        this.health = health;
        this.attack = attack;
        this.defense = defense;
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
let hero = new Hero(playerName, health, attack, defense);


// console.log(hero.toString());

console.log("Choose your path:\n 1) Forest\n 2) Cave\n 3) Castle");
const choice = prompt("Make sure you put JUST the number of your choice: ");
console.log("\n")

if (choice == '1') {
    console.log("You enter the forest...");
    console.log("You found a Wooden Sword!");

    hero.gear.push('Wooden Sword');

} else if (choice == '2') {
    console.log("You enter the cave...");
    console.log("You found an Iron Shield!");

   hero.gear.push('Iron Shield');

} else if (choice == '3') {
    console.log("You approach the castle...");
    console.log("You found a Healing Potion!");

    hero.gear.push('Potion');

} else {
    console.log("That is not a valid choice.");
}

// Show the hero's updated progress
console.log(hero.toString());

// Push two more items into your gear.
hero.gear.push('Shield');
hero.gear.push('Spear');

// Goblin Battle
let goblinHealth = 45;
let goblinDefense = 10;
let goblinAttack = 8;
console.log("You approach an open field and see a goblin\n");
while (goblinHealth > 0 && hero.health > 0){
    let move = "";
    // player move
   while (move !== '1' && move !== '2') {
    console.log("Choose your move:\n 1) Attack\n 2) Use Potion\n")
        move = prompt("Choice: ");
        if (move !== '1' && move !== '2') {
            console.log("Invalid choice! Please type 1 or 2.\n");
        }
    }
    switch (move){
        case ('1'):
            goblinHealth -= (hero.attack * (1 - 0.01 * goblinDefense));
            goblinHealth = Math.floor(goblinHealth);
            console.log("You attack the goblin. The goblin now has " + goblinHealth + " health.\n");
            break;

        case ('2'):
            hero.health += 25;
            hero.health = Math.floor(hero.health);
            console.log("You use a potion. You now have " + hero.health + " health.\n");
            break;
    }
    // goblin attack
    hero.health -= (goblinAttack * (1- 0.01 * hero.defense));
    hero.health = Math.floor(hero.health);          
    console.log("You goblin attacks you. You now have " + hero.health + " health.\n");
    if (hero.health < 0){
        console.log("You died. Try again.\n");
        process.exit();
    }
}
console.log("Congrats! You have defeated the goblin! It drops a key\n")
hero.hasKey = true;

// Final Battle
let finalBattle = "";
while (finalBattle !== '1' && finalBattle !== '2') {
    console.log("Choose where to go next:\n 1) Fire Castle\n 2) Ice Tower\n");
    finalBattle = prompt("Make sure you put JUST the number of your choice: ");
    if (finalBattle !== '1' && finalBattle !== '2') {
        console.log("Invalid choice! Please type 1 or 2.\n");
    }
}

if (finalBattle == '1'){
    console.log("Final Battle:\n You walk inside the Fire Castle.\n A dragon appears!\n");
    let dragonHealth = 120;
    let dragonDefense = 25;
    let dragonAttack = 14;
    while (dragonHealth > 0){
        // player move
        console.log("Choose your move:\n 1) Attack\n 2) Use Potion\n");
        move = prompt("Make sure you put JUST the number of your choice: ");
        switch (move){
            case ('1'):
                dragonHealth -= (hero.attack * (1 - 0.01 * dragonDefense));
                dragonHealth = Math.floor(dragonHealth);
                console.log("You attack the dragon. The dragon now has " + dragonHealth + " health.\n");
                break;

            case ('2'):
                hero.health += 25;
                hero.health = Math.floor(hero.health);
                console.log("You use a potion. You now have " + hero.health + " health.\n");
                break;
        }
        // dragon attack
        hero.health -= (dragonAttack * (1- 0.01 * hero.defense));
        hero.health = Math.floor(hero.health);
        console.log("The dragon attacks you with its fire breath. You now have " + hero.health + " health.\n");
        if (hero.health < 0){
            console.log("You died. Try again.\n");
            process.exit();
        }
    }
    console.log("Congrats! You have won your final battle and destroyed the dragon!");
}
if (finalBattle == '2'){
    console.log("Final Battle:\n You walk inside the Ice Tower.\n An ice wizard appears!\n");
    let wizardHealth = 90;
    let wizardDefense = 0;
    let wizardAttack = 18;
    while (wizardHealth > 0){
        // player move
        console.log("Choose your move:\n 1) Attack\n 2) Use Potion\n");
        move = prompt("Make sure you put JUST the number of your choice: ");
        switch (move){
            case ('1'):
                wizardHealth -= (hero.attack * (1 - 0.01 * wizardDefense));
                wizardHealth = Math.floor(wizardHealth);
                console.log("You attack the wizard. The wizard now has " + wizardHealth + " health.\n");
                break;

            case ('2'):
                hero.health += 25
                hero.health = Math.floor(hero.health);
                console.log("You use a potion. You now have " + hero.health + " health.\n");
                break;
        }
        // wizard attack
        hero.health -= (wizardAttack * (1- 0.01 * hero.defense));
        hero.health = Math.floor(hero.health);
        console.log("The wizard attacks you with his ice storm attack. You now have " + hero.health + " health.\n");
        if (hero.health < 0){
            console.log("You died. Try again.\n");
            process.exit();
        }
    }
    console.log("Congrats! You have won your final battle and destroyed the ice wizard!");
}




