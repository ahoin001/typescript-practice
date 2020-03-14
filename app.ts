// * NOTE Hover over types and properties to see type inference
// Can infer a type Ex/ let name = 'Alex' infers a string
// Can explicitly type Ex/ let name :string; so TS knows to expect a string


// * NOTE Hover over person, objects are key->type pairs, not key -> value pairs in typescript, it will not be reassignable to another value
const person: {
    name: string;
    age: number;
    hobbies: string[];
    // * Tells typescript this is a tuple with two types
    role: [number, string];  
} = {
    name: 'Alexander',
    age: 24,
    hobbies: ['Coding', 'Basketball'],
    role: [2, `author`]
}

// .push still works on tuples
person.role.push('admin');

// Will cause Error because [1] is expected to be a string
// person.role[1] = 10;

// Declare an array of strings types
let favoriteActivities: string[];
favoriteActivities = ['Sports', 'Eating']

// * Will have error because array of strings will be expected
// favoriteActivities = ['Sports',9]     
// favoriteActivities = 'Sports'    

console.log(person.name)

let i = 0;

// * NOTE TS will infer that hobbies is an array of string types from when when it was declared in person ibject
for (const hobby of person.hobbies) {

    i++

    // Safe to use toUpperCase method from screen because using typescript inference it knows that hobby will be a string from array of strings
    console.log(`Hobby #${i}: ${hobby.toUpperCase()}`)

    // * This would be error because TS would epect hobby to be a string, because it knows hobbies is an array of strings
    // console.log(hobby.map())

}