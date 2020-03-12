/*
    Core Data Types
*/
// * NOTE: Make parameters expect number type
var add = function (num1, num2, showResult, phrase) {
    var result = num1 + num2;
    if (showResult) {
        console.log(phrase + result);
    }
    else {
        return num1 + num2;
    }
};
var num1 = 5;
var num2 = 0.9;
var printResult = true;
var phrase = "Result is: ";
add(num1, num2, printResult, phrase);
