"John" + "Jane"
// Returns "JohnJane"

"1" + 1
// Returns "11"

parseInt("1") + 1
// Returns 2

Math.pow(3,2)
// Returns 9

Math.pow(2,4)
// Returns 16

Math.sqrt(4)
// Returns 2

Math.sqrt(81)
// Returns 9

Math.random()
// Returns a random float number between 0 and 1

Math.random() * 10
// Returns a random float number between 0 and 10

Math.floor(Math.random() * 10)
// Retuns an random integer betweem 0 and 10

var example = "Variables are always camelCase and don't forget to use 'var'.";

var myNumber = 5;
var numToString = myNumber.toString();
// numToString value is "5"

var commonStringNumberMethods = "Numbers: .toString, .toFixed(), parseInt('num'), parseFloat('float_num'), Strings: .split(''), .indexOf('string'), .toUpperCase(), .toLowerCase(), .replace('old', 'new')";

var array = ["This", "is", "an", "array"];

var arrayMethods = [".pop()", ".push('element')", ".shift()", ".unshift('element to be added to beginning of arrray')", ".concat([array1, array2])", ".slice()", ".splice()", ".reverse()", ".sort()", ".join('joins array elements into a string')"]

var objectExample = {
  firstObject: "Jessie",
  secondObject: "Coona Matata"
}
objectExample.firstObject || objectExample["firstObject"]
// Returns "Jessie"
objectExample.secondObject || objectExample["secondObject"]
// Retunr "Coona Matata"


// EXERCISE - Array Methods
var favorites = "pizza, strawberry, grape juice, tacos";
var favoritesArray = favorites.split(", ");
favoritesArray

//EXERCISE - Objects
function friend(firstName, lastName, age, address) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.address = address;
}

var John = new friend("John", "Doe", 36, "1234 Park st.");
// Change John's address to "1234 Park ln"
John.address = "1234 Park ln";


