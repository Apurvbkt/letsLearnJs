const myNum = [1,2,3]

// let res = myNum.reduce(function(acc , curr){
    // console.log(`acc is ${acc} and curr is ${curr} = ${acc + curr}`);
    
    // return acc + curr
    
// },0 )

// console.log(res);


// let res = myNum.reduce((acc, curr)=> acc+ curr,0)

// console.log(res);


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]


let res = shoppingCart.reduce((acc, curr)=>  acc + curr.price ,0)
console.log(res);
