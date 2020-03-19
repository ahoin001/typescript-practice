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