const myNum = [1,2,3,4,5,6,7,8,9,10]

// myNum.forEach((el)=>console.log(el+10))

// let res =myNum.filter((el)=> console.log(el + 10)
//  )

// let res = myNum.map((el)=>{return el+10})
//  console.log(res);

// let data = myNum
//                 .map((el)=>el+10)
//                     .filter((el)=>el>=15)
//                     console.log(data);
                    

let data = myNum
        .map((el)=>el+10)
                        .map((el)=>el+1)
                                .filter((el)=> el >= 15)
console.log(data);