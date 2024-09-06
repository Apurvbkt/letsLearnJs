// object literals

let mysym = Symbol("key1")

let userJs = {
    name:"apurv",
    [mysym] : "mykey1",
    "full name" : "Apurv Bhakat",
    age: 22,
    location: 'jsr',
    email : 'apu@gmail.com',
    isloggedin : false
}

userJs.email = "gpt@gmail.com"
userJs.greetings = function(){
    console.log('hello world');    
}
userJs.greetingstwo = function(){
    console.log(this.name);
    
}
// Object.freeze(userJs)


// console.log(userJs.name);
// console.log(userJs["name"]);
// console.log(userJs[mysym]);
// console.log(userJs["full name"]);
// console.log(userJs.email);
// console.log(userJs);

console.log(userJs.greetings());
console.log(userJs.greetingstwo());





