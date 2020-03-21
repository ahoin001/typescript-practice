type Admin = {
    name: string;
    privileges: string[]
};

type Employee = {
    name: string;
    startDate: Date;
};

// ? Combine the two types of objects will expect all properties in both objects when creating one, Similar to interface
type ElevatedEmployee = Admin & Employee;

const employee: ElevatedEmployee = {
    name: 'Alex',
    privileges: ['create-server'],
    startDate: new Date()
}

// * Non object types, intersection types will be the common type, number in this case
type Combineable = string | number;
type Numeric = number | boolean;

type Universal = Combineable & Numeric;

let example: Universal = 23
// let example2: Universal = 'string will be error, number above works because it is intersection type'


/****************************************************************
                    TYPE GUARD EXAMPLES 
*****************************************************************/

const addFunctionExample = (a: Combineable, b: Combineable) => {

    // * Typeguards Ex1: To ensure things with multiple type behave as expected
    if (typeof a === 'string' || typeof b === 'string') {

        return a.toString() + b.toString()

    }

    return a + b

}

type UnknownEmployee = Employee | Admin;

// ? Combine the two types of objects will expect 1 of intersection type objects when using one, so name and date or name and privalege or name date and privalege
const employeeExample: UnknownEmployee = { name: 'Alex', startDate: new Date() }

const printEmployInfo = (emp: UnknownEmployee) => {

    console.log('Name: ' + emp.name)

    // * Typeguard Ex2: Because expected type may not have this property in emp (because intersection object type) Unknown employee may not have privaleges if it was passed an employee type
    if (`privileges` in emp) {
        console.log(`Privileges: ` + emp.privileges)
    }

    if (`startDate` in emp) {
        console.log(`Start date: ` + emp.startDate)
    }

}

printEmployInfo(employeeExample)

class Car {

    drive() {
        console.log(`Driving car`)
    }

}

class Truck {

    drive() {
        console.log(`Driving Truck`)
    }

    loadCargo(amount: number) {
        console.log(`Loading cargo... ${amount}`)
    }

}

type Vehicle = Car | Truck;
const v1 = new Car()
const v2 = new Truck()

const useVehicle = (vehicle: Vehicle) => {

    vehicle.drive();

    // * TypeGuard Ex3/ Checks if object is instanceof Class
    if (vehicle instanceof Truck) {

        // * Only truck class his this method, error occurs without a typeguard check
        vehicle.loadCargo(1000);

    }
}

useVehicle(v1);
useVehicle(v2);

// * TypeGuard Ex4/ have a literal type that we can expect to be used 
interface Bird {

    // * Literal type so that this will be required in assignment 
    type: 'bird';
    flyingSpeed: number;
}

interface Horse {

    type: 'horse';
    runningSpeed: number;
}

type Animal = Bird | Horse;



const moveAnimal = (animal: Animal) => {

    // ? Can't use instance of because this is an interface
    let speed;

    switch (animal.type) {
        case 'bird':
            speed = animal.flyingSpeed
            break;

        case 'horse':
            speed = animal.runningSpeed

    }

    console.log(`${animal.type} is moving at speed : ${speed} `)

}

moveAnimal({ type: 'horse', runningSpeed: 30 })

// * Typecasting and '!' 

/*********************************************

    Typecasting and '!' ( Tells TS something will never return null)
    Useful when wanting telling typescript what type we are getting back

*********************************************/

// ? TS can determine this is an htmlparagraph element
const paragraph = document.querySelector('p')

// ? TS cannot dive deeply into html file so it only knows it is an htmlelement
const paragraph2 = document.getElementById('para')

// * < > is Typecasting so TS knows to expect a specifc htmlelement, in this case htmlinputelement
let userInputElement = <HTMLInputElement>document.getElementById('user-input')!

// * If not sure that null will or won't occur, check manually'
if (userInputElement) {
    (userInputElement as HTMLInputElement).value = "Hi there, checked if it wasn't void"
}

// ? For JSX use 'as' keyword to typecast instead
userInputElement = document.getElementById('user-input')! as HTMLInputElement



userInputElement.value = 'Hi there friend !'


/*********************************************

            INDEX PROPERTIES
USEFUL WHEN UNSURE OF PROPERTY TYPE OR HOW MANY PROPERTIES AN OBJECT WILL HAVE

*********************************************/
// ? Index Properties/Types 
interface ErrorContainer {

    // ? Don't know property name but the property will be a string, with value pf a string
    // [key: string]: string
    [key: number]: string

}

const errorBagExample: ErrorContainer = {

    // ? Number is interpreted to string as property name
    2: 'Wow this works when index property is sting or number',
    // email: 'This only works when index property is string'

}

const errorBag: ErrorContainer = {

    // ? Number is interpreted to string as property name
    2: 'Wow this works when index property is sting or number',
    // email: 'This only works when index property is string'

}

/*********************************************

           FUNCTION OVERLOADS
Useful for when function logic expects specific type, but parameters allow types that would not work

*********************************************/

// ? Combineable type was made above and is string | number

// * Different parameter types that will let TS know what type will be returned
function concatOrAdd(a: number, b: number) : number
function concatOrAdd(a: string, b: string) : string
function concatOrAdd(a: string, b: number) : string
function concatOrAdd(a: number, b: string) : string

function concatOrAdd(a: Combineable, b: Combineable) {
    
     // * Typeguards Ex1: To ensure things with multiple type behave as expected
     if (typeof a === 'string' || typeof b === 'string') {

        return a.toString() + b.toString()

    }

    return a + b

}

// ? Because TS knows two strings return a string, we can call a string method
const result = concatOrAdd('3','3').split('');

// ? Error because 2 numbers return number so string method wont work
// const result2 = concatOrAdd(3,3).split('');

/*********************************************

           OPTIONAL CHAINING
Useful for api calls or/and retriving non guarenteed data this is useful

*********************************************/

const fetchedUserData = {
    id: 'u1',
    name: 'Alex',
    // ? TS can see this doesn't exist, but for api calls or retriving non guarenteed data this is useful
    // job: {title: 'CEO', description: 'My Room Inc'}

}

// ? In TS, '?' will have TS check if whats before it exsists before going to next level
console.log(fetchedUserData?.job?.title)

// * In JS this is how to return something if it exsists
console.log(fetchedUserData.job && fetchedUserData.job.title)

