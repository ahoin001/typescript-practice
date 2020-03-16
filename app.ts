// * Hover over function to see expected return type
const add = (n1: number, n2: number) => {
    return n1 + n2
}

// * Void type means function does no return anything (Use instead of undefined)
// * Void tells TS we expect to not return anything, undefined is if returning an undefined value whch is a rare case
const printResult = (num: number) => {
    console.log(`Result: ` + num)
}

console.log(printResult(add(5, 12)))

// * TS will expect a function to be assigned
// let combineValues: Function;

// * Ts will expect a function that expects 2 numbers and returns a number
// * Without this, any function that does anything caan be assigned
let combineValues: (a: number, b: number) => number;

combineValues = add;
// combineValues = 5;  // Will be error becuase 5 is a number

console.log(combineValues(9,9))