/* 'use strict'; //strictmode

let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log('I can drive :D');

//const interface = 'Audio';
//const private = true;
//const if = 23;




function logger() {
    console.log('My name is Jonas');
}

// calling / running / invoking the function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);







// Function declaration
function calcAge1(birthYear) {
    return 2037 - birthYear;
}
const age1 = calcAge1(1991);

// Function expression
const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
}
const age2 = calcAge2(1991);

console.log(age1, age2);


// Arrow Function

const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);


const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2022 - birthYear;
    const retirement = 65 - age;
    //return retirement;
    return `${firstName} retires in ${retirement} years.`;
}

console.log(yearsUntilRetirement(1991, 'Jonas'));
console.log(yearsUntilRetirement(1980, 'Bob'));
console.log(yearsUntilRetirement(1988, 'B-Rex'));


function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    const juice = `Juice with ${applePieces} apple pieces and ${orangePieces} orange pieces.`;
    return juice;
}

console.log(fruitProcessor(2, 3));

*/
////////////////////

// Coding challenge #1
///////////////////////////////////////
// Coding Challenge #1

/*
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).
A team ONLY wins if it has at least DOUBLE the average score of the other team. Otherwise, no team wins!

1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner to the console, together with the victory points, according to the rule above. Example: "Koalas win (30 vs. 13)".
4. Use the 'checkWinner' function to determine the winner for both DATA 1 and DATA 2.
5. Ignore draws this time.

TEST DATA 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
TEST DATA 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27

HINT: To calculate average of 3 values, add them all together and divide by 3
HINT: To check if number A is at least double number B, check for A >= 2 * B. Apply this to the team's average scores 😉

GOOD LUCK 😀
*/
/*
// 1.
const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3

//2.
avgDolphins1 = calcAverage(44, 23, 71);
avgKoalas1 = calcAverage(65, 54, 49);

avgDolphins2 = calcAverage(85, 54, 41);
avgKoalas2 = calcAverage(23, 34, 27);

console.log(`TEST1: Dolphins Average: ${avgDolphins1}, Koalas Average: ${avgKoalas1}; TEST2: Dolphins Average: ${avgDolphins2}, Koalas Average: ${avgKoalas2}`)
// 3.
function checkWinner(avgDolphins, avgKoalas) {
    if (avgDolphins >= avgKoalas * 2) {
        console.log(`Dolphins win(${avgDolphins} vs.${avgKoalas})`)
    } else if (avgDolphins * 2 <= avgKoalas) {
        console.log(`Koalas win(${avgKoalas} vs.${avgDolphins})`)
    } else if (avgDolphins === avgKoalas) {
        console.log("It's a draw!");
    } else {
        console.log('No team wins!');
    }
}
// 4.
checkWinner(avgDolphins1, avgKoalas1);
checkWinner(avgDolphins2, avgKoalas2);

//5.

function checkWinner(avgDolphins, avgKoalas) {
    if (avgDolphins >= avgKoalas * 2) {
        console.log(`Dolphins win(${avgDolphins} vs.${avgKoalas})`)
    } else if (avgDolphins * 2 <= avgKoalas) {
        console.log(`Koalas win(${avgKoalas} vs.${avgDolphins})`)
    } else {
        console.log('No team wins!');
    }
}
*/
/*
// Introduction to arrays

const friend1 = 'Michael';
const friend2 = 'Steven';
const friend3 = 'Peter';

const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends);

const yearsExample = new Array(1991, 1984, 2008, 2020);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = 'Jay';
console.log(friends);
// arrays, even when using const are still mutable, so you can change a vlaue. however we can't chage the whole array. friends = ['Bob', 'Alice']; would give an error because we created the friends array using const.

const firstName = 'Jonas';
const jonas = [firstName, 'Schmedtmann', 2037 - 1991, 'teacher', friends];
console.log(jonas);

// Exercise
const calcAge = function (birthYear) {
    return 2037 - birthYear;
}
const years = [1990, 1967, 2002, 2010, 2018];

//calcAge(years); does'nt work because the function expects an expression and not an array.

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
console.log(ages);
*/
/*
// Basic Array Operations

const friends = ['Michael', 'Steven', 'Peter'];

// Add elements
const newlength = friends.push('Jay');
console.log(friends);
console.log(newlength);

friends.unshift('John');
console.log(friends);

// Remove elements
friends.pop(); // Last element
const popped = friends.pop(); // so the popped element is now Peter
console.log(popped);
console.log(friends);

friends.shift(); //frist
console.log(friends);

console.log(friends.indexOf('Steven'));
console.log(friends.indexOf('Bob'));

friends.push(23);
console.log(friends.includes('Steven'));
console.log(friends.includes('Bob'));
console.log(friends.includes('23'));
console.log(friends.includes(23));

if (friends.includes('Peter')) {
    console.log('You have a friend called Peter');
}
if (friends.includes('Steven')) {
    console.log('You have a friend called Steven');
}
*/
//////////////////////////////////////////////
// Coding Challenge #2

/*
Steven is still building his tip calculator, using the same rules as before: Tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.

1. Write a function 'calcTip' that takes any bill value as an input and returns the corresponding tip, calculated based on the rules above (you can check out the code from first tip calculator challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100.
2. And now let's use arrays! So create an array 'bills' containing the test data below.
3. Create an array 'tips' containing the tip value for each bill, calculated from the function you created before.
4. BONUS: Create an array 'total' containing the total values, so the bill + tip.

TEST DATA: 125, 555 and 44

GOOD LUCK 😀
*/
/*
// 1.
let tip;
let tipP;
let bill;
function calcTip(bill) {
    if (bill <= 300 && bill >= 50) {
        tipP = 0.15;
    } else {
        tipP = 0.2;
    }
    return tip = tipP * bill
    //console.log(`The bill is ${bill} so the tip is ${tipP * 100}% or ${tip}`);
}

calcTip(10);
// 2.

let bills = [125, 555, 44];
console.log(bills);

// 3.
let tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
console.log(tips);

// 4.
let total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(total);
*/
/*
// Solution

// const calcTip = function (bill) {
//     return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// }

// arrow function
const calcTip = bill => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

const bills = [125, 555, 44];

const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log(bills, tips, totals);
*/
/*
// Objects
const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    age: 2037 - 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven']
};

console.log(jonas);
console.log(jonas.lastName);
console.log(jonas['lastName']);

const nameKey = 'Name';
console.log(jonas['first' + nameKey]);
console.log(jonas['last' + nameKey]);
// can write anything in the brackets, they compute, can't do computations in the DOT notaion

const interestedIn = prompt('What do you want to know about Jonas? Choose between firstName, lastName, age, job and friends');
console.log(jonas[interestedIn]);

if (jonas[interestedIn]) {
    console.log(jonas[interestedIn]);
} else {
    console.log('Wrong request" Choose between firstName, lastName, age, job and friends')
}

jonas.location = 'Portugal';
jonas['twitter'] = '@jonasschmedtman';
console.log(jonas);

console.log(`${jonas.firstName} has ${jonas.friends.length} friends and his best friend is called ${jonas.friends[0]}.`);
*/
// Object Methods
/*
const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    birthYear: 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven'],
    hasDriversLicence: true,

    // calcAge: function (birthYear) {
    //     return 2037 - birthYear;
    // } // any function attached to an object is called a method

    // calcAge: function () {
    //     return 2037 - this.birthYear;
    // }
    calcAge: function () {
        this.age = 2037 - this.birthYear;
        return this.age;
    },

    getSummary: function () {
        return `${this.firstName} is a ${this.calcAge()}-year old ${this.job}, and he has ${this.hasDriversLicence ? 'a' : 'no'} driver's licence.`
    }

};

// console.log(jonas.calcAge(1991));

// console.log(jonas['calcAge'](1991));
console.log(jonas.calcAge());
console.log(jonas.age);

// Challenge
// console.log(`${jonas.firstName} is a ${jonas.age}-old ${jonas.job}, and he ${jonas.hasDriversLicence ? "has a driver's licence" : "doesn't have a driver's licence"}.`)

console.log(jonas.getSummary());
*/
///////////////////////////////////////
// Coding Challenge #3

/*
Let's go back to Mark and John comparing their BMIs! This time, let's use objects to implement the calculations! Remember: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter)

1. For each of them, create an object with properties for their full name, mass, and height (Mark Miller and John Smith)
2. Create a 'calcBMI' method on each object to calculate the BMI (the same method on both objects). Store the BMI value to a property, and also return it from the method.
3. Log to the console who has the higher BMI, together with the full name and the respective BMI. Example: "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!"

TEST DATA: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.

GOOD LUCK 😀
*/
/*
// 1. + 2.
const mark = {
    firstName: 'Mark',
    lastName: 'Miller',
    mass: 78,
    length: 1.69,
    calcBMI: function () {
        this.BMI = this.mass / this.length ** 2
        return this.BMI
    }
}
const john = {
    firstName: 'John',
    lastName: 'Smith',
    mass: 92,
    length: 1.95,
    calcBMI: function () {
        this.BMI = this.mass / this.length ** 2
        return this.BMI
    }
}

// 3.

mark.calcBMI() > john.calcBMI() ? console.log(`${mark.firstName} ${mark.lastName}'s BMI (${mark.calcBMI()}) is higher than ${john.firstName} ${john.lastName}'s BMI (${john.calcBMI()})`) : console.log(`${john.firstName} ${john.lastName}'s BMI (${john.calcBMI()}) is higher than ${mark.firstName} ${mark.lastName}'s BMI (${mark.calcBMI()})`)
*/
/*
// Solution

const mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,
    calcBMI: function () {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
}
const john = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,
    calcBMI: function () {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
}

mark.calcBMI();
john.calcBMI();
console.log(mark.bmi, john.bmi);

if (mark.bmi > john.bmi) {
    console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s BMI (${john.bmi})`);
} else if (john.bmi > mark.bmi) {
    console.log(`${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s BMI (${mark.bmi})`);
}
*/
