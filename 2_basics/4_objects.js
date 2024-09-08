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
// console.log(obj3);

let user = [
    {
        name : 'apurv',
        gamil : 'apurv@gmail.com'
    },
    {
        name : 'ram',
        gamil : 'Ram@gmail.com'
    },
    {
        name : 'Radha',
        gamil : 'radha@gmail.com'
    },
    {
        name : 'hanu',
        gamil : 'hanu@gmail.com'
    }
]


// console.log(user[2].name);
// console.log(user[2].gamil);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));



const course = {
    courseName : 'jsInHindi',
    instructor : 'Apurv',
    price : 999
}

// console.log(course.courseName);

const {courseName : name} = course;
const {price : rate} = course;
console.log(name);
console.log(rate);

