let marvel = ["ironMan", "spiderMan", "Thor"];
let dc = ["Batman", "Superman", "Flash"];

// marvel.push(dc);
// console.log(marvel);
// console.log(marvel[3][2]);

// let allHeros = marvel.concat(dc)
// console.log(allHeros);

// console.log(...marvel, ...dc);

let allNewHeros = [...marvel, ...dc]
// console.log(allNewHeros);

const longArr = [1,2,3,4,[5,6,7],8,9,10,[11,12,13,14,15,[16,17,18,19]]]
let newArr = longArr.flat(Infinity)
console.log(newArr);



