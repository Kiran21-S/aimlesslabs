function start(){
    document.getElementById("title1").style.display="none";
    document.getElementById("jump").style.display="none";
    document.getElementById("start").style.display="none";
    document.getElementById("target").style.display="block";
    document.getElementById("score").style.display="block";
    document.getElementById("score_text").style.display="block";
    document.getElementById("timer").style.display="block";
    start_moving()
}
function start_moving(){
    setInterval(move,1200)
    setInterval(timerS, 1000)
    setTimeout(stopTimer,60000)
    setTimeout(stop_moving,60000)
    
};

function timerS(){
    document.getElementById("timer").innerHTML = String(parseInt(document.getElementById("timer").innerHTML) - 1)
}
function stopTimer(){
    clearInterval(timerS);
    
}
function stop_moving(){
    clearInterval(move)
    document.getElementById("target").style.display="none";
    document.getElementById("timer").style.display = "none";
    document.getElementById("playAgain").style.display="block";
}

function playAgain(){
    document.getElementById("title1").style.display="block";
    document.getElementById("jump").style.display="block";
    document.getElementById("start").style.display="block";
    document.getElementById("playAgain").style.display="none";
    document.getElementById("score").style.display="none";
    document.getElementById("score_text").style.display="none";
    window.location.reload(true);

}

function move(){
    let target_top = Math.random()
    let target_left = Math.random()
    
    if(target_top<0.3){
        target_top = target_top+0.4
    }
    else if(target_top>0.965){
        target_top = target_top-0.4
    }

    if(target_left<0.3){
        target_left = target_left+0.4
    }
    else if(target_left>0.965){
        target_left = target_left-0.4
    }
    let Sscale = 1
    if((target_left<0.75 || target_left>0.25) && (target_top>0.25 || target_top<0.75)){
        Sscale = 0.75
    }
    else if((target_left<0.6 || target_left>0.4) && (target_top>0.4 || target_top<0.6)){
        Sscale = 0.5
    }

    document.getElementById("target").style.transform = `scale(${Sscale})`
    document.getElementById("target").style.top = String(target_top*100) + "%"
    document.getElementById("target").style.left = String(target_left*100) + "%"
}
function countScore(){
    let score = document.getElementById("score_text").innerHTML
    let count = 0
    count = parseInt(score)+1
    document.getElementById("score_text").innerHTML = String(count)

}
