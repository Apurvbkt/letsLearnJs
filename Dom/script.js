 var res = "";

for(var i = 0; i <=181; i++){
   let num = Math.floor(Math.random() * 10)
    res = res + `<div class="bubble">${num}</div>`
}
// console.log(res);


document.querySelector('#panelbtm').innerHTML = res