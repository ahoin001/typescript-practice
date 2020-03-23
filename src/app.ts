/**************************************************************** 
 https://www.typescriptlang.org/docs/handbook/decorators.html
                        Decorators 
- A function applied to a class in a certain way
- Excecutes when class is defined (not instantiated)
- Decorator factoy allows more arguments in decorator ( Done by excecuting function that returns decorator function)

****************************************************************/

// * Decorators tend to be uppercase but not necessary 
// * Recieves constructor as argument
const Logger = (logString: string) => {

    // ? Decorator factory function
    return (constructor: Function) => {
        console.log(logString)
        console.log(`Constructor ` + constructor)
    }

}
// * @ is recognized by TS, points to a function (should be our decorator), m
@Logger('LOGGING IN PERSON')
class PersonBluePrint {

    name = 'Alex'

    constructor() {
        console.log(`Creating class...`)

    }


}

const aPerson = new PersonBluePrint()
console.log(aPerson)