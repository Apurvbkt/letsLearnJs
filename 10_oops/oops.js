const user = {
    username: 'apurv',
    loginCount : 8,
    signedIn : true,
    
    getData : function(){
        // console.log(this.username);
        console.log(this);
        
        
    }
    
}
// user.getData()



function data(name, loginCount, signedIn){
    
   this.name = name;
   this.loginCount = loginCount;
   this.signedIn = signedIn;
   return this
}

const userOne = new data('apurv', 12, true)
const userTwo = new data('harsh', 40, false)
console.log(userOne);
