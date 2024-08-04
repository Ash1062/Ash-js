// Print Symbol in object.
const mySym = Symbol("123ab");
const obj = {
    [mySym]: "456ab",
    name: "Ashish",
    age: 18
}

console.log(obj);
const a = { air: 1, b: 2};
const b = { b: 3, d: 4};
const c = {...a, ...b};
console.log(c);
// Anytime you spot below syntax(curly braces), it is destructuring of an object.
const {air: a1} = a;
console.log(a1);




