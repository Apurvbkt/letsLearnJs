const obj = {
    name : 'Apurv',
    price : 999,
    detail : function(){
       console.log(`name is ${this.name} and paid ${this.price}`);
        console.log(this);
        
        
    }
}
//  obj.detail()

//  console.log(this);


// function chai(){
//     let userName = "Apurv"
//     console.log(this.userName);
    
// }
// chai()
 

let chai = ()=>{
    let userName = "Apurv"
    console.log(this.userName);
    
}
// chai()


// const addTwo = (num1, num2)=>{
//     return num1 + num2
// }


// const addTwo = (num1, num2)=> num1 + num2

const addTwo = (num1, num2)=> (num1 + num2)


console.log(addTwo(1,2));
