

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