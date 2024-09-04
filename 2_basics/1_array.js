let myArr = [1,2,3,4,5,6,7]
// console.log(myArr[1]);

// myArr.push(8)
// myArr.push(9)
// myArr.push(10)
// myArr.pop()
// myArr.pop()
// myArr.unshift(9)
// myArr.shift()
// let newArr =  myArr.join()

// console.log(myArr);
// console.log( newArr);

console.log(myArr);

let myr1 = myArr.slice(1,3) //index of 1 se suru hoga 3 tak and print hoga index 1 and 2 and end index ko exclude krdega. And real arr same rahega
console.log('A ' + myr1);
console.log(myArr);



let myr2 = myArr.splice(1,3) //index of 1 se leke 3 tak, sabko print krega, but real arr ko bhi change krdega
console.log('B '+ myr2);
console.log(myArr);





