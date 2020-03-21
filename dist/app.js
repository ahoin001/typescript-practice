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
