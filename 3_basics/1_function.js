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
 console.log(userInput('APurb'));
 