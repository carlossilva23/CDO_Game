// A class is how we represent an everyday human object in a computer. 

// Example: 

class Body { 
    constructor(brain, muscles, bones) {
        this.brain = brain;
        this.muscles = muscles;
        this.bones = bones;
    }
}

let humanBody = new Body(true, 600, 206);


// Example 2:

class Schedule {
    constructor(period1, period2, period3, period4) {
        this.class1 = period1;
        this.class2 = period2;
        this.class3 = period3;
        this.class4 = period4;
    }
}

let mySchedule = new Schedule('Algebra', 'AP Comp Sci', 'Physics', 'P.E.');

// Exercise: Make your own instance of a Schedule Class. 