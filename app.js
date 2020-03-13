// * NOTE Hover over types and properties to see type inference
// * NOTE Hover over person, objects are key->type pairs, not key -> value pairs in typescript, it will not be reassignable to another value
var person = {
    name: 'Alexander',
    age: 24,
    hobbies: ['Coding', 'Basketball']
};
var favoriteActivities;
favoriteActivities = ['Sports', 'Eating'];
// favoriteActivities = 'Sports'    // Will have error because array of strings will be expected
console.log(person.name);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
}
