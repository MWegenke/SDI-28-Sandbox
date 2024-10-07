//03OCT24 OBJECT FUNDAMENTALS:

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//HOW TO ACCESS NESTED OBJECTS:

// var unitedStates = {
//   population : 331900000,
//   states : {
//     nd : {
//       capital: 'Bismark',
//       population : 774948,
//       largestCity : {
//         name: 'Fargo',
//         population : 126748
//       }
//     },
//     tx : {
//       capital : 'Austin',
//       population : 29530000,
//       largestCity : {
//         name: 'Houston',
//         population : 2326000
//       }
//     }
//   }
// }

// for (key in unitedStates){
//   console.log(key)
// }
//   /* Expected Output:
//   population
//   states
//   */
///////////////////////////////////////////////////////////////////////////////////
// for (key in unitedStates){
//   console.log(unitedStates[key])
// }
//   /* Expected Output:
//   all of the nested information
//   */
// for (key in unitedStates){
//   for (subKey in unitedStates[key]){
//     console.log(subKey);
//   }
// }
//   /* Expected Output:
//   => "nd"
//   => "tx"
//   */
////////////////////////////////////////////////////////////////////////////////////
// for (key in unitedStates){
//   for (subKey in unitedStates[key]){
//     console.log(unitedStates[key][subKey]);
//   }
// }
//   /* Expected Output:
//   => > Object { capital: "Bismark", population: 774948, largestCity: Object { name: "Fargo", population: 126748 } }
//   => > Object { capital: "Austin", population: 29530000, largestCity: Object { name: "Houston", population: 2326000 } }
//   */
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// //INDEXING:

// var worldAuthors = ['Edgar Allan Poe', 'Fyodor Dostoevsky', 'J.R.R Tolkien', 'Homer', 'Victor Hugo'];
// console.log(worldAuthors[2]);

// /* Expected Output:
// => J.R.R Tolkien
// */

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//THE FOR LOOP VS THE FOR...OF LOOP FOR ITERATING OVER AN ARRAY:

// let array = ["dog", "cat", "fish"];

// for(let index = 0; index < array.length; index++){
//   console.log(array[index]);
// }

// //FOR...OF:
// for(let [index, animal] of array.entries()){
// 	console.log(index, animal)
// }
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//ITERATING OVER NESTED ARRAYS:

//     //this is an array that shows each apartment on each floor of an apartment building
// const apartments = [ ["001", "002", "003", "004", "005"], ["101", "102", "103", "104", "105"], ["201", "202", "203", '204', "205"], ["301", "302", "303", "304", "305"] ];

//     //this logs the inner arrays (floors), but not individual apartments
// for(let index = 0; index < apartments.length; index++){
//   console.log(apartments[index]);
// }

//     //this accesses each apartment and adds the letter A to the number
// for(let floorIndex = 0; floorIndex < apartments.length; floorIndex++){
//   for(let aptIndex = 0; aptIndex < apartments[floorIndex].length; aptIndex++){
//       apartments[floorIndex][aptIndex] = "A" + apartments[floorIndex][aptIndex];
//   }
// }
// console.log(apartments);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//ADD TO BACK OF AN ARRAY:
// function addToBack(arr, element) {
//   // your code here

//  arr.push(element);
//  return arr

// }

// var output = addToBack([1, 2], 3);
// console.log(output); // -> [1, 2, 3]

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//ARROW FUNCTION SYNTAX
//arrow functions take out the length and make functions less complex
//Compare!:

// //not arrow function:
// function canDrive(person) {
//   return person.age > 15;
// }

// //       VS

// //wordy arrow function:
// const canDrive = (person) => {
//   return person.age > 15;
// };

// //        VS

// //Concise arrow function:
// const canDrive = person => person.age > 15;

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//07OCT2024 JS FUNDAMENTALS III:

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// //THE MAP METHOD:

// /*Creates a new array that's the same size as the original array.
// Applies a function to each element of the original array.
// Pushes the return value of the function into the new array.*/


// const arr = [1, 2, 3, 4];
// const squares = arr.map(function(element) {
//   return element * element;
// });
// console.log(squares); // [1, 4, 9, 16]

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// //THE FILTER METHOD:

// /*iterates over an existing array and allows us to filter (keep)
// only the elements from that array which pass a certain logical comparison (condition).
// The filter method automatically returns an array with only those elements.*/

//Ex:
// let names = ["Bob", "Tom", "Ben", "John", "Ted", "Todd"];
// let tNames = names.filter(name => name.charAt(0) == "T");
// console.log(tNames); // ["Tom", "Ted", "Todd"]

//Ex:
// const arr = [1, 2, 3, 4];
// const odds = arr.filter(element => {
//   return element % 2 !== 0;
// });
// console.log(odds); // [1, 3]

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//THE FIND METHOD:
/* The first element which passes the comparison, is returned as the end result of the find method.*/

//Ex:
// let names = ["Bob", "Tom", "Ben", "John", "Ted", "Todd"];
// let tNames = names.find(name => name.charAt(0) == "T");
// console.log(tNames); // "Tom"

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// //THE REDUCE METHOD:

// //Ex:
// const arr = [1, 2, 3, 4];

// const sum = arr.reduce(function(result, element) {
//   return result + element;
// }, 0);

// const product = arr.reduce(function(result, element) {
//   return result * element;
// }, 1);

// console.log(sum);     // 10
// console.log(product); // 24

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//PUTTING IT ALL TOGETHER:

// //Ex:
// /*Chain Array's reduce, map, and filter methods (or at least two of them)
//  to reduce the input array of student data to an average age of the entire class.*/
//
//  const students = [
//   { name: "Stephen", age: 24 },
//   { name: "Alice", age: 19 },
//   { name: "Jordan", age: 29 },
//   { name: "Julie", age: 21 },
//   { name: "Chris", age: 26 }
// ]
//
// let averageAge = students.map(student => student.age) // Extract ages
// .reduce((sum, age) => sum + age, 0) // Sum the ages
// / students.length; // Divide by the total number of students
// console.log(averageAge); // Output: 23.8