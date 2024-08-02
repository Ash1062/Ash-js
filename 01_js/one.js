console.log(Math.floor(Math.random() * 10) + 1);
let date = new Date();
console.log(date.toLocaleString('default', {
    weekday: "long"
}));
const krishna = ["Madhu", "Mangal", "Balram"];
const shiva = ["Nandi", "Ganesh", "Uma"];
const god = krishna.concat(shiva);
console.log(god);
console.log(Array.isArray("ASH"));


