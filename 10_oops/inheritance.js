class User{
    constructor(username){
        this.username = username
    }
    
    logme(){
        console.log(`USER name is ${this.username}`);
        
    }
    
    
}

class Teacher extends User{
    constructor(username, email, pass){
        super(username)
        this.email = email;
        this.pass = pass;
        
    }
    
    addCourse(){
        console.log(`a new course add by teacher ${this.username}`);
        
    }
}

const chai = new Teacher("javascript", 'chai#gmail.com', '123')
chai.addCourse()