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
// console.log(newArr);

 
 console.log(Array.isArray("Apurv"))
 console.log(Array.from("Apurv"))

 let score1 = 100
 let score2 = 200
 let score3 = 300
 let combine = Array.of(score1,score2,score3)

 console.log(combine[1]);
 

 





