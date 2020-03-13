// * NOTE Hover over types and properties to see type inference

// * NOTE Hover over person, objects are key->type pairs, not key -> value pairs in typescript, it will not be reassignable to another value
const person = {
    name: 'Alexander',
    age: 24,
    hobbies: ['Coding', 'Basketball']
}

let favoriteActivities : string[];
favoriteActivities = ['Sports','Eating']
// favoriteActivities = 'Sports'    // Will have error because array of strings will be expected

console.log(person.name)

for ( const hobby of person.hobbies) {

    // Safe to use toUpperCase method from screen because using typescript inference it knows that hobby will be a string from array of strings
    console.log(hobby.toUpperCase())

}