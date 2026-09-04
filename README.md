# CDO High School Visit — Adventure Coding Game

## Overview

This repository contains the coding activity being developed for the **CDO High School Visit on September 25, 2026**.

The activity will introduce high school students to fundamental programming concepts through an interactive **Dungeons & Dragons-inspired adventure game** built with **JavaScript**.

Rather than teaching programming concepts through isolated examples, students will progress through a story in which **each level introduces a new coding feature**. Students will modify, complete, and run code to determine what happens next in their adventure.

A PowerPoint presentation will accompany the activity and guide students through the story, programming concepts, and challenges.

---

## Goals

The activity should be:

* Beginner-friendly
* Interactive and story-driven
* Fun for students with little programming experience
* Structured enough that students do not need to build an entire program from scratch
* Flexible enough for more experienced students to complete additional challenges
* Completable within approximately **90–120 minutes**

Students should leave the activity having seen how multiple programming concepts can work together to create an interactive game.

---

# Game Concept

Students will play through a fantasy adventure inspired by tabletop RPGs such as **Dungeons & Dragons**.

Each student begins with a basic player character.

Example:

```text
Name: Adventurer
HP: 100
Attack: 10
Defense: 5
Gear: []
```

Throughout the story, students may encounter:

* Enemies
* Treasure
* Different paths
* Combat
* Items
* Decisions
* Traps
* Character upgrades

Progressing through the adventure requires students to complete small programming challenges.

Each completed challenge adds functionality to the game and allows the story to continue.

---

# Learning Progression

## Level 1 — Create the Adventurer

### Concepts

* Variables
* Primitive data types
* Strings
* Numbers
* Booleans

Students begin by defining basic information about their character.

```javascript
let playerName = "Adventurer";
let health = 100;
let attack = 10;
let defense = 5;
let hasKey = false;
```

### Goal

Introduce students to the idea that programs store information using variables and different types of values.

---

## Level 2 — Choose Your Path

### Concept

* `switch` statement

The player reaches a location with several possible paths.

```text
You enter an ancient dungeon.

1. Enter the forest
2. Explore the cave
3. Approach the castle
```

Students use a `switch` statement to determine what happens based on the player's choice.

```javascript
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

    default:
        console.log("That is not a valid choice.");
}
```

### Goal

Show students how a program can react differently depending on user input.

---

## Level 3 — Make a Decision

### Concepts

* `if`
* `else if`
* `else`
* Comparison operators

The player's statistics, inventory, or previous decisions determine what happens next.

```javascript
if (health > 50) {
    console.log("You continue deeper into the dungeon.");
} else {
    console.log("You should heal before continuing.");
}
```

Possible story conditions include:

* Does the player have enough HP?
* Does the player have a key?
* Is their attack high enough?
* Did they choose to fight or run?
* Do they have a particular item?

Example:

```javascript
if (hasKey) {
    console.log("You unlock the mysterious door.");
} else {
    console.log("The door is locked.");
}
```

### Goal

Teach students how programs make decisions using conditions.

---

## Level 4 — Battle an Enemy

### Concepts

* `while` loops
* Incrementing variables
* Decrementing variables
* `break`

Students encounter their first enemy.

```text
PLAYER
HP: 100
Attack: 10

GOBLIN
HP: 40
Attack: 5
```

Combat continues while both characters still have HP.

```javascript
while (enemyHealth > 0 && playerHealth > 0) {

    enemyHealth -= playerAttack;

    console.log("You attack the enemy!");

    if (enemyHealth <= 0) {
        console.log("Enemy defeated!");
        break;
    }

    playerHealth -= enemyAttack;

    console.log("The enemy attacks you!");
}
```

### Goal

Demonstrate how loops allow programs to repeat actions until a condition changes.

Students will also see how variables can change while a program is running.

---

## Level 5 — Find Treasure

### Concept

* Arrays

After defeating an enemy or exploring an area, the player discovers equipment.

```javascript
let gear = [];

gear.push("Iron Sword");
gear.push("Health Potion");
gear.push("Dungeon Key");
```

Students can display the player's inventory:

```javascript
console.log(gear);
```

Or access individual items:

```javascript
console.log(gear[0]);
```

Possible actions include:

* Adding an item
* Removing an item
* Checking whether an item exists
* Using an item during combat

Example:

```javascript
if (gear.includes("Dungeon Key")) {
    console.log("You use the key to open the door!");
}
```

### Goal

Introduce students to storing multiple related pieces of information inside an array.

---

## Level 6 — Enemy Template

### Concepts

* Objects
* Properties
* Reusable structures

Before introducing classes, students can see how JavaScript objects represent enemies.

```javascript
let goblin = {
    name: "Goblin",
    health: 40,
    attack: 5,
    defense: 2
};
```

Another enemy can use the same structure:

```javascript
let skeleton = {
    name: "Skeleton",
    health: 60,
    attack: 8,
    defense: 4
};
```

Students can access properties using dot notation:

```javascript
console.log(goblin.name);
console.log(goblin.health);
```

They can also modify properties:

```javascript
goblin.health -= 10;
```

Possible enemy properties include:

* Name
* Health
* Attack
* Defense
* Loot
* Description

### Goal

Introduce students to the idea that related pieces of information can be grouped together into a single object.

---

# Final Encounter

The programming concepts introduced throughout the activity should come together during a final encounter.

Example:

```text
THE DRAGON'S LAIR

Dragon HP: 150

Your HP: 72
Your Attack: 20

Your Gear:
- Iron Sword
- Shield
- Health Potion

What will you do?

1. Attack
2. Use an Item
3. Defend
4. Run
```

The final battle can combine:

* Variables
* `switch`
* `if / else`
* `while` loops
* HP modification
* Arrays
* Objects

Example:

```javascript
while (dragon.health > 0 && player.health > 0) {

    switch (choice) {

        case 1:
            dragon.health -= player.attack;
            console.log("You attack the dragon!");
            break;

        case 2:
            console.log("You use an item.");
            break;

        case 3:
            console.log("You prepare to defend.");
            break;

        case 4:
            console.log("You run from the battle!");
            break;
    }

    if (dragon.health <= 0) {
        console.log("You defeated the dragon!");
        break;
    }
}
```

This gives students an opportunity to see how individual programming concepts combine to create a larger program.

---

# Advanced Challenges

Students who finish early or already have more programming experience can extend the game.

## Challenge 1 — Expand the Story

Add another location, decision, enemy, or ending.

Possible ideas:

* Secret room
* Hidden treasure
* Second dungeon
* Alternate ending
* Optional boss
* New character
* Trap
* Puzzle

---

## Challenge 2 — Create a New Enemy

Students can create their own enemy object.

They choose:

* Enemy name
* HP
* Attack
* Defense
* Description

Example:

```javascript
let dragon = {
    name: "Ancient Dragon",
    health: 150,
    attack: 25,
    defense: 15
};
```

---

## Challenge 3 — Create a New Class

More experienced students can convert the enemy template into a JavaScript class.

```javascript
class Enemy {

    constructor(name, health, attack, defense) {
        this.name = name;
        this.health = health;
        this.attack = attack;
        this.defense = defense;
    }

}
```

Students can then create enemies from the class.

```javascript
let goblin = new Enemy(
    "Goblin",
    40,
    5,
    2
);

let dragon = new Enemy(
    "Ancient Dragon",
    150,
    25,
    15
);
```

### Possible Additional Classes

Students could create:

* `Player`
* `Weapon`
* `Potion`
* `Armor`
* `Spell`
* `Boss`
* `Treasure`

Example:

```javascript
class Weapon {

    constructor(name, damage) {
        this.name = name;
        this.damage = damage;
    }

}
```

---

## Challenge 4 — Add Special Combat Mechanics

Students can add additional functionality to the combat system.

Possible extensions:

* Critical hits
* Random damage
* Healing
* Defense
* Special attacks
* Mana
* Status effects
* Enemy abilities

Example critical hit system:

```javascript
let criticalHit = Math.random() < 0.2;

if (criticalHit) {
    damage *= 2;
    console.log("Critical hit!");
}
```

---

## Challenge 5 — Add Random Damage

Instead of every attack dealing the same amount of damage, students can add randomness.

```javascript
let damage = Math.floor(Math.random() * 10) + 5;
```

For example, this could generate damage between approximately 5 and 14.

```javascript
enemy.health -= damage;
```

---

## Challenge 6 — Create Multiple Endings

Students can create different endings depending on choices made throughout the adventure.

```text
VICTORY ENDING

You defeat the dragon and save the kingdom.
```

```text
TREASURE ENDING

Instead of fighting the dragon, you discover
the hidden treasure room.
```

```text
SECRET ENDING

The key you found earlier unlocks
a hidden passage...
```

The ending could depend on variables from earlier in the game.

```javascript
if (hasSecretKey) {
    console.log("You discovered the secret ending!");
} else {
    console.log("You defeated the dragon!");
}
```

---

# Suggested Activity Format

The PowerPoint and coding activity should progress together.

## Part 1 — Introduction

Introduce:

* The adventure
* The player's character
* How the activity will work
* How to run the JavaScript program

---

## Part 2 — Story Levels

Each PowerPoint section introduces a new story event.

Students then switch to their code and complete the corresponding programming challenge.

```text
PowerPoint:

"You have entered the Goblin's Cave..."

        ↓

Coding Challenge:

Complete the while loop controlling the battle.

        ↓

Run the program.

        ↓

See the result.

        ↓

Continue the story.
```

---

## Part 3 — Final Battle

Students use the functionality they created throughout the activity during the final encounter.

The final battle should incorporate several concepts they encountered earlier.

---

## Part 4 — Advanced / Creative Challenge

Students who finish early can customize or extend the game.

---

## Part 5 — Showcase

Students can share something they created, such as:

* Their custom enemy
* Their character
* A new item
* A special attack
* A new story path
* An alternate ending

---

# Design Philosophy

Students **should not be expected to write the entire program from scratch**.

Starter code should contain most of the supporting infrastructure.

Instead, students should encounter clearly marked sections such as:

```javascript
// ========================================
// LEVEL 3 CHALLENGE
// Complete the condition below.
// ========================================

if (__________________) {

    console.log("The door opens!");

}
```

As the activity progresses, challenges can gradually become less guided.

### Early Challenge

```javascript
let health = ______;
```

### Intermediate Challenge

```javascript
if (health ______ 0) {
    console.log("Game Over!");
}
```

### Later Challenge

```javascript
// TODO:
// If the player's health reaches zero,
// end the battle.
```

### Advanced Challenge

```javascript
// TODO:
// Create your own enemy object.
```

This allows students with different experience levels to work through the same activity.

---

# Planned Programming Concepts

The current target concepts are:

* [ ] Variables
* [ ] Primitive data types
* [ ] Strings
* [ ] Numbers
* [ ] Booleans
* [ ] Incrementing variables
* [ ] Decrementing variables
* [ ] `if / else`
* [ ] `switch`
* [ ] `while` loops
* [ ] `break`
* [ ] Arrays / gear inventory
* [ ] Objects
* [ ] Enemy template
* [ ] Object properties

---

# Advanced Features

* [ ] Expand the story
* [ ] Create custom enemies
* [ ] Create a JavaScript class
* [ ] Add additional gear
* [ ] Add special attacks
* [ ] Add random damage
* [ ] Add critical hits
* [ ] Add random events
* [ ] Add multiple endings
* [ ] Add additional combat mechanics

---

# Development Priorities

Before the event, the Coding Committee should focus on:

1. Finalize the story and overall game flow.
2. Determine the development environment students will use.
3. Build the complete working version of the game.
4. Divide the game into individual programming challenges.
5. Create beginner-friendly starter code.
6. Create advanced challenges for experienced students.
7. Develop the accompanying PowerPoint.
8. Test the activity with someone who has limited programming experience.
9. Confirm that the full activity can be completed within 90–120 minutes.
10. Prepare a completed solution version for facilitators.

---

# Suggested Repository Structure

```text
CDO-Adventure/
│
├── README.md
│
├── starter/
│   ├── index.html
│   └── game.js
│
├── solution/
│   ├── index.html
│   └── game.js
│
├── examples/
│   └── enemies.js
│
├── presentation/
│   └── CDO-Adventure-Presentation.pptx
│
└── facilitator/
    └── FacilitatorGuide.md
```

If the activity runs entirely through the browser, `index.html` can load the JavaScript file:

```html
<script src="game.js"></script>
```

The `starter` directory contains the version students will modify.

The `solution` directory contains the completed version for Coding Committee members and facilitators.

---

# Success Criteria

By the end of the activity, students should be able to recognize how:

* Variables store information.
* Data types represent different types of values.
* Conditions allow programs to make decisions.
* Loops repeat actions.
* Arrays store groups of information.
* Objects group related information together.
* Classes can create reusable templates.
* Multiple simple programming concepts can combine to create an interactive game.

Most importantly, students should leave having **written JavaScript, changed the behavior of a game, and created something of their own.**
