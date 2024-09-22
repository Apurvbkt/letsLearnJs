#project one

console.log('Apurv')

const btn = document.querySelectorAll('.button')
const body = document.querySelector('body')
//console.log(body)

btn.forEach((el)=>{
  console.log(el)
  el.addEventListener('click',((l)=>{
    // console.log(l.target.id)
    if(l.target.id === 'grey'){
      body.style.backgroundColor = l.target.id
    }
    else if(l.target.id === 'white'){
      body.style.backgroundColor = l.target.id
    }
    else if(l.target.id === 'blue'){
      body.style.backgroundColor = l.target.id
    }
    else if(l.target.id === 'yellow'){
      body.style.backgroundColor = l.target.id
    }
  })) 
  
})