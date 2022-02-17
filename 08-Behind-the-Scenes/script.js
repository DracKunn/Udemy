'use strict';
// javascript is high level which means it automatically calculates and assigns the computer's resources for the code.
// jS is also flexible with it's variables, where other languages such as java require you to declare the type of variable specifically (e.g. string or number), JS assigns types automatically
// compilation vs interpretation
// compilation: source code is translated to machine code in a separate file taht is then read when the program runs.
// interpretation: source code is translated to machine code and excecuted line by line as the program runs.
// JS used to be fuly interpreted but that became slow so now it's a mix calles Just in Time comilation.
// JIT compilation: source code is converted to machine code right before the program runs and then the program runs off of the machine code, but no separate file of machine code is created.
function calcAge(birthYear) {
  const age = 2037 - birthYear;

  function printAge() {
    let output = `${firstName}, you are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;
      // creating new variable with same name as outer scope's variabel
      const firstName = 'Steven';

      // reassigning outer scope's variable
      output = 'NEW OUTPUT!';

      const str = `Oh, and you're a millenial, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
    }
    //console.log(str);
    console.log(millenial);
    // console.log(add(2, 3));
    console.log(output);
  }
  printAge();

  return age;
}

const firstName = 'Jonas';
calcAge(1991);
