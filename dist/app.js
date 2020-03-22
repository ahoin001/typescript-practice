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
const mergedGenericConstrinedObj = genericConstraintMerge({ name: 'Alex' }, { age: 24, hobby: 'Coding' });
mergedGenericConstrinedObj.age;
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
console.log(countAndPrint('H'));
const extractAndConvert = (obj, key) => {
    return `Value: ${obj[key]}`;
};
console.log(extractAndConvert({ name: 'Alex' }, name));
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
