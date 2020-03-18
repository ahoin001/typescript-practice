"use strict";
class Department {
    constructor(id, department) {
        this.id = id;
        this.department = department;
        this.employees = [];
    }
    describe() {
        console.log(`${this.id} : The ${this.department} department`);
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
}
class AccountDepartment extends Department {
    constructor(id, reports) {
        super(id, 'Accounting');
        this.reports = reports;
        this.lastReport = reports[0];
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
const Account = new AccountDepartment('A1', ['Alex']);
Account.addEmployee('Alex');
Account.addEmployee('Jeffery');
Account.printEmployeeInformation();
Account.mostRecentReport;
Account.mostRecentReport = 'Weekly Report';
const anEmployee = Department.createEmployee('Stephen');
console.log(Account);
console.log(anEmployee);
