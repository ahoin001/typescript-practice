// * Union Type: A variable can be more than 1 type
var combine = function (input1, input2) {
    var result;
    // * This runtime check is used because we ave different logic for different types
    if (typeof input1 === 'number' && typeof input2 === 'number') {
        result = input1 + input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
};
var combinedAges = combine(30, 26);
console.log(combinedAges);
var combinedNames = combine('Alex', 'Codes');
console.log(combinedNames);
var combinedThings = combine('Alex', 50);
console.log(combinedThings);
