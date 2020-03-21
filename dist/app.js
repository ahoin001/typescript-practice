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
class Car {
    drive() {
        console.log(`Driving car`);
    }
}
class Truck {
    drive() {
        console.log(`Driving Truck`);
    }
    loadCargo(amount) {
        console.log(`Loading cargo... ${amount}`);
    }
}
const v1 = new Car();
const v2 = new Truck();
const useVehicle = (vehicle) => {
    vehicle.drive();
    if (vehicle instanceof Truck) {
        vehicle.loadCargo(1000);
    }
};
useVehicle(v1);
useVehicle(v2);
const moveAnimal = (animal) => {
    let speed;
    switch (animal.type) {
        case 'bird':
            speed = animal.flyingSpeed;
            break;
        case 'horse':
            speed = animal.runningSpeed;
    }
    console.log(`${animal.type} is moving at speed : ${speed} `);
};
moveAnimal({ type: 'horse', runningSpeed: 30 });
