

const myFunction = function (number) {
    const functionArray = [
        (num) => (num += 1),
        (num) => (num *= 2),
        (num) => (num *= 534),
        (num) => (num /= 3),
        (num) => Math.round(num)
    ];

    for (const func of functionArray) {
        number = func(number);
    }

    console.log(number);
};



function computeAverageOfNumbers(nums) {
    // your code here
       if (nums.length === 0) {
      return 0;  // Return 0 for an empty array
    }
  
    let sum = 0; // Initialize sum variable
  
    // Loop through the array to calculate the sum
    for (let i = 0; i < nums.length; i++) {
      sum += nums[i]; // Add each number to sum
    }
  
    // Calculate and return the average
    return sum / nums.length;
      
  }

console.log(computeAverageOfNumbers([1,2,3]))