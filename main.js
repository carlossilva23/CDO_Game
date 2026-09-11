// Types
let playerName = "Adventurer";
let health = 100;
let attack = 10;
let defense = 5;
let hasKey = false;

// prints out to your console
console.log('playerName: ' + playerName + ', health: ' + health + ', attack: ' + attack + ', defense: ' + defense + ', hasKey: ' + hasKey);



// Classes
class Player {
    constructor(name, health) {
        this.name = name;
        this.health = health;
        // Finish adding the rest of the attributes
    }
}

let player1 = new Player(playerName, health, attack, defense, hasKey);

console.log(Player.name)

// Switch Statements
let choice = input("Choose your path: 1) Forest 2) Cave 3) Castle");

switch (choice) {
    case 1:
        console.log("You enter the forest...");
        break;

    case 2:
        console.log("You enter the cave...");
        break;

    case 3:
        console.log("You approach the castle...");
        break;

    // this runs when the user enters a choice you did not specify    
    default:
        console.log("That is not a valid choice.");
}



