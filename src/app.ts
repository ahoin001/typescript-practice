// https://www.typescriptlang.org/docs/handbook/generics.html

/****************************************************************
        Generic Classes, Generic FUnctions, keyof object constraint,
                Class Constraints

 *****************************************************************/

/****************************************************************
                          Generics
 A type that is connected to other types. Example, Arryay is a type, but can be an array of strings type
 *****************************************************************/
// ? Hover will say this generic
// const names: Array = []

// * Needs to be specified what kind of type it will hold
const names: Array<string> = []

// ? resolve and reject are automatically passed 
// * We can let TS knwo a string will be returned from this generic promise, so we have type safety when working with result
const promise: Promise<string> = new Promise((resolve, reject) => {

    setTimeout(() => {

        resolve(`This is done!`)

    }, 2000);

})

promise.then(data => {

    // * We specified a string willl be retuned so we can use a string method without worrying abuout issue
    data.split('')

})

/****************************************************************
                          
                    GENERIC TYPES AND FUNCTIONS
            * Type Varibales are key of this lesson ( <T>)

While using any is certainly generic in that it will cause the function to accept any and 
all types for the type of arg, we actually are losing the information about what that type was when 
the function returns. If we passed in a number, the only information we have is that any type could be returned.

 *****************************************************************/

// * If we put objects as the type, TS will be more strict Ex/
// * it will allow us object methods BUT, will have error because object type doesnt know it's properties
const merge = (objA: object, objB: object) => {

    // ? Copies properties from objects into another
    return Object.assign(objA, objB)

}

console.log(merge({ name: 'Alex' }, { age: 22 }))

const mergedObjA = merge({ name: 'Alex' }, { age: 22 })

// ? Hover for on container & will see mergedObj is an object type and thats it( because merge expected 2 obj type and returned an generic obj)
// mergedObjA.age; 


// * T & U are type vairables, when we don't know what the type will be
// * TS will be less strict and see the types the user will provide, then return intersection of them
// * Ex/ T = {name:alex} type. U = {age:  24} type  
const genericMerge = <T, U>(objA: T, objB: U) => {

    // ? Copies properties from objects into another
    // TS will see generic variables and know 
    return Object.assign(objA, objB)

}

// ? Can make the objects have whatever we want since they can be anything
console.log(genericMerge({ name: 'Alex' }, { age: 24, hobby: 'Coding' }))

const mergedGenericObj = genericMerge({ name: 'Alex' }, { age: 24, hobby: 'Coding' })
mergedGenericObj.age;

/****************************************************************
                          Generics Constraints
 A type that is connected to other types. Example, Arryay is a type, but can be an array of strings type
 *****************************************************************/

// * T & U are type vairables, and can expect anything
// * However this means it can be a string number or object 
// * With extends, we can constrain our variable to a certain type or union type 

// ? Extending objects will let TS know these parameters should at least be objects
const genericConstraintMerge = <T extends object, U extends object>(objA: T, objB: U) => {

    // ? Copies properties from objects into another
    // TS will see generic variables and know 
    return Object.assign(objA, objB)

}

// ? Can make the objects have whatever we want since they can be anything
console.log(genericConstraintMerge({ name: 'Alex' }, { age: 24, hobby: 'Coding' }))
// console.log(genericConstraintMerge({ name: 'Alex' }, 24)) will yield error because not an object 

const mergedGenericConstrinedObj = genericConstraintMerge({ name: 'Alex' }, { age: 24, hobby: 'Coding' })
mergedGenericConstrinedObj.age;


/****************************************************************
                          another Generic function
 A flexible function that lets TS expect certain methods to be available
 *****************************************************************/

//  ? We can extend this interface, so our cusom type will be expected to have a length property
interface Lengthy {

    // * length property that will return a number
    length: number;

}

// * Explicitly return a tuple of [T, string] for the example
// * Allows more flexibility than explicitly saying to expect string | array | othertypes
const countAndPrint = <T extends Lengthy>(element: T): [T, string] => {

    let descriptionText = 'Got no value';

    // ? .length has error without interface because it won't know what type T will be (Will say length does not exsist on type T)
    if (element.length === 1) {

        descriptionText = `Got 1 element`


    } else if (element.length > 1) {

        descriptionText = `Got ${element.length} elements`

    }

    return [element, descriptionText]

}

// ? Will be able to expect String or Array because our T will be expected to have length property
console.log(countAndPrint('H'))


/****************************************************************
                KeyOf Constraint

 *****************************************************************/

//  * extends Keyof to tell TS to expect this to be key in provided object type
const extractAndConvert = <T extends object, U extends keyof T>(obj: T, key: U) => {

    return `Value: ${obj[key]}`

}

// * Useful to prevent accessing property in an object that
console.log(extractAndConvert({ name: 'Alex' }, name))

/****************************************************************
                Generic Classes
                Class Constraints

 *****************************************************************/

//  * We use T to be able to push any kind of data type
class DataStorage<T extends string| number | boolean >{

    // * Error because we haven't specified what data is being stored
    // private data = []

    // ? TS will allow 
    private data: T[] = []

    addItem = (item: T) => {
        this.data.push(item)
    }

    removeItem = (item: T) => {

        // * index of returns -1 if nothing found
        if (this.data.indexOf(item) === -1) {
            return
        }
        this.data.splice(this.data.indexOf(item), 1)
    }

    getItems = () => {
        return [...this.data]
    }


}

// ? new Class with string type expected in T for class blueprint (above) So TS will know what to expect
const textStorage = new DataStorage<string>()
textStorage.addItem('Alex')
textStorage.addItem('Bill')
textStorage.removeItem('Bill')
console.log(textStorage.getItems())

// * NOTE Class logic does not work well for objects, this is just example that object 
const numberStorage = new DataStorage<number>()
numberStorage.addItem(24)
numberStorage.addItem(3)
// numberStorage.addItem({'Will be error since number is expected not string'})
numberStorage.removeItem(3)
console.log(numberStorage.getItems())