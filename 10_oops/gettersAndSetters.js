class users{
    constructor(email, password){
        this.email = email;
        this.password = password
    }
    
    get email(){
        return this.email.toUpperCase()
    }
    
}

