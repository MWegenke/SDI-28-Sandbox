let debug = false

const myFunction = (number) => {
    const functionArray = [
        (number) => (number += 1),
        (number) => (number *= 2),
        (number) => (number *= 534),
        (number) => (number /= 3),
        (number) => (number = Math.round(number))
    ];
  
    for (const func of functionArray) {
        let res = func(number)
        if(debug == true){
            console.log(`Input: ${number}  Output: ${res}`)
        }
        number = res
    }
}

if(debug == true){
    console.log("***TEST 0 input***")
    myFunction(0)
    console.log("\n")
    console.log("***TEST 1337 input***")
    myFunction(1337)
    console.log("\n")
    console.log("***TEST 69420 input***")
    myFunction(69420)
} else{
    myFunction(0)
}