// * Union Type: A variable can be more than 1 type

const combine = (
    input1: number | string,
    input2: number | string,
    // * Literal Type: Will expect one of these values of this type (Also a union type)
    resultType: 'as-number' | 'as-text' 
) => {

    let result;

    // * This runtime check is used because we ave different logic for different types
    if (typeof input1 === 'number' && typeof input2 === 'number') {

        // '+' converts to string
        result = input1 + input2

    } else {
        result = input1.toString() + input2.toString()
    }


    if (resultType === 'as-number') {
        return +result
    } else {

    }

    return result;

}

const combinedAges = combine(30, 26, 'as-number');
console.log(combinedAges)

const combinedNames = combine('Alex', 'Codes', 'as-text');
console.log(combinedNames)

const combinedThings = combine('Alex', 50, 'as-number');
console.log(combinedThings)