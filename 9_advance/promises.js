// const promiseData = new Promise(function(resolve, reject){
    
//     setTimeout(()=>{
//         console.log("Async task is  complete");
//         resolve()
//     }, 2000)
    
// })

// promiseData.then(()=>{
//     console.log("Promise accepted");
    
// })

//baaki baateyn ab kal krnge


new Promise(function(resolve, reject){
    setTimeout(( )=>{
        console.log('async task 2')
        resolve()
    },5000)
}).then(function(){
    console.log('2 task done');
    
})

const promiseThree= Promise((resolve, reject)=>{
    setTimeout(()=>{
       
        resolve({name  : 'Apurv', gmail : 'apu@gmail.com'})
    },3000)
    
})

promiseThree.then(()=>{
    console.log();
    
})


