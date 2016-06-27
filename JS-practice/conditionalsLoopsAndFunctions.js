/*
  Boolean Expressions: returns true or false
*/

// == "Equality operator" is used to compare two values

3 == 3
// Returns true

4 == 3
// Returns false

3 == "3"
// Returns true

0 == false
// Returns true

1 == true
// Returns true

// === "Identity operator" is used for strict comparason

3 === 3
// true

4 === 3
// false

"3" === 3
// false

0 === false
// false

1 === true
// false

// Additional boolean operators ">", "<", ">=", "<=", "!=", "!=="

// Logical Operators "&&", "||", "!"

(4 > 5) && (5 == 5)
// False

(4 > 5) || (5 == 5)
// True

!(4 > 5) && (5 == 5)
// True

/* 
  Conditional Statements: "if/else", "if/else if/else", "switch"
*/

//Switch Example
var grade = "B";
switch(grade) {
  case "A":
    console.log('You got an A! Good job!');
    break;
  case "B";
    console.log('You got a B! Good job!');
    break;
  default:
    console.log('Try again next time!');
    break;
}

/*
  Loops: "while", "for", "for...in"
*/



/*
  Functions
*/

// Functions can be defined in two ways
// Functions can take multiple parameters
// parameters are not required in a function unless needed for it to work

var functionName = function() {
}
// function can only be called after the var is declared

function newFunction() {
}
// function can be called anywhere in file, even before function declaration


// Exercise: Boolean Expressions
// 1

!(5 === "5") && (6 > 5) && (1 >= 0)
// True && True && True
// --> True

(5 < 4) || !(3 == 3) && true
// False || True && True
// --> False


// Exercise 1: Loops

var phoneBook = {
  "Abe": "111-111-1111",
  "Bob": "222-222-2222",
  "Cam": "333-333-3333",
  "Dan": "444-444-4444",
  "Ern": "555-555-5555",
  "Fry": "111-111-1111",
  "Gil": "222-222-2222",
  "Hal": "333-333-3333",
  "Ike": "444-444-4444",
  "Jim": "555-555-5555",
  "Kip": "111-111-1111",
  "Liv": "222-222-2222",
  "Mia": "333-333-3333",
  "Nik": "444-444-4444",
  "Oli": "555-555-5555",
  "Pam": "111-111-1111",
  "Qiq": "222-222-2222",
  "Rob": "333-333-3333",
  "Stu": "444-444-4444",
  "Tad": "555-555-5555",
  "Uwe": "111-111-1111",
  "Val": "222-222-2222",
  "Wil": "333-333-3333",
  "Xiu": "444-444-4444",
  "Yam": "555-555-5555",
  "Zed": "111-111-1111"
};

for (var thing in phoneBook) {
  if (phoneBook[thing] == "333-333-3333") {
    console.log(thing);
  }
}

// Exercise 2: Loops

for (var i = 1; i < 30; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}


// Exercise 1: Functions

var lightsabers = function(num) {
  console.log('I have ' + num + ' lightsabers.');
}
lightsabers(2);
// Returns "I have 2 lightsabers."

// Exercise 2: Functions

var myLightsaberCollection = {
  blue: 1,
  green: 3
}

var lightsabers = function(lightsaberCollection) {
  for (var thing in myLightsaberCollection) {
    if (myLightsaberCollection[thing] > 1) {
      console.log(" I have " + myLightsaberCollection[thing] + " " + thing + " lightsabers.");
    } else {
      console.log(" I have " + myLightsaberCollection[thing] + " " + thing + " lightsaber.");
    }
  }
}

lightsabers(myLightsaberCollection);



