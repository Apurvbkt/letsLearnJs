
let a = 200
if(true){
    let a = 1
    const b = 2
    var c = 3
    console.log('inner scope ', a );
    
}

console.log(a);
// console.log(b);
console.log(c);
