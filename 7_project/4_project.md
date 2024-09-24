
# #Project 4 solution
```javascript
let num = parseInt(Math.random()*100+1) 
// console.log(num)

// Select all the important elements
const sub    =  document.getElementById('subt')
const userIn =  document.getElementById('guessField')
const guess  =  document.querySelector('.guesses')
// console.log(guess)
const remain =  document.querySelector('.lastResult')
const lowOrh =  document.querySelector('.lowOrHi')
const result =  document.querySelector(".resultParas")

let p = document.createElement('p')
  // console.log(p)


let previousArr = [];
let numGuess = 1
let playgame = true

if(playgame){
  sub.addEventListener('click',(l)=>{
    l.preventDefault()
    const userData = parseInt(userIn.value)
    // console.log(typeof userData)
    validateGuess(userData)

  })
}

function validateGuess(value){
  if(isNaN(value)){
    alert('it is not a number')
  }else if(guess < 1){
    alert('pls give a larger number more than 1')
  }else if(guess > 100){
    alert('pls give a number less than 100')
  }else{

     previousArr.push(value)
     
    if(numGuess === 5 ){
      displayGuess(value)
      displayMesg(`random number was ${num}`)
      endGame()
    }else{
      displayGuess(value)
      checkGuess(value)
    }
  }
}

function checkGuess(check){
  if(check === num){
    displayMesg(`u guess it right`)
    endGame()
  }else if(check < num){
    displayMesg('number is low')
  }else if(check > num){
    displayMesg('number is high')
  }

}

function displayGuess(Dguess){
userIn.value = ""
guess.innerHTML += `${Dguess} - `
numGuess++
remain.innerHTML = `${5 - numGuess}`
}

function displayMesg(msg){
lowOrh.innerHTML = `<h2>${msg}</h2>`

}

function endGame(){
  userIn.value = '';
  userIn.setAttribute('disabled', '')
  p.classList.add('button')
  // console.log(p)
  p.innerHTML = `<h2 id ="newGame">start new game </h2>`;
  result.appendChild(p)
  playgame = false
  newGame()
}

function newGame(){
  const nwbtn = document.querySelector("#newGame")
  nwbtn.addEventListener('click', (e)=>{
  parseInt(Math.random()*100+1)
    previousArr = [];
  let numGuess = 1
  guess.innerHTML = ''
  remain.innerHTML = `${5 - numGuess}`
  userIn.removeAttribute("disabled")
  result.removeChild(p)
   playgame = true



  })
}
```