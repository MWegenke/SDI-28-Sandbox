//OBJECT FUNDAMENTALS

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
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
