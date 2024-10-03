//3OCT24 OBJECT FUNDAMENTALS:

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
function addToBack(arr, element) {
  // your code here

 arr.push(element);
 return arr

}

var output = addToBack([1, 2], 3);
console.log(output); // -> [1, 2, 3]

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////