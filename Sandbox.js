
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
// happyBirthday()
// happyBirthday()
// happyBirthday()
// happyBirthday()

// console.log(age)

// // mattsFunction(happyBirthday(age) ,myName)

// // happyBirthday() 

// console.log("some javascript");

// if(NaN){
//   console.log('Is true')
// }else{
//   console.log('Is falsy')
// }

// var number = 0

// FOR LOOP PRACTICE
// // for (var i = 0; i < 10; i++) {
// //   number++;
// //   console.log(number);
// // }

// for (var i = 1; i < 10; i++) {
//   let x = i * .5;
//   console.log(x);

// //OPERATOR PRACTICE
// console.log(!"Hello");
// console.log(!5);

// console.log(true || false);
// console.log(11 && 0);
// console.log(!undefined);
// console.log(12 < 6);
// console.log(3 + 4 - 2);
// console.log(5 === 5);

// // //should log false
// // //should log zero
// // //should log true
// // should log false
// // should log 5
// // should log true

// console.log("BREAK");

// console.log(true || false && true);
// console.log((true || false) && true);
// console.log(undefined !== 22+3);
// console.log(!(undefined !== 22+3));
// console.log((12 > 6) + 1);
// console.log(!5 == 0);
// console.log(~5 === 0);

// should log true
// should log true
// should log true
// should log false
// should log 2??
// should log true
// should log false

//EXPRESSIONS VS STATEMENTS

// let age = 23;
// document.write(age >= 21 ? '')

//LOOPS

// let number1 = 10;
// let number2 = 10;

// do {
//   console.log("No other loop would execute this");
// } while (number1 < number2);

//SWITCH STATEMENT
// const expr = 'Summer';

// switch (expr) {
//   case 'Summer':
//     console.log(`The season is ${expr}`);
//     break;
//   case 'Fall':
//   	console.log(`The season is ${expr}`);
//     break;
//   case 'Winter':
//     console.log(`The season is ${expr}`);
//     break;
//   case 'Spring':
//     console.log(`The season is ${expr}`);
//     break;  
//   default:
//     console.log(`Sorry, ${expr} is not a season.`);
// }

//CONTROL FLOW CHALLENGES
// 1
// let theme = 'dark';
// theme = theme == 'dark' ? 'light' : 'dark';
// console.log(theme);

// let theme = 'dark';
// let theme = 
// if (theme == 'dark') {
//     theme
// }

//2
// console.log(false || true);
// console.log(true || false);

//3
// function myFunction() {
//     let result = ''
//     for (var i = 0; i < 10; i++) {
//       result += 'I will excessively log\n'
//     }
//     // Your code here
  
//     return result;
//   }
  
//   var output = myFunction()
//   console.log(output);

// //4
// switch (dino) {
//     case 'tyrannosaurus':
//         return 'purple';
//     case 'protoceratops':
//         return 'yellow';
//     case 'triceratops':
//         return 'green';
//     default:
//         return 'rainbow';
// }

// var superman = {
//     alias: "Superman",
//     name: "Clark Kent",
//     'location': "Smallville",
//     'age in years': 50
//   }
  
//   let currentKey = 'alias';
  
//   console.log(superman[currentKey]);
  
//   currentKey = 'location';
  
//   console.log(superman[currentKey]);
  
//   currentKey = 'age in years';
  
//   console.log(superman[currentKey]);

//TAKEAWAY!!!!!! Bracket notation is better then dot notation because it allows you to access properties of an object with strings, a variable can take the plae of the property, and it can accept a number (because dot notatio automatically processes the property of the object as a string value)

// //FOR...IN PRACTICE
// let cats = {};
// // console.log(cats);
// cats.Orange = 'Callie';
// // console.log(cats);
// cats['Grey'] = 'Vlad';
// // console.log(cats);
// cats.Black = 'Arya';
// cats.White = 'Zema';
// console.log(cats);

// for (var color in cats) {
//     console.log(`${cats[color]}: ${color}`);
// }

//IN OPERATOR PRACTICE

// if ('Orange' in cats) console.log("There is an orange cat");
// else console.log("there is no orange cat");

// let property = 'Tuxedo';
// if (property in cats) console.log(`The ${property} cat is ${cats[property]}`);
// else console.log(`There is still no ${property} cat`);

// let dog = {name: "Chance", breed: "German shepherd", weight: 100};

// if('age' in dog) console.log("The dog has an age");
// else console.log("The dog has NO age");

// let key = "breed";

// if(key in dog) console.log(`The dog has a ${key}`);
// else console.log(`The dog has NO ${key}`);

//NESTED OBJECT PRACTICE

// let cats = {
//     Callie: {
//         Color: 'Orange',
//         Age: 7,
//         Temperment: 'Adorable'
//     },
//     Vlad: {
//         Color: 'Grey',
//         Age: 5,
//         Temperment: 'Chill'
//     },
//     Zema: {
//         Color: 'White',
//         Age: 9,
//         Temperment: 'Deaf'
//     },
//     Skippy: {
//         Color: 'Tuxedo',
//         Age: 6,
//         Temperment: 'Afraid'
//     }
// }

// console.log(cats.Callie.Color);
// cats.Arya = {};
// cats.Arya.Color = 'Black';
// console.log(cats.Arya.Color);

// for (key in cats) {
//     for (subkey in cats[key]) {
//         //console.log(cats[key][subkey]);
//         //console.log(`${key} is a ${key[Age]}-year old ${key[Color]} cat, who is very ${key[Temperment]}`);
//         //return cats[subkey];
//         console.log(`${key} is a ${key.Age}-year old ${key.Color} cat, who is very ${key.Temperment}`);
//     }
    
// }

//WORKINg WIth ObJECTS CHALLENGES
//2
// let secondWorstObjectEver = {
//     fish: 'gold',
//     'i love spaces': 17,
//     underscores_are_better: 'probably true',
//     5876: 'numbersnumbersnumbers',
//     'exactly': {},
//   };

//   console.log(secondWorstObjectEver.'exactly');

// let cats = [];
// cats.push('Callie');
// console.log(cats);
// cats.push('Vlad', 'Skippy', 'Zema');
// console.log(cats);
// console.log(cats.indexOf('Callie'), '\n', cats.indexOf('Sirus'));
// console.log(cats[2]);
// //cats[4] = 'Arya';
// cats.push('Arya');
// console.log(cats);
// console.log(cats.length);
// console.log(cats[cats.length - 1]);
// // for (var i = 0; i < cats.length; i++) {
// //     console.log(cats[i]);
// // }
// // for (let element of cats) {
// //     console.log(element);
// // }
// for (let [index, cat] of cats.entries()) {
//     console.log(index, cat);
// }

//JAVASCRIPT ARRAYS CHALLENGES
//1**********
// const myFunction = (num) => {
//     const functionArray = [
//       (num) => (num += 1),
//       (num) => (num * 2),
//       (num) => (num * 534),
//       (num) => (num / 3),
//       (num) => (Math.floor(num))
//     ];
  
//     for (const func of functionArray) {
//       func
//       console.log(num);
//     }
//   }

//   myFunction(5);

// //CONCATENATION PRACTICE
// let cities = ["Ottawa", "Tokyo"];
// let moreCities = ["Kathmandu", "Bangkok"];

// cities.concat(moreCities);

// console.log(cities); //what is the output?

// let combinedCities = cities.concat(moreCities);

// console.log(combinedCities); //what is the output?

// let evenMoreCities = ["Samarkand", "Sofia"];

// combinedCities = moreCities.concat(cities, evenMoreCities);

// console.log(combinedCities); //what is the output?

//JAVASCRIPT ARRAYS CHALLENGES
// //4
// function computeAverageOfNumbers(nums) {
//     var total = 0;
//     var average = 0;
//     if (nums.length > 0) {
//       for (var i = 0; i < nums.length; i++) {
//         total += nums[i];
//         average = total / nums.length;
//       }
//     }
//     return average;
// }

//   var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//   var output = computeAverageOfNumbers(array);
//   console.log(output);

//JAVASCRIPT ARRAYS CHALLENGES
// //5
// function addToBack(arr, element) {
//     array.push(element)
//     return array;
//   }

//   const number = {
//     count: 10
//   };
//   console.log(number.count);
//   number.count += 10;
//   console.log(number.count);

//FUNCTIONS - DEEPER DIVE CHALLENGES
//1
//   var key;;
//   console.log({key});

//   name => ({name})
//   console.log(const project = name => ({name})())
// let cats = ["Siamese", "Burmese", "Russian Blue"]

// let newCats = cats;

// newCats.push("Abyssinian");

// console.log(cats);

// const addBreed = (breedList, newBreed) => {
// 	let myCats = breedList;
// 	myCats.push(newBreed);
// }

// addBreed(cats, "Maine Coon");

// console.log(cats);
// let dailyWeather = {
//     conditions: 'Cloudy',
//     temperature: 48,
//     temperatureUnit: 'F',
//     humidity: '22%',
//     wind: {
//       speed: 20,
//       speedUnit: 'mph',
//       direction: 'NW',
//     },
//     getSummary: function() {
//       return 'Conditions: ' + this.conditions + ' ' + 'Temperature: ' + this.temperature + this.temperatureUnit;
//     }
//   }

//   console.log(dailyWeather[wind].speed);

// // let number = ? valid : 1 : 0;
// let number = valid ? 1 : 0;

//JAVASCRIPT FUNDAMENTALS 2 CHECKPOINT
//9
// function getConcatenatedArrayAndMiddleElement(array1, array2) {
//     // Replace undefined's in the variables below with your code
//     let concatenatedArray = array1.concat(array2);
//     let middleElement = concatenatedArray[concatenatedArray.length / 2];
  
//     // do not modify
//     return {concatenatedArray, middleElement};
//   }

//   var output = getConcatenatedArrayAndMiddleElement([1, 2], [3, 4]);
//   console.log(output);

//JAVASCRIPT FUNDAMENTALS 2 CHECKPOINT
//10&11
// const getNums = (arr) => {
//   let allNums = [];
	
//   for(let elm of arr){
//     for(let i = 0; i < elm.numbers.length; i++){
//         let number = elm.numbers[i]
//         var banana = 'banana';
//         //console.log(number);
//         allNums.push(number);
//     }
//     console.log(banana);
//   }
	
//   return allNums;
// }

// var lotto = [
// 	{name: "John", numbers: [6, 5, 3, 11, 34]},
// 	{name: "Steve", numbers: [9, 15, 13, 21, 14]}
// ];
// var output = getNums(lotto);
// console.log(output);
// function emptyFunction(banana) {
//     console.log('banana');
// }

// emptyFunction()
// console.log(banana);

// //JAVASCRIPT FUNDAMENTALS II CHECKPOINT
// //12
// const x = 1;
// if (true) {
//   let y = 2;
//   var z = 3;
// };
// const fizz = () => {
//   const w = 4;
//   console.log(w);
// }

// fizz()

//JAVASCRIPT FUNDAMENTALS II CHECKPOINT
//13
const cityState = (city, state) => {
    return `${city} is in ${state}`;
}
//ar output = cityState()
console.log(cityState());