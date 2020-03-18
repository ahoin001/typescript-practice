// * Class is blueprint to create simalar objects with different information

class Department {

    // * Private makes properties or methods ONLY accessible in the class, in this case, this makes our method the only way to modify this property
    private employees: string[] = [];


    // * Shorthand to initialize properties
    constructor(private readonly id: string, public department: string, ) {


    }

    // * This is used to refer to data of instance of the class
    // describe() {
    //     console.log(`${this.name} works in ${this.department} department`);
    // }

    // * When excecuted, the this in method should ALWAYS refer to an instance of Department class, TS will throw in other use cases
    describe(this: Department) {
        console.log(`${this.id} : The ${this.department} department`);
    }

    addEmployee(employee: string) {
        this.employees.push(employee);
    }

    printEmployeeInformation() {
        console.log(`${this.employees.length} employees in ${this.department} department`)
        console.log(this.employees)
    }

}

let treasury = new Department('D1', 'Treasury');
let accounting = new Department('D2', 'Accounting');


// * this.name will be unuiqe for each instance
treasury.describe()
accounting.describe()

treasury.addEmployee('Ryan');
treasury.addEmployee('Ray');
treasury.printEmployeeInformation()



// * If copy is missing expected properties with expected types, will be undefined because 'this' will not work on anything 
// * that is not same 'type' as our class
// const treasurycopy = { department: 'Boss', describe: treasury.describe, }
// treasurycopy.describe()
