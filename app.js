// * Hover over function to see expected return type
var add = function (n1, n2) {
    return n1 + n2;
};
// * Void type means function does no return anything (Use instead of undefined)
// * Void tells TS we expect to not return anything, undefined is if returning an undefined value whch is a rare case
var printResult = function (num) {
    console.log("Result: " + num);
};
var addAndHanlde = function (n1, n2, cb) {
    var result = n1 + n2;
    cb(result);
};
// * TS will expect any function to be assigned
// let combineValues: Function;
// * Ts will expect a function that expects 2 numbers and returns a number
// * Without this, any function that does anything can be assigned
var combineValues;
combineValues = add;
// combineValues = 5;  // Will be error becuase 5 is a number
console.log(combineValues(9, 9));
addAndHanlde(10, 20, function (result) {
    console.log(result);
});
