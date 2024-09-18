const myNum = [1,2,3,4,5,6,7,8,9,10,11,12,13,14]

// let res = myNum.filter((num)=> num >5)
// console.log(res);

let res = myNum.filter((num)=> {
   return num>5
})
console.log(res);