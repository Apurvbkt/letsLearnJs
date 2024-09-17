// For of loop

let number = [1,2,3,4,5,6,7,8]

for (const num of number) {
    // console.log(num);
        
}

let greeting = 'hello world!';

for(const greet of greeting){
    if(greet === " "){
        continue;  
        
    }   
    // console.log(greet);
    // console.log(`${greeting} and ${greet}`);
    // console.log(greet);
    
}
const map = new Map()
map.set('one', 'India')
map.set('two', 'Australia')
map.set('three', 'Nepal')
// console.log(map);

for (const [key, value] of map) {
    console.log(key, value);
    
}


// for (const element of object) {
    
// }