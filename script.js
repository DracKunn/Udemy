
// Remember, we're gonna use strict mode in all scripts now!
'use strict';
/*
const x = 23;
if (x === 23) console.log(23);

const calcAge = birthYear => 2037 - birthYear;

console.log(calcAge(1989));
*/
/*
///////////////////////////////////////
// Using Google, StackOverflow and MDN
// Solving a problem using Google, Stackoverflow and MDN

// PROBLEM 1:
// We work for a company building a smart home thermometer. Our most recent task is this: "Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error."

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// 1) Understanding the problem
// - what is temperature amplitude?
    // Answer: Difference between highest and lowest temp
//- How do we calculate the max and min temperatures?
// - What's a sensor error and what to do when one occurs?
    // Answer: from the data it looks like an error is a string and we just ignore it in the code.


// 2) Breaking up into sub-problems
// - how to ignore errors?
// - find max value in temperature array
// - find minimum value
// - substract min from max and return it

const calcTempAmplitude = function (temps){

    let max = temps[0];
    let min = temps[0];

    for(let i = 0; i< temps.length; i++){
        const curTemp = temps[i]; 
        if(typeof curTemp !== 'number') continue;

        if(curTemp > max) max = curTemp;
        if(curTemp < min) min = curTemp;
    }
    console.log(max,min);
    return max - min;
};

//calcTempAmplitude([3,7,4]);
// what happens in the loop: max = 3 (first value in the array), then is 7 greater than 3? yes, so max = 7. then is 4 > 7? no => max stays 7 . so answer is max is 7. 

//calcTempAmplitude([3,7,4,1,8]); // added min temp

const amplitude = calcTempAmplitude(temperatures);
console.log(amplitude);

// problem 2;
// function should now recieve 2 arrays of temperatures

// 1) understanding the problem:
// - with 2 arrays, should we implement functionality twice? no => just merge both arrays into one bigger array.

// 2) breaking up in sub-problems:
// - merge two arrays?

const calcTempAmplitudeNew = function (t1, t2){
    const temps = t1.concat(t2);
    console.log(temps);

    let max = temps[0];
    let min = temps[0];

    for(let i = 0; i< temps.length; i++){
        const curTemp = temps[i]; 
        if(typeof curTemp !== 'number') continue;

        if(curTemp > max) max = curTemp;
        if(curTemp < min) min = curTemp;
    }
    console.log(max,min);
    return max - min;
};

const amplitudeNew = calcTempAmplitudeNew([3,5,1],[9,0,5]);
console.log(amplitudeNew);
*/
/*
const measureKelvin = function(){
    const measurement = {
        type: 'temp',
        unit: 'celsius',
        
        // C) Fix the bug
        //value: Number(prompt('Degrees celcius')),
        value: 10,
    };

    // B) Find the bug
    console.log(measurement);
    
    
    //console.table(measurement);

    //console.log(measurement.value);
    // console.warn(measurement.value);
    // console.error(measurement.value);

    const kelvin = measurement.value + 273;
    return kelvin;
};
// A: Identify bug
console.log(measureKelvin());

// Using a debugger
const calcTempAmplitudeBug = function (t1, t2){
    const temps = t1.concat(t2);
    console.log(temps);

    let max = 0;
    let min = 0;

    for(let i = 0; i< temps.length; i++){
        const curTemp = temps[i]; 
        if(typeof curTemp !== 'number') continue;

        // debugger;
        if(curTemp > max) max = curTemp;
        if(curTemp < min) min = curTemp;
    }
    console.log(max,min);
    return max - min;
};

const amplitudeBug = calcTempAmplitudeBug([3,5,1],[9,4,5]);
// A) Identify
console.log(amplitudeBug);
*/
///////////////////////////////////////
// Coding Challenge #1

/*
Given an array of forecasted maximum temperatures, the thermometer displays a string with these temperatures.

Example: [17, 21, 23] will print "... 17ºC in 1 days ... 21ºC in 2 days ... 23ºC in 3 days ..."

Create a function 'printForecast' which takes in an array 'arr' and logs a string like the above to the console.

Use the problem-solving framework: Understand the problem and break it up into sub-problems!

TEST DATA 1: [17, 21, 23]
TEST DATA 2: [12, 5, -5, 0, 4]
*/
/*
// understanding the problem
//- only arrays with number values
// - take the values and print them + display their position in the array as an expression of days

// SUB problems
// - make sure the array has only numbers
// - print the number in the array in a continuous sentence
// - print a string that says how many days away
// - use the position in the array to calvulate how many days the forcast is away

const printForecast = function(temps){
    let forecast = `...`;
    for(let i=0; i < temps.length; i++){
        if(typeof temps[i] !== 'number') continue;
        forecast = forecast + ` ${temps[i]} degrees Celcius in ${i+1} days ...`
    }
    return forecast
}

console.log(printForecast([12, 5, -5, 0, 4]));
*/

//Solution:
// 1) Understand the problem
// - array transformed to string separated by 3 dots
// - what is the x days?
    // answer: it is the index + 1

// 2) Breaking up into sub-problems
// - transform array into string
// - Transform each element to string with ºC
// - string needs to contain days (index +1)
// - add ... between elements and stand and end of string

const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

// if there were only the 3 points of data like in data set 1, we could hardcode it which would look like the following:

// console.log(`... ${data1[0]}ºC in 1 days... ${data1[1]}ºC in 2 days... ${data1[2]}ºC in 3 days...`);
// this is not the way to go and wouldn't work on dataset 2

const printForecast = function(arr){
    let str = '';
    for(let i = 0;i<arr.length; i++){
        str += `${arr[i]}ºC in ${i+1} days ... `
    };
    console.log('...' + str);
};
printForecast(data1);