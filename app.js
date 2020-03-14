// * NOTE Hover over types and properties to see type inference
// * NOTE Hover over person, objects are key->type pairs, not key -> value pairs in typescript, it will not be reassignable to another value
var person = {
    name: 'Alexander',
    age: 24,
    hobbies: ['Coding', 'Basketball']
};
// Declare an array of strings
var favoriteActivities;
favoriteActivities = ['Sports', 'Eating'];
// * Will have error because array of strings will be expected
// favoriteActivities = ['Sports',9]     
// favoriteActivities = 'Sports'    
console.log(person.name);
var i = 0;
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    i++;
    // Safe to use toUpperCase method from screen because using typescript inference it knows that hobby will be a string from array of strings
    console.log("Hobby #" + i + ": " + hobby.toUpperCase());
    // * This would be error because TS would epect hobby to be a string, because it knows hobbies is an array of strings
    // console.log(hobby.map())
}
