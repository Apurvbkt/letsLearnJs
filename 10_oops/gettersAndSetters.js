class users{
    constructor(email, password){
        this.email = email;
        this.password = password
    }
    
    get email(){
        return this._email.toUpperCase()
    }
    
    set email(value){
         this._email = value
    }
    
    get password(){
        return `${this._password}Apurv`
    }
    set password(value){
         this._password = value
    }
}

const apurv = new users('apurv.bkt@gmail.com', 'hell')
console.log(apurv.email);


