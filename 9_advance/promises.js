const promiseData = new Promise(function(resolve, reject){
    
    setTimeout(()=>{
        console.log("Async task is  complete");
        resolve()
    }, 2000)
    
})

promiseData.then(()=>{
    console.log("Promise accepted");
    
})