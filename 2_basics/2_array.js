let marvel = ["ironMan", "spiderMan", "Thor"];
let dc = ["Batman", "Superman", "Flash"];

// marvel.push(dc);
// console.log(marvel);
// console.log(marvel[3][2]);

// let allHeros = marvel.concat(dc)
// console.log(allHeros);

// console.log(...marvel, ...dc);

let allNewHeros = [...marvel, ...dc]
console.log(allNewHeros);




