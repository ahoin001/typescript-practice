"use strict";
const add = (n1, n2) => {
    return n1 + n2;
};
const printResult = (num) => {
    console.log(`Result: ` + num);
};
const addAndHanlde = (n1, n2, cb) => {
    const result = n1 + n2;
    cb(result);
};
let combineValues;
combineValues = add;
console.log(combineValues(9, 9));
addAndHanlde(10, 20, (result) => {
    console.log(result);
});
