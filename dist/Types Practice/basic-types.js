"use strict";
const addNumbers = (num1, num2, showResult, phrase) => {
    const result = num1 + num2;
    if (showResult) {
        console.log(phrase + result);
    }
    else {
        return num1 + num2;
    }
};
const num1 = 5;
const num2 = 0.9;
const printTheResult = true;
const phrase = "Result is: ";
addNumbers(num1, num2, printTheResult, phrase);
