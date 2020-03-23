// https://www.typescriptlang.org/docs/handbook/generics.html


/****************************************************************
    
    Generic v Union
    - Use Union when it's okay to accept different type with every method or function call
    - Use Generics to lock in a type for use 

 *****************************************************************/



/****************************************************************
        Covers : Generic Classes, Generic Functions, keyof object constraint,
                Class Constraints

 *****************************************************************/

/****************************************************************
                          Generics
 A type that is connected to other types. Example, Arryay is a type, but can be an array of strings type
 *****************************************************************/
// ? Hover will say this generic and requires type argument
// const names: Array = []

// * Specified what kind of type it will hold
const names: Array<string> = []

// ? resolve and reject are automatically passed 
// * We can let TS know a string will be returned from this generic promise, so we have type safety when working with result
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

// * If we put objects as the type, hover over merge and see it returns plain obj type 
//TS will be more strict Ex/
// * it will allow us object methods BUT, will have error because object type doesnt know it's properties
const merge = (objA: object, objB: object) => {

    // ? Copies properties from objects into another
    return Object.assign(objA, objB)

}

console.log(merge({ name: 'Alex' }, { age: 22 }))

const mergedObjA = merge({ name: 'Alex' }, { age: 22 })

// ? Hover & will see mergedObj is an plain object type and that it does not conatain age property( because merge expected 2 obj type and returned an generic obj)
// mergedObjA.age; 


// * T & U are type vairables, when we don't know what the type will be
// * TS will be less strict and see the types the user will provide, in this case returns intersection of 2 objects we will provide
// * Ex/ T = {name:alex} type & U = {age:  24} type  
// ? Main issue is this means we can pass type and TS would not know it wouldn't work in logic, in this case we might pass a string but it wwould fail at our object method

const genericMerge = <T, U>(objA: T, objB: U) => {

    // ? Copies properties from objects into another
    // TS will see generic variables and know 
    return Object.assign(objA, objB)

}

// ? Custom objects will be treated as their own type of object and returned as intersection of types because of object.assign
console.log(genericMerge({ name: 'Alex' }, { age: 24, hobby: 'Coding' }))

const mergedGenericObj = genericMerge({name:'Alex'}, { age: 24, hobby: 'Coding' })
mergedGenericObj.age;

/****************************************************************
                          Generics Constraints
// * With extends, we can constrain our parameter to a certain type or union type 
 *****************************************************************/

// * T & U are type vairables, and can expect any type
// * However this means it can be a string number or object 
// ? Extending object type will let TS know these parameters should at least be object types 
const genericConstraintMerge = <T extends object, U extends object>(objA: T, objB: U) => {

    // ? We now have guarenteed obja and objb will be objects
    return Object.assign(objA, objB)

}

// ? Can make arguments anything as long as they are objects
console.log(genericConstraintMerge({ name: 'Alex' }, { age: 24, hobby: 'Coding' }))
// console.log(genericConstraintMerge({ name: 'Alex' }, 24)) will yield error because 24 not an object 

const mergedGenericConstrainedObj = genericConstraintMerge({ name: 'Alex' }, { age: 24, hobby: 'Coding' })
mergedGenericConstrainedObj.age;


/****************************************************************
                          another Generic function
 A flexible function that lets TS expect certain methods to be available
 - Union v Generic : Generic Allows more flexibility than explicitly saying to expect string | array | othertypes
 *****************************************************************/

//  ? We can extend this interface, so our cusom type will be expected to have a length property
interface Lengthy {

    // * length property that will return a number
    length: number;

}

// * Explicitly return a tuple of [T, string] just for the example but could be anything
// * Above we extend objects, but interfaces can also be extended for properties that we expect to include and use
// ? In this case, we know we will return an array so we know length property will be available, so a string or array would make it into function
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
console.log(countAndPrint(['d']))
console.log(countAndPrint('Log above used array, since it has length property it worked in fucntion'))


/****************************************************************
                KeyOf Constraint

 *****************************************************************/

//  * extends Keyof to tell TS to expect this to be key in provided object type
const extractAndConvert = <T extends object, U extends keyof T>(obj: T, key: U) => {

    return `Value: ${obj[key]}`

}

// * Useful to prevent accessing property in an object that
console.log(extractAndConvert({ name: 'Alex (From extractandConvert Example' }, 'name'))

/****************************************************************
                Generic Classes
                Class Constraints and Type safety
                Using constraint, we will have flexibility with chosen constraints 
                and type support in our class for those types

 *****************************************************************/

//  * We use T in class to be able to accept any kind of data type, but specifiy it will be string number or boolean in this case
// * When class is called, the type wll be given
class DataStorage<T extends string | number | boolean>{

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

// ? Same as above but using union instead of generic
// ? Issue is that instead of using type that was passed in, class would allow all 3 of these types
// class DataStorageUnion{

//     // ? Union type would allow any of these types thorugh each method call 
//     // *Generic type would initialize with EXACT type we select, and only allow that type (Check above type)
//     private data: string[] | number[] | boolean[] = []

//     addItem = (item: string | number | boolean) => {
//         this.data.push(item)
//     }

//     removeItem = (item: string | number | boolean) => {

//         // * index of returns -1 if nothing found
//         if (this.data.indexOf(item) === -1) {
//             return
//         }
//         this.data.splice(this.data.indexOf(item), 1)
//     }

//     getItems = () => {
//         return [...this.data]
//     }


// }

// ? new Class with string type expected in T for class blueprint (above) So TS will know what to expect
const textStorage = new DataStorage<string>()
textStorage.addItem('Alex')
textStorage.addItem('Bill')
textStorage.removeItem('Bill')
console.log(textStorage.getItems())

const numberStorage = new DataStorage<number>()
numberStorage.addItem(24)
numberStorage.addItem(3)
// numberStorage.addItem({'Will be error since number is expected not string'})
numberStorage.removeItem(3)
console.log(numberStorage.getItems())

/****************************************************************
 
https://www.typescriptlang.org/docs/handbook/utility-types.html                
Generic Utility Types ( All generic: Take a value of any tye and do something with it )
- Provide extra control and transformations over types

 *****************************************************************/

interface CourseGoal {
    title: string;
    description: string;
    completeUntil: Date;
}

const createCourseGoal = (title: string, description: string, date: Date): CourseGoal => {

    // * Partial lets TS know the type does not have expected properties initially but will 
    let courseGoal: Partial<CourseGoal> = {};

    // *Would be error since empty object does not satisfy type properties
    // let courseGoalex: CourseGoal = {};

    courseGoal.title = title;
    courseGoal.description = description;
    courseGoal.completeUntil = date

    // Would be error because Partial is not CourseGoal type we are expecting
    // return courseGoal;

    // ? TypeCast partial back to CourseGoal type to satisfy return , since we know we will have the expected properties
    return courseGoal as CourseGoal;

}


// * Readonly type to make sure a type we have is only readonly on object or array etc
const listNames: Readonly<string[]> = ['Alex', 'Alexis']
names.push('Alex')

// * Omit : create a type by picking all properties from one type, but removing selected properties
interface Todo {
    title: string;
    description: string;
    completed: boolean;
}

type TodoPreview = Omit<Todo, 'description'>;

const todo: TodoPreview = {
    title: 'Clean room',
    completed: false,
}

