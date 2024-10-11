//JavaScript Fundamentals I
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

// happyBirthday() 

// let myParagraphElement = document.querySelector('p');
// console.log("Here we are:", myParagraphElement);
// let Name = "andrew";

// function reverso(str){
//   //parses the string out creating an array
//   var stringSplit = str.split("")
//   //reverses the array
//   var arrayReverse = stringSplit.reverse()
//   var arrayJoin = arrayReverse.join("")
//   return arrayJoin
// }

// console.log(reverso(Name));


//JavaScript Fundamentals II

// let temp = 10
// console.log(temp >= 10)
// console.log(temp > 10 || temp == 10)
//is temp < 20 and is temp a number
// console.log((temp < 20 && typeof temp))
// console.log((typeof temp && temp < 20))

// console.log(true)

// console.log(!true)


// if (!true){
//   console.log(temp)
// }

// let x = 11
// let y = 'fun'

// if("NaN"){
//   console.log("Thats true")
// }else{
//   console.log("That b false bruv")
// }

//Loop through what

// for(let i = 1; i <= 10; i++ ){
//   console.log(`Current count : ${i}`)
// }

//OOP - Object Oriented Programming
let decisionMaking = "DECIDING"
class Vehicle {
  //make, model, color, year, numDoors, numPassangers, engineType
  constructor(make, model, color, year, numDoors, numPassangers, engineType = "Bubbles"){
    this.make = make
    this.model = model
    this.color = color
    this.year = year
    this.numDoors = numDoors
    this.numPassangers = numPassangers
    this.engineType = engineType
  }

  start(){
    console.log("Engine is runnin")
  }

  honk(){
    console.log("Big Azz Beep")
  }
}

class Car extends Vehicle{
  constructor(make, model, color, year, engineType = "bubbles", heatedSeats, doorType="butterfly"){
    super(make, model, color, year, 2, 4, engineType)
    this.heatedSeats = heatedSeats
    this.doorType = doorType
  }


  honk(){
    console.log("Adorable Toot")
  }

  shutOff(){
    console.log("Shut'er down Gerald!")
  }

  rollCall(){
    console.log(make, " ---- ", this.model)
  }
}

// let dumpTruck = new Vehicle("Tonka", "Dump Truck", "Yellow", 1995, 2, 2, "V16 toddle Power")
// let towTruck = new Vehicle("Tower", "McPulls", "Brown", 2002, 1, 0, "Hearts and Minds")

let hoopdee = new Car("Chevy", "Barretta", "Red", 1988, "V6 tried hard", false, "worked")
let luxery = new Car("Dodge", '', decisionMaking, 1996, "Flinstone 350CC", decisionMaking)

console.log(hoopdee)
// console.log(luxery)
hoopdee.rollCall()