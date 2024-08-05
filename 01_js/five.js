const test = [
    {
        name: "Ash",
        age: 18
    },
    {
        name: "Tim",
        age: 28
    }
]
test.forEach( (item) => {
console.log(item.name);
})
const arr = [ 1, 2, 3, 7, 8 , 9];
const newVal = arr.filter( (num) => {
return num > 2;
})
console.log(newVal);
const newReduce = arr.reduce( (acc, curVal) => acc + curVal, 0);
console.log(newReduce);


