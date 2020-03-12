/* 
    Core Data Types
*/

// * NOTE: Make parameters expect number type
const add = (num1: number, num2: number, showResult: boolean, phrase: string) => {

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
const printResult = true;
const phrase = "Result is: ";


add(num1, num2, printResult, phrase);

