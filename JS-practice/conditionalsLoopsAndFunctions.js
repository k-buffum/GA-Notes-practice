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

