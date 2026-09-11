// These are the different types of loops/statements that we will be going over today.
// An if statement is used in order to handle different options within your code. 

// If Statement
let a = 4;
let b = 6;

function greaterThan(a, b) {
    if (a > b) {
        return true;
    }
    return false;
}

// Exercise: What would the program return if these variables were used to run it? What if they were switched? 


// If Else Statement

let team1 = 24;
let team2 = 21;

function score(team1, team2) {
    if (team1 > team2) {
        return 'Team 1 Wins';
    }
    else {
        return 'Team 2 Wins';
    }
}

// Exercise: What would the function return with the given variables? What if they were switched? 


// What if there were more than two options? 
// Else If Statement 

snack1 = false;
snack2 = false;
snack3 = true;

function vendingMachine(snack1, snack2, snack3) {
    if (snack1 = true) {
        return 'Doritos';
    } else if (snack2 = true) {
        return 'Oreos';
    } else if (snack3 = true) {
        return 'Cheetos';
    } else {
        return 'No Snack Chosen';
    }
}

// Exercise: What snack would be chosen in the prievous example? 