
// var age;

// age = 51;

// let age = 51;

// const myName = "Wagonkey";

// function mattsFunction(currAge, name){
  //The 51 year old Wagonkey is the best!
  // console.log(`The ${currAge} year old ${name} is the best!`)
  // console.log("The ", age, " year old ", myName, " is the best!")
// }

// mattsFunction(age, myName)

// function happyBirthday(){
  //in memory somewhere 51,51,51,51,etc
//   age++
// }

// happyBirthday()
// happyBirthday()
// happyBirthday()
// happyBirthday()
// happyBirthday()

// console.log(age)

// mattsFunction(happyBirthday(age) ,myName)

// happyBirthday()

// Rock paper scissors game
// const rps = (p1, p2) => {
//   var who = true;
//   var wins;
//   if(p1 === p2){
//     wins = "Draw!"
//   } else {
//     if(p1 === "scissors" && p2 === "rock"){
//       who = false;
//     } else if(p1 === "paper" && p2 === "scissors"){
//       who = false;
//     } else if(p1 === "rock" && p2 === "paper"){
//       who = false;
//     }
//     if (who){
//       wins = "Player 1 won!"
//     }
//     else if(!who){
//       wins = "Player 2 won!"
//     }
//   }
//   return wins;
// };

let lotto = [
	{name: "John", numbers: [6, 5, 3, 11, 34]},
	{name: "Steve", numbers: [9, 15, 13, 21, 14]}
]

const getNums = (arr) => {
  let allNums = [];
  debugger
  for(let elm of arr){
    for(let num of elm.numbers){
      allNums.push(num);
    }
  }
  console.log(allNums);
  return allNums;
}

getNums(lotto);