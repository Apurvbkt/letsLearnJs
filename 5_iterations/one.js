//For Loop

for (let index = 0; index < 10; index++) {
    const element = index;
    if (index == 5) {
        // console.log('5 is the best number');
        
    }
    // console.log(element);
    
    
}

for (let i = 0; i <= 10; i++) {
    // console.log(`outer loop ${i}`);
    for (let j = 0; j <=10; j++) {
        
        // console.log(`inner loop ${j} and outer loop is ${i}`);
        
        
    }
    
    
}


for (let i = 1; i <= 10; i++) {
    // console.log(`table of ${i}`);
    for (let j = 1; j <= 10; j++) {
        // console.log(`${i} x ${j} = ${i*j}`);
        
        
    }
    
}

for(let i = 2; i <=2; i++){
   
    for (let j = 1; j <= 10; j++) {
        // console.log(`${i} x ${j} = ${i*j}`);
    
}}


let array = ['batman', 'superman', 'ironMan']

for (let index = 0; index < array.length; index++) {
    // console.log(array[index]);
    
    
}

for (let index = 1; index <= 20; index++) {
    if(index == 5){
        break;
    }
    console.log(index);
    

}
for (let index = 1; index <= 20; index++) {
    if(index == 5){
        break;
    }
    console.log(index);
    

}
for (let index = 1; index <= 20; index++) {
    if(index == 5){
        break;
    }
    console.log(index);
    

}
for (let index = 1; index <= 20; index++) {
    if(index == 5){
        console.log('5 skipped');
        
        continue;
    }
    console.log(index);
    

}