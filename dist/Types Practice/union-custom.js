"use strict";
const combine = (input1, input2, resultType) => {
    let result;
    if (typeof input1 === 'number' && typeof input2 === 'number') {
        result = input1 + input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    if (resultType === 'as-number') {
        return +result;
    }
    else {
    }
    return result;
};
const combinedAges = combine(30, 26, 'as-number');
console.log(combinedAges);
const combinedNames = combine('Alex', 'Codes', 'as-text');
console.log(combinedNames);
const combinedThings = combine('Alex', 50, 'as-number');
console.log(combinedThings);
