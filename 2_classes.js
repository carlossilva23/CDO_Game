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
    constructor(class1, class2, class3, class4) {
        this.class1 = class1;
        this.class2 = class2;
        this.class3 = class3;
        this.class4 = class4;
    }
}

let mySchedule = new Schedule('Algebra', 'AP Comp Sci', 'Physics', 'P.E.');

// Exercise: Make your own instance of a Schedule Class. 