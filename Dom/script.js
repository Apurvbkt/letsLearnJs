count = 10;
score = 0;
hitnum = 0;

function makeBubble(){

let bubble = "";
for (let i = 0;  i<=181; i++){
    let num = Math.floor(Math.random() * 10)
    bubble +=`<div class="bubble">${num}</div>`
//    console.log(num);
    
}

document.getElementById("panelbtm").innerHTML = bubble

}

function timer(){
    let time = setInterval(()=>{
        // console.log(count--);
        if(count  > 0){
            // console.log(count--);
            count--
            document.getElementById('time').innerText = count
        }else{
            clearInterval(time)
            console.log('game over');
            document.getElementById('panelbtm').innerHTML = `<h1>Game over!!  <br>
            your total score is = ${score} </h1>`
            
            
        }
        
        
    },1000)
}

function hit(){
     hitnum = Math.floor(Math.random() * 10)
    document.getElementById("hit").textContent = hitnum;
}

function scoreCount(){
    score += 10
    document.getElementById('score').innerText = score
}

document.getElementById('panelbtm').addEventListener('click', (e)=>{
    let res = Number(e.target.innerText)
    
    if(res === hitnum){
        // alert('same')
        scoreCount()
        makeBubble()
        hit()
    }
    else{
        alert('Please click properly')
    }
    
})

hit()
timer()
makeBubble()