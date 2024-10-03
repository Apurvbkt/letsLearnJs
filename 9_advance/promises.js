const promiseData = new Promise(function(resolve, reject){
    
    setTimeout(()=>{
        console.log("Async task is  complete");
        
    }, 2000)
    
})

promiseData.then(()=>{
    console.log("Promise accepted");
    
})