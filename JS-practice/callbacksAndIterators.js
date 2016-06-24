// Callbacks: setTimeout(functionName, delayTimeInMilliseconds)

var announce = function() {
  console.log('Ding!');
}

var threeSecondTimeout = setTimeout(announce, 3000);
// Calls the function but doesn't preform until 3 seconds have passed (just like typing announce but it delays the call)

// Anonymous functions: functions that are not stored to a variable, great for functions you only need to define once
var fiveSecondTimeout = setTimeout(function() {
  console.log('Ding!');
}, 5000);

// setInterval(functionName, howOftenYouWantFunctionCalled)
//EXAMPLE
function annoy() {
  console.log('Are we there yet?');
}
var oneSecondInterval = setInterval(annoy, 1000);
// Repeats function call every second

// DISABLE timers using: clearTimeout(timeoutHandle), clearInterval(intervalHandle)
var fourSecondTimeout = setTimeout(announce, 4000);
clearTimeout(fourSecondTimeout);

clearInterval(threeSecondInterval);
clearInterval(fiveSecondInterval);

// Returning functions from functions

var drinkMaker = function(drinkType) {
  return function(drinkVolume) {
    return {
      drink: drinkType,
      volume: drinkVolume
    };
  };
};

var cocktailMaker = drinkMaker('cocktail');
var smoothieMaker = drinkMaker('smoothie');

cocktailMaker('4oz');
smoothieMaker('16oz');

// Iterators - 4 main JS iterators: forEach, map, reduce, filter

// forEach: .forEach(function/functionName(argument)), works just like a normal for loop
var friends = ["Markus", "Tim", "Ilias", "Elie"];
friends.forEach(function (buddy) {
  console.log("Hello, " + buddy + "!");
});

// map: arrayName.map(function(argument)) --> Returns a new array
var names = ["katlyn", "tyler", "lizzy", "josh"];
var capitalized = names.map(function(person) {
  return person.toUpperCase();
});
console.log(capitalized);
// Returns ['KATLYN', 'TYLER', 'LIZZY', 'JOSH']

// filter: loops through an array and filters it down to subset of original array.
//If the callback returns true, element is added to new array.

var dogNames = ["jessie", "zeus", "maya", "nacho", "chilli"];
var isEven = function(dog) {
  return dog.length % 2 === 0;
};
var isOdd = function(dog) {
  return dog.length%2 !== 0;
};
var evenDogNames = dogNames.filter(isEven);
var oddDogNames = dogNames.filter(isOdd);
console.log(evenDogNames); //Returns [ 'jessie', 'zeus', 'maya', 'chilli' ]
console.log(oddDogNames); //Returns ['nacho']

// reduce: iterates over array and turns it into one value
// arrayName.reduce(functionName)
// It also accepts 3rd value to start function from, ex) nums.reduce(add, 10) --> begins at 10 resulting in function returning 20
// Example

var nums = [1, 2, 3, 4];
var add = function (a, b) {
  return a + b;
};
var sum = nums.reduce(add);
console.log(sum);
// Returns 10