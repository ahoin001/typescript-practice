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

moveAnimal({type:'horse', runningSpeed: 30})
