// ES 6

// class User {
//     constructor(username, email, password ){
//         this.username = username;
//         this.email = email;
//         this.password = password
//     }
    
//     encryptPassword(){
//         return `${this.password}abc`
//     }
//     changeUserName(){
//         return `${this.username.toUpperCase()}`
//     }
    
  
// }

// const user = new User('chai', 'chai@gamil.com', 'bkt1232')
// console.log(user.changeUserName());

// console.log(user.encryptPassword());



function test(username, email, password){
        this.username = username;
        this.email = email;
        this.password = password
}

test.prototype.encry = function(){
    return `${this.password}abc`
}
test.prototype.uppercase = function(){
    return `${this.username.toUpperCase()}`
}

const tea = new test('tea', 'tea@gamil.com', 'tea123')
console.log(tea.uppercase());
console.log(tea.encry());
