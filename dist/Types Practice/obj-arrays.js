"use strict";
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
var Role2;
(function (Role2) {
    Role2[Role2["ADMIN"] = 10] = "ADMIN";
    Role2["READ_ONLY"] = "RO";
    Role2[Role2["AUTHOR"] = 100] = "AUTHOR";
})(Role2 || (Role2 = {}));
const person = {
    name: 'Alexander',
    age: 24,
    hobbies: ['Coding', 'Basketball'],
    role: Role.ADMIN
};
let favoriteActivities;
favoriteActivities = ['Sports', 'Eating'];
console.log(person.name);
let i = 0;
for (const hobby of person.hobbies) {
    i++;
    console.log(`Hobby #${i}: ${hobby.toUpperCase()}`);
}
if (person.role === Role.ADMIN) {
    console.log(`The person role is ${person.role}`);
}
