"use strict";
const names = [];
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(`This is done!`);
    }, 2000);
});
promise.then(data => {
    data.split('');
});
const merge = (objA, objB) => {
    return Object.assign(objA, objB);
};
console.log(merge({ name: 'Alex' }, { age: 22 }));
const mergedObjA = merge({ name: 'Alex' }, { age: 22 });
const genericMerge = (objA, objB) => {
    return Object.assign(objA, objB);
};
console.log(genericMerge({ name: 'Alex' }, { age: 24, hobby: 'Coding' }));
const mergedGenericObj = genericMerge({ name: 'Alex' }, { age: 24, hobby: 'Coding' });
mergedGenericObj.age;
const genericConstraintMerge = (objA, objB) => {
    return Object.assign(objA, objB);
};
console.log(genericConstraintMerge({ name: 'Alex' }, { age: 24, hobby: 'Coding' }));
const mergedGenericConstrainedObj = genericConstraintMerge({ name: 'Alex' }, { age: 24, hobby: 'Coding' });
mergedGenericConstrainedObj.age;
const countAndPrint = (element) => {
    let descriptionText = 'Got no value';
    if (element.length === 1) {
        descriptionText = `Got 1 element`;
    }
    else if (element.length > 1) {
        descriptionText = `Got ${element.length} elements`;
    }
    return [element, descriptionText];
};
console.log(countAndPrint(['d']));
console.log(countAndPrint('Log above used array, since it has length property it worked in fucntion'));
const extractAndConvert = (obj, key) => {
    return `Value: ${obj[key]}`;
};
console.log(extractAndConvert({ name: 'Alex (From extractandConvert Example' }, 'name'));
class DataStorage {
    constructor() {
        this.data = [];
        this.addItem = (item) => {
            this.data.push(item);
        };
        this.removeItem = (item) => {
            if (this.data.indexOf(item) === -1) {
                return;
            }
            this.data.splice(this.data.indexOf(item), 1);
        };
        this.getItems = () => {
            return [...this.data];
        };
    }
}
const textStorage = new DataStorage();
textStorage.addItem('Alex');
textStorage.addItem('Bill');
textStorage.removeItem('Bill');
console.log(textStorage.getItems());
const numberStorage = new DataStorage();
numberStorage.addItem(24);
numberStorage.addItem(3);
numberStorage.removeItem(3);
console.log(numberStorage.getItems());
const createCourseGoal = (title, description, date) => {
    let courseGoal = {};
    courseGoal.title = title;
    courseGoal.description = description;
    courseGoal.completeUntil = date;
    return courseGoal;
};
const listNames = ['Alex', 'Alexis'];
names.push('Alex');
const todo = {
    title: 'Clean room',
    completed: false,
};
