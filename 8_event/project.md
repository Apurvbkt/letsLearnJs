# projecrt code

```javascript 



function randomColor(){
  const hex = '0123456789abcdef'
  let color = '#'
  for(i = 0; i <6; i++){
    color += hex[Math.floor(Math.random() * 16)]
  // console.log(color+= [i])

  }
  // console.log(color)
  return color
}
// console.log(randomColor())
let colorTime;
let start = function(){
  let colorFunc= function(){ document.body.style.backgroundColor = randomColor()}
   colorTime = setInterval(colorFunc, 100)
}


let stop = function(){
clearInterval(colorTime)
colorTime = null
}



document.querySelector("#start").addEventListener("click", start)

document.querySelector("#stop").addEventListener("click", stop)



```