// https://www.typescriptlang.org/docs/handbook/generics.html
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
const genericMerge = <T,U>(objA: T, objB: U) => {

    // ? Copies properties from objects into another
    // TS will see generic variables and know 
    return Object.assign(objA, objB)

}

// ? Can make the objects have whatever we want since they can be anything
console.log(genericMerge({ name: 'Alex' }, { age: 24 , hobby:'Coding'}))

const mergedGenericObj = genericMerge({ name: 'Alex' }, { age: 24 , hobby:'Coding'})
mergedGenericObj.age;