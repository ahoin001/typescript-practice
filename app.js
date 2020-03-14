// * NOTE Hover over types and properties to see type inference
// Can infer a type Ex/ let name = 'Alex' infers a string
// Can explicitly type Ex/ let name :string; so TS knows to expect a string
// * NOTE Hover over person, objects are key->type pairs, not key -> value pairs in typescript, it will not be reassignable to another value
// const person: {
//     name: string;
//     age: number;
//     hobbies: string[];
//     // * Tells typescript this is a tuple with two types
//     role: [number, string];  
// } = {
//     name: 'Alexander',
//     age: 24,
//     hobbies: ['Coding', 'Basketball'],
//     role: [2, `author`]
// }
// * ENUM type from typescript assigns labels to numbers Ex/ Role.ADMIN = 0 in this case 
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
// * Can assign custom number or text, number will increment as it increases
var Role2;
(function (Role2) {
    Role2[Role2["ADMIN"] = 10] = "ADMIN";
    Role2["READ_ONLY"] = "RO";
    Role2[Role2["AUTHOR"] = 100] = "AUTHOR";
})(Role2 || (Role2 = {}));
var person = {
    name: 'Alexander',
    age: 24,
    hobbies: ['Coding', 'Basketball'],
    role: Role.ADMIN
};
// .push still works on tuples
// person.role.push('admin');
// Will cause Error because [1] is expected to be a string
// person.role[1] = 10;
// Declare an array of strings types
var favoriteActivities;
favoriteActivities = ['Sports', 'Eating'];
// * Will have error because array of strings will be expected
// favoriteActivities = ['Sports',9]     
// favoriteActivities = 'Sports'    
console.log(person.name);
var i = 0;
// * NOTE TS will infer that hobbies is an array of string types from when when it was declared in person ibject
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    i++;
    // Safe to use toUpperCase method from screen because using typescript inference it knows that hobby will be a string from array of strings
    console.log("Hobby #" + i + ": " + hobby.toUpperCase());
    // * This would be error because TS would epect hobby to be a string, because it knows hobbies is an array of strings
    // console.log(hobby.map())
}
