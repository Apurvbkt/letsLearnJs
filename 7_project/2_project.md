# #Link : https://stackblitz.com/edit/dom-project-chaiaurcode-c7rrpx?file=1-colorChanger%2Fchaiaurcode.js,2-BMICalculator%2Fchaiaurcode.js,2-BMICalculator%2Findex.html

#2nd project done
// const height = document.querySelector('#height')
// const weight = document.querySelector('#weight')
// height.addEventListener('submit', ()=>{

// })

const form = document.querySelector('form')

form.addEventListener('submit', (l)=>{
  l.preventDefault()
  const height = parseInt(document.querySelector("#height").value)
  const weight = parseInt(document.querySelector("#weight").value)
  const res = document.querySelector('#results')
  // console.log( weight)

  if(height === "" || height < 0 || isNaN(height)){
    // console.log(`height is not a number`)
    res.innerHTML = `height is not a valid`
  }else if(weight === "" || weight <0 || isNaN(weight)){
    // console.log('weight is not a number')
    res.innerHTML = `weight is not a valid`
  }
  else{
    const bmi = (weight/((height*height)/10000)).toFixed(2)
    res.innerHTML = `<span>${bmi}</span>`
  }

})
