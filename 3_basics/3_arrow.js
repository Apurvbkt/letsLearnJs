const obj = {
    name : 'Apurv',
    price : 999,
    detail : function(){
       console.log(`name is ${this.name} and paid ${this.price}`);
        console.log(this);
        
        
    }
}
 obj.detail()

 console.log(this);
 