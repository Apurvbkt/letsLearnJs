
let a = 200
if(true){
    let a = 1
    const b = 2
    var c = 3
    // console.log('inner scope ', a );
    
}

// console.log(a);
// console.log(b);
// console.log(c);


//Scope 

function parent (){
    let mother = "Rashii"

    function child(){
        let baby  = "Ram"
        console.log(mother);

        function child2(){
            let baby2 = "laxman"
            console.log(baby);
            
        }
        // console.log(baby2);
        child2()
        
    }
    // console.log(baby);

    child()
    
}
// parent()


if(true){
    const userName = "Apurv"
    if(userName === "Apurv"){
        const website = ' youTube'
        console.log(userName + website);
        
    }

}

add(5);

function add(sum){
    return sum + 5
}


const Add = function(sum){
    return sum + 5
}

Add(5)