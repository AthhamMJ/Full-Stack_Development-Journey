let a = 10, b = 20;
let sum = (a,b) => (a*b);

console.log(sum(50, 60));

const Radius = (r) => (Math.PI*r*r);


const key = `{
    "name" : "Athham",
    "age" : 20
}`

const details = JSON.parse(key);

const letter = JSON.stringify(key);

console.log("Your details are", details);
console.log("Your Whole data has became a string", letter);


// const area = ((r) => {
//     return Math.PI*r*r
// })

// console.log(area(7));