"use strict";
let userInput;
let userName;
userInput = 5;
userInput = 'Alex';
if (typeof userInput === 'string') {
    userName = userInput;
}
const generateError = (message, code) => {
    throw { message: message, errorCode: code };
};
generateError('An error occured', 500);
