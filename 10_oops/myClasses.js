// ES 6

class User {
    constructor(username, email, password ){
        this.username = username;
        this.email = email;
        this.password = password
    }
    
    encryptPassword(){
        return `${this.password}abc`
    }
    changeUserName(){
        return `${this.username.toUpperCase()}`
    }
    
  
}

const user = new User('chai', 'chai@gamil.com', 'bkt1232')
console.log(user.changeUserName());

console.log(user.encryptPassword());
