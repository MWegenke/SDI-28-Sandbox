
// var age;

// age = 51;

// let age = 51;

// const myName = "Wagonkey";

// function mattsFunction(currAge, name){
//   //The 51 year old Wagonkey is the best!
//   console.log(`The ${currAge} year old ${name} is the best!`)
//   // console.log("The ", age, " year old ", myName, " is the best!")
// }

// mattsFunction(age, myName)

// function happyBirthday(){
//   //in memory somewhere 51,51,51,51,etc
//   age++
// }

// happyBirthday() 


// console.log(age)

// mattsFunction(happyBirthday(age) ,myName)


////////////////////////// LEARNING WITH STRINGS ///////////////////////////////
let Name = "andrew";

function reverseUno(str){
  //parses the string out creating an array
  var stringSplit = str.split("")
  //reverses the array
  var arrayReverse = stringSplit.reverse()
  //joins all the elements in the array back into a string
  var arrayJoin = arrayReverse.join("")
  return arrayJoin
}
console.log(reverseUno(Name));

/////////////////////////////////////////////////////////////////////////////////////