// * Class is blueprint to create simalar objects with different information

class Department {

    // * Private makes properties or methods ONLY accessible in the class, in this case, this makes our method the only way to modify this property
    // private employees: string[] = [];

    // * Protected is like private, but allows access to classes that extend this class 
    protected employees: string[] = [];


    // * Shorthand to initialize properties by explicitly naming public or private
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

// * Inheritance
class ITDepartment extends Department {

    admins: string[];
    constructor(id: string, admins: string[]) {

        // * Super MUST be called first and is constructor of base class 
        super(id, 'IT')

        this.admins = admins

    }

}

class AccountDepartment extends Department {

    private lastReport: string

    constructor(id: string, private reports: string[]) {

        // * Super MUST be called first and is constructor of base class 
        super(id, 'Accounting')

        this.lastReport = reports[0]

    }

    // * Override base class method for this specifc class
    addEmployee(name: string) {
        if (name == 'Alex') {
            return
        }
        this.employees.push(name)
    }

    addReports(report: string) {
        this.reports.push(report)
        this.lastReport = report
    }

    // * To modify properties even when private
    get mostRecentReport() {

        if (this.lastReport) {
            
            return this.lastReport

        }

        throw new Error('No report available')

    }
    
    set mostRecentReport(value: string) {

        if (!value) {
            console.log('Please provide a valid value')
        }
        this.addReports((value))

    }

    printReports() {
        console.log(`Reports: ${this.reports}`)
    }


}

// ? Inheritance examples
const IT = new ITDepartment('F1', ['Alex'])

IT.addEmployee('Gavin');
IT.addEmployee('Chalres');
IT.department = 'NEW NAME'
IT.printEmployeeInformation();

const Account = new AccountDepartment('F1', ['Alex'])

Account.addEmployee('Alex');
Account.addEmployee('Jeffery');
Account.printEmployeeInformation();

// * GETTER/SETTER are excecuted as a property
Account.mostRecentReport;
Account.mostRecentReport = 'Weekly Report'
console.log(Account)

// ? Basic class examples
// let treasury = new Department('D1', 'Treasury');
// let accounting = new Department('D2', 'Accounting');


// * this.name will be unuiqe for each instance
// treasury.describe()
// accounting.describe()

// treasury.addEmployee('Ryan');
// treasury.addEmployee('Ray');
// treasury.printEmployeeInformation()


// * If copy is missing expected properties with expected types, will be undefined because 'this' will not work on anything 
// * that is not same 'type' as our class
// const treasurycopy = { department: 'Boss', describe: treasury.describe, }
// treasurycopy.describe()


