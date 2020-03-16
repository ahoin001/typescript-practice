let userInput: unknown;
let userName: string
// let userName: any

// * Unknown can be anything, but only any can be assigned an unknown type
userInput = 5;
userInput = 'Alex';

if (typeof userInput === 'string') {

    userName = userInput

}

// userName = userInput