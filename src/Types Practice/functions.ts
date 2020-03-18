// * Hover over function to see expected return type
const add = (n1: number, n2: number) => {
    return n1 + n2
}

// * Void type means function does no return anything (Use instead of undefined)
// * Void tells TS we expect to not return anything, undefined is if returning an undefined value whch is a rare case
const printResult = (num: number) => {
    console.log(`Result: ` + num)
}

const addAndHanlde = (n1: number, n2: number, cb: (num: number) => void) => {

    const result = n1 + n2;

    // * Pass result to callback which expects number and to return nothing (can change voiid to other type if expecting something else)
    cb(result);

}


// * TS will expect any function to be assigned
// let combineValues: Function;

// * Ts will expect a function that expects 2 numbers and returns a number
// * Without this, any function that does anything can be assigned
let combineValues: (a: number, b: number) => number;

combineValues = add;
// combineValues = 5;  // Will be error becuase 5 is a number

console.log(combineValues(9, 9))

addAndHanlde(10, 20,
    (result) => {

        // * Recieves result from excecution 
        console.log(result)

    })