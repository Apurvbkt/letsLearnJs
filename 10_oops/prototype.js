const name  = '   apurv       '
// console.log(name.length);
// console.log(name);
// console.log(name.trim().length);


//time 30min 00 sec


let hero = ['thor', 'spiderman']

let heroPower = {
    thor : 'hammer',
    spiderman : 'web',
    
    getSpiderP : function(){
        console.log('this is spider Power: ' + this.spiderman)
    }
}

Object.prototype.apurv  = function(){
    console.log('aprv is present in all object');
    
}

Array.prototype.apurv2  = function(){
    console.log('apurv2 is present in arr');
    
}

// heroPower.apurv2()
hero.apurv2()
