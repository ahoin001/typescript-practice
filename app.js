// * Union Type: A variable can be more than 1 type
var combine = function (input1, // Will benumber | string,
input2, 
// * Literal Type: Will expect one of these values and of this type (Also a union type)
resultType // 'as-number' | 'as-text'
) {
    var result;
    // * This runtime check is used because we ave different logic for different types
    if (typeof input1 === 'number' && typeof input2 === 'number') {
        // '+' converts to string
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
var combinedAges = combine(30, 26, 'as-number');
console.log(combinedAges);
var combinedNames = combine('Alex', 'Codes', 'as-text');
console.log(combinedNames);
var combinedThings = combine('Alex', 50, 'as-number');
console.log(combinedThings);
