/* 
    Core Data Types
*/

// * NOTE: Make parameters expect number type
const addNumbers = (num1: number, num2: number, showResult: boolean, phrase: string) => {

    const result = num1 + num2;

    if (showResult) {
        console.log(phrase + result);
    } else {

        return num1 + num2

    }

}

// * NOTE: Type inference: num1 is initialized as number type, so typescript will have errpr if ever assigned another type to this var 
const num1 = 5;
const num2 = 0.9;
const printTheResult = true;
const phrase = "Result is: ";


addNumbers(num1, num2, printTheResult, phrase);

