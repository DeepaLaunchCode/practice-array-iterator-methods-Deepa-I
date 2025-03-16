// Task 1: Using forEach()
let favoriteCities = ["Mumbai", "Paris", "New York", "Sydney", "Chicago"];

favoriteCities.forEach(city => console.log(city.toUpperCase()));
/*output: task 1
MUMBAI
PARIS
NEW YORK
SYDNEY
CHICAGO 
*/

// Task 2: Transforming with map()
let numbers = [1, 2, 3, 4, 5];
let squares = numbers.map(num => num ** 2);

console.log(squares);
/*output: task 2
[ 1, 4, 9, 16, 25 ]
 */



// Task 3: Filtering with filter()
let scores = [85, 42, 90, 75, 30, 100];
let highScores = scores.filter(score => score >= 80);

console.log(highScores);
/*output: task 3
[ 85, 90, 100 ] 
 */

// Task 4: Finding with find() and findIndex()
let favoriteFood = ["Sandwitch", "Biryani", "Pasta", "Cake", "Burger", "Pizza"];
let firstLongFood = favoriteFood.find(food => food.length > 4);
let indexLongFood = favoriteFood.findIndex(food => food.length > 4);

console.log("First food with more than 4 letters:", firstLongFood);
console.log("Index of that food:", indexLongFood);

/*output: task 4
// First food with more than 4 letters: Sandwitch
// Index of that food: 0
*/