
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
// //13
// const cityState = (city, state) => {
//     return `${city} is in ${state}`;
// }
// //ar output = cityState()
// console.log(cityState());


//DAY 6
//October 7, 2024
//SPREAD PRACTICE: Javascript Fundamentals III "'CLEAN' Javascript"
// var newObject = {
//     id: 1,
//     username: "connor",
//     coding: true
// }

// console.log(newObject);

// var newerObject = Object.assign(
//     {},
//     newOb
//     {username: "Taberski"}
// )

// console.log(newerObject);

// var newestObject = {
//     ...newerObject,
//     username: "James"
// }

// console.log(newestObject);

// var {coding, ...laterObject} = newestObject;

// console.log(laterObject);

// var {coding, ...latestObject} = {
//     ...newObject,
//     username: "Taberski"
// }

// console.log(latestObject);

// var user = {
//     name: "Stacy",
//     relation: "Mom",
//     emotion: "Love"
// }

// var userEr = {
//     ...user,
//     property: "Got it goin on"
// };

// console.log(user);
// console.log(userEr);

//SPEAD OPERATOR IN A FUNCTION: Javascript Fundamentals III "'Clean' Javascript"
// function printAnimal(singleParameter) {
//     console.log(singleParameter);
// }

// printAnimal("dog", "cat", "fish");

// function printAnimals(...multipleParameter) {
//     console.log(multipleParameter);
// }

// printAnimals("dog", "cat", "fish");

// //CREATE NEW FUNCTIONS with FUNCTIONS
// function greaterThan(n) {
//     return m => m > n;
//   }
//   let greaterThan10 = greaterThan(10);
//   console.log(greaterThan10(11));
//   // → true

// //FOREACH HOF: Javascript Fundamentals III "Higher Order Functions"
// var arr = [1, 2, 3, 4];

// arr.forEach(function(element) {
//     console.log(element);
// });

// //MAP HOF: Javascript Fundamentals III "Higher Order Functions"
// let count = 0;
// var multiplied = arr.map((num) => {
//     count++;
//     console.log(count);
//     return num * 2;
// });

// console.log(multiplied);
// console.log(count);

// //FILTER PRACTICE: Javascript Fundamentals III "Higher Order Functions"
// var arr = [1, 2, 3, 4, 5, 6, 7];
// var odds = arr.filter(element => {
//     return element % 2 !== 0;
// });

// console.log(odds);

// //FIND PRACTICE: Javascript Fundamentals III "Higher Order Functions"
// let names = ["Bob", "Tom", "Ben", "John", "Ted", "Todd"];

// let tNames = names.find(name => name.charAt(0) == "T");

// console.log(tNames); // "Tom"

//QUESTION 5: Javascript Fundamentals III "HIGHER ORDER FUNCTIONS"
// const students = [
//     { name: "Stephen", age: 24 },
//     { name: "Alice", age: 19 },
//     { name: "Jordan", age: 29 },
//     { name: "Julie", age: 21 },
//     { name: "Chris", age: 26 }
// ]

// let averageAge = (students.map(element => {
//     return element.age;
// }).reduce((age, sum) => {
//     return age + sum;
// }, 0)) / students.length;

// console.log(averageAge);

// // //SUM of AGES (students.map(element => {
// //     return element.age;
// // }).reduce(element, sum) => {
// //    // return element + sum
// //    //}, 0) / students.length

//    function createArray(array) {
//     var array = [];
//     for (var i = 0; i < array.length; i++) {
//         array.push[i.age]
//     }
//     return array;
//    }

// //OOP in Javascript: Introduction
// class Cat {
//     constructor(breed, age, gender) {
//         this.breed = breed;
//         this.age = age;
//         this.gender = gender;
//     }
// }

// var callie = new Cat("Domestic Shorthair", 7, "Female");
// console.log(callie);

// class Car {
//     constructor(speed) {
//     this.fuel = 0;
//     this.distance = 0;
//     this.speed = speed
//     }
//     move() {
//         if(this.fuel < 1) {
//             throw new RangeError('Fuel tank is empty')
//         }
//         this.fuel--
//         this.distance += 2
//     }
//     addFuel() {
//         if(this.fuel >= 60) {
//             throw new RangeError('Fuel tank is full')
//         }
//         this.fuel++
//     }
    
// }

// var myCar = new Car(60)
// console.log(myCar);
// // myCar.addFuel()
// // console.log(myCar)
// // myCar.move()
// // console.log(myCar)
// // myCar.move()
// // console.log(myCar)
// // //myCar.move()

// class Prius extends Car {
//     constructor(speed) {
//         super(speed * 2)
//     }
//     move() {
//         super.move()
//         this.distance += 4
//     }
// }

// var myPrius = new Prius(60)
// console.log(myPrius);
// // myPrius.addFuel()
// // console.log(myPrius)
// // myPrius.move()
// // console.log(myPrius)
// // myPrius.move()
// // console.log(myPrius)
// // myPrius.move()

// console.log(myPrius instanceof Prius)
// console.log(myCar instanceof Car)
// console.log(myPrius instanceof Car)
// console.log(myCar instanceof Prius)

//OOP in Javascript: This
// const bob = {
//     name: 'Bob Weir'
//     greet: function() {
//         return `Hi I am ${this.name}`
//     }
// }

// const jerry = {
//     name: 'Jerry Seinfeld'
//     greet: bob.greet
// }

// const result = jerry.greet()
// console.log(result)

// let person = {
//     name:'Jack Bauer',
//     printName: function(){
//       console.log(person.name) // reference to the 'person' object
//     }
//   }
  
//   person.printName() // prints 'Jack Bauer'

//   let human = person;
// person = {}
// human.printName();

// let person = {
//     name:'Jack Bauer',
//      printName: function(){
//       console.log(this.name)
//     }
//   }
  
//   person.printName()   // prints 'Jack Bauer'
  
//   let human = person;  // set `human` to reference `person`
//   person = {}          // set `person` to reference a new object.
//   human.printName();   // prints 'Jack Bauer'

//OOP in Javascript: This Question 9
// const employee = {
//     name: 'Bob',
//     salary: 60000,
//     raiseSalary: function(amount) {
//         this.salary += amount
//         console.log(this.salary)
//     }
//   }

//   employee.raiseSalary(20000)

//OOP in Javascript: This Question 10a
// const coordinates = {
//     x: 2,
//     y: 5,
//     getPosition() {
//       return `${this.x}, ${this.y}`
//     }
//   }
  
//   const retrievePosition = coordinates.getPosition();
//   console.log(retrievePosition)

//OOP in Javascript: Static Methods
//   class User {
//     static StaticPrinter() {
//         console.log('Static method has been called')
//     }
//   }

//   User.StaticPrinter();

//   var newPrint = new User();
//   newUser.staticPrinter();

//OOP in Javascript: Static Methods Question 4
// class Car {
//     constructor (make, model, maxSpeed) {
//       this.make = make
//       this.model = model
//       this.maxSpeed = maxSpeed
//     }
  
//     move (location) {
//       console.log(`Speeding along to ${location}`);
//     }
  
//     description () {
//       console.log(`${this.make} ${this.model}`)
//     }
      
//     increaseMaxSpeed(speedIncrease) {
//       this.maxSpeed += speedIncrease
//     }
//     static isCar(newCar) {
//         return newCar instanceof Car
//     }
//   }


// var newCar = new Car("Toyota", "Tacoma", 140)
// console.log(Car.isCar(newCar))
// var randomObject = {};
// console.log(Car.isCar(randomObject));

// class Classroom {
//     constructor(count) {
//         this.count = count;
//     };
//     addStudents(num) {
//         this.count += num;
//     };
// };
// const classOne = new Classroom(20);
// const classOneCopy = classOne;
// classOneCopy.addStudents(10);
// classOne.addStudents(5);
// classOne.addStudents(10);
// classOneCopy.addStudents(10);
// console.log(classOne.count)

// class Dog {
//     constructor(breed, name) {
//         this.breed = breed;
//         this.name = name;
//     };
//     bark(numberOfTimes) {
//         console.log(`${this.name}, a ${this.breed}, barks ${numberOfTimes} times!`)
//     };
// }
// class ToyDog extends Dog {
//     constructor(breed, name) {
//         super(breed, name);
//     };
//     bark(numberOfTimes) {
//        console.log(`${this.name}, a very small and cute ${this.breed}, barks ${numberOfTimes} times!`)
//     };
// }
// class HerdingDog extends Dog {
//     constructor(breed, name) {
//         super(breed, name);
//     };
// }
// const pomeranian = new ToyDog('Pomeranian', 'Sausage');
// const corgi = new Dog('Corgi', 'Stump');
// const collie = new HerdingDog('Rough Collie', 'Lassie');
// pomeranian.bark(3);
// corgi.bark(4);
// collie.bark(5);

//OOP in Javascript Checkpoint Question 8
// class Car {
//     #horsepower;
//     constructor(make, model, horsepower) {
//         this.make = make;
//         this.model = model;
//         this.#horsepower = horsepower;
//     }
//     setTune() {
//         this.#horsepower *= 1.2;
//     }
// }
// const amg = new Car('Mercedes', 'AMG GT 63', 577);
// console.log(amg.(#horsepower));

class Car {
    #price;
    constructor(make, model, horsepower, price) {
        this.make = make;
        this.model = model;
        this.horsepower = horsepower;
        this.#price = price;
    };
    get carPrice() {
        console.log(this.#price)
        return this.#price;
        
    };
    set carPrice(newPrice) {
        this.#price = newPrice;
        console.log(this.#price)
        return this.#price;
    };
};

const huayra = new Car('Pagani', 'Huayra', 764, 2400000);

huayra.carPrice = 2600000