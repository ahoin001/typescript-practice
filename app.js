var userInput;
var userName;
// let userName: any
// * Unknown can be anything, but only any can be assigned an unknown type
userInput = 5;
userInput = 'Alex';
if (typeof userInput === 'string') {
    userName = userInput;
}
// userName = userInput
//  * This function is for values that never occur, (None of the types, so an error or unexpected return of some sort)
var generateError = function (message, code) {
    throw { message: message, errorCode: code };
};
generateError('An error occured', 500);
