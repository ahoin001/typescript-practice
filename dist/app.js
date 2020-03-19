"use strict";
const employee = {
    name: 'Alex',
    privileges: ['create-server'],
    startDate: new Date()
};
let example = 23;
const addFunctionExample = (a, b) => {
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b;
};
const employeeExample = { name: 'Alex', startDate: new Date() };
const printEmployInfo = (emp) => {
    console.log('Name: ' + emp.name);
    if (`privileges` in emp) {
        console.log(`Privileges: ` + emp.privileges);
    }
    if (`startDate` in emp) {
        console.log(`Start date: ` + emp.startDate);
    }
};
printEmployInfo(employeeExample);
