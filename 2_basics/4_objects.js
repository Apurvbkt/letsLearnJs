let tinderUser = {}
tinderUser.id = '123ads'
tinderUser.email = 'abc@gmial.com'
tinderUser.name = 'Rahul'
tinderUser.loggedin = false

// console.log(tinderUser);

let regularUser = {
    email : 'rug@gmail.com',
    fullname : {
        userName :{
            firstname: "Apurv",
            lastname : "Bhakat"
        }
    }
}
// console.log(regularUser.fullname.userName);


let obj1 = {1: 'a', 2:'b'}
let obj2 = {3: 'c', 4 : 'd'}
let obj = {5:'e',6:'f'}
// let obj3 = Object.assign({},obj1, obj2, obj)
let obj3 = {...obj1, ...obj2, ...obj}
console.log(obj3);

