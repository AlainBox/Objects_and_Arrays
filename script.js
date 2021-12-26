let person = {
    name: 'Alain',
    age: 24,
    evaluations: [7, 10, 9]
};

console.log("person:", person);

console.log("name:", person.name);

console.log("age:", person.age);

console.log(person.name);
console.log(person.age);

console.log(person['name']);
console.log(person['age']);

console.log(person.evaluations);
// It's value is [7, 10, 9]

let selectedColors = ['green', 'yellow', 'purple'];
let lastElement = selectedColors[selectedColors.length -1];

console.log(selectedColors);

console.log(selectedColors.length);

console.log(selectedColors[0]);

console.log(lastElement);

selectedColors.push('grey');
console.log(selectedColors);

selectedColors.push('8');
console.log(selectedColors);

let greeting ={
    greeting: "Hi, I am an object"
};
selectedColors.push(greeting);
console.log(selectedColors);

console.log(selectedColors[5]);
