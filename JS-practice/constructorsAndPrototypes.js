// Constructor Notation

// Example of contructor function
function functionName(parameter1, parameter2, parameter3) {
  this.parameter1 = parameter1;
  this.parameter2 = parameter2;
  this.parameter3 = parameter3;
}

var thingOne = new functionName(a, b, c);
var thingTwo = new functionName(d, e, f);
var thingThree = new functionName(g, h, i);

// Example 2 of contructor function from notes

var Person = function(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.fullName = function() {
    return ("Hello " + this.firstName + " " + this.lastName);
  }
}

// This can also be written as:

function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.fullName = function() {
    return ("Hello " + this.firstName + " " + this.lastName);
  }
}

// Prototypes