
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

//loop through object nested in array
// let lotto = [
// 	{name: "John", numbers: [6, 5, 3, 11, 34]},
// 	{name: "Steve", numbers: [9, 15, 13, 21, 14]}
// ]

// const getNums = (arr) => {
//   let allNums = [];
//   debugger
//   for(let elm of arr){
//     for(let num of elm.numbers){
//       allNums.push(num);
//     }
//   }
//   console.log(allNums);
//   return allNums;
// }

// getNums(lotto);

// Using document API functions, when given the following HTML, create a new variable as a <p> HTML element called
// "paragraphElement" and append it to the div with the id "infoParagraphContainer".
// Set the innerHTML on the paragraphElement to say "Here at Galvanize, we're here to equip students for the future!"

// <body>
//   <div id="aboutMe" >
//     <h3>Learn more about our company:</h3>
//     <div id="infoParagraphContainer" ></div>
//   </div>
// </body>

// let paragraphElement = document.createElement('p');
// let paragraphContainer = docmuent.querySelector('#infoParagraphContainer');
// paragraphContainer.appendChild(paragraphElement);
// paragraphElement.innerHTML = "Here at Galvanize, we're here to equip students for the future!"

//and using only innerHTML on the infoParagraphContainer div

// var paragraphElementString = `<p>Here at Galvanize, we're here to equip students for the future!</p>`;
// var paragraphContainer = document.querySelector('#infoParagraphContainer');
// paragraphContainer.innerHTML = paragraphElementString;

//POST request syntax

// let newPost = {
//   userId: 1,
//   title: "My post",
//   body: "This is my first post"
// };

// fetch("https://jsonplaceholder.typicode.com/posts", {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json"
//   },
//   body: JSON.stringify(newPost)
// })
//   .then((rawResponse) => {
//     if (!rawResponse.ok) {
//       throw new Error(
//         `code: ${rawResponse.status}, status text: ${rawResponse.statusText}`
//       );
//     }
//     return rawResponse.json();
//   })
//   .then((jsonifiedResponse) =>
//     console.log("Jsonified data: ", jsonifiedResponse)
//   )
//   .catch((error) => console.log(error));

//FETCH guide
// https://jsonplaceholder.typicode.com/guide/

//FETCH get
// function getAllPosts() {
//   //Write a function that uses fetch to return a Promise that resolves to the _JavaScript_ array of *all posts*.
//           return fetch('https://my.fake-blog-api.com/posts')
//           .then((response) => response.json())
//   }

//LOCAL STORAGE
//ADD
//localStorage.setItem("key", "value");
//GET
//localStorage.getItem("key")
//REMOVE
//localStorage.removeItem("key");
//REMOVE ALL
//localStorage.clear();

//.call/.apply execute the function immediatly .bind creates a function for later use

// class Car {
//     constructor(horsepower){
//         this.horsepower = horsepower;
//     };
//     static checkIfFast(carInstance) {
//         if(carInstance.horsepower > 300) {
//             return true;
//         };
//         return false;
//     }
// };
// const maserati = new Car(500);
// maserati.checkIfFast();

