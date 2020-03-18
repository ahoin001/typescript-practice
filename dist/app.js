"use strict";
class Department {
    constructor(id, department) {
        this.id = id;
        this.department = department;
        this.employees = [];
    }
    static createEmployee(name) {
        return { name: name };
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    printEmployeeInformation() {
        console.log(`${this.employees.length} employees in ${this.department} department`);
        console.log(this.employees);
    }
}
class ITDepartment extends Department {
    constructor(id, admins) {
        super(id, 'IT');
        this.admins = admins;
    }
    description() {
        console.log(`${this.department} - ID: ${this.id} `);
    }
}
class AccountDepartment extends Department {
    constructor(id, reports) {
        super(id, 'Accounting');
        this.reports = reports;
        this.lastReport = reports[0];
    }
    static getInstance() {
        if (AccountDepartment.instance) {
            return this.instance;
        }
        this.instance = new AccountDepartment('A1', []);
        return this.instance;
    }
    description() {
        console.log(`${this.department} - ID: ${this.id} `);
    }
    addEmployee(name) {
        if (name == 'Alex') {
            return;
        }
        this.employees.push(name);
    }
    addReports(report) {
        this.reports.push(report);
        this.lastReport = report;
    }
    get mostRecentReport() {
        if (this.lastReport) {
            return this.lastReport;
        }
        throw new Error('No report available');
    }
    set mostRecentReport(value) {
        if (!value) {
            console.log('Please provide a valid value');
        }
        this.addReports((value));
    }
    printReports() {
        console.log(`Reports: ${this.reports}`);
    }
}
const IT = new ITDepartment('F1', ['Alex']);
IT.addEmployee('Gavin');
IT.addEmployee('Chalres');
IT.department = 'NEW NAME';
IT.printEmployeeInformation();
const Account = AccountDepartment.getInstance();
const Account2 = AccountDepartment.getInstance();
console.log(Account, Account2);
const anEmployee = Department.createEmployee('Stephen');
console.log(anEmployee);
