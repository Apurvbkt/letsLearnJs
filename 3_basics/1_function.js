function myName(){
    // console.log();
    
}




function add(one , two){
   
  return(one + two)

}
// console.log(add(1,2));

function twoNum(a, b) {
    return a + b
} 
let sum = twoNum(4,5)
// console.log(sum);

 function userInput(userName){
  if(userName == undefined || userName == ""){
    return 'Please enter user name'
  }else{
    return `${userName} is loggedIn`
  }
 }
//  console.log(userInput('APurb'));

function cartItems( num2, num3, ...num1){
  return  num1
}
// console.log(cartItems(100, 200, 300, 400, 500));


let objData = {
  username :  'Apurv',
  price : 999
}

function userData(er){
 return `user name is ${er.username} and price is ${er.price}`
}
 
// console.log(userData(objData));


let arr = [100, 200, 300, 400]

function arrFun(apu){
  return apu[3]
}
console.log(arrFun(arr));
