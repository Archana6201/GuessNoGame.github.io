console.log("hello");
var random;
var score = 0;
function start(){
    time = 6;
    document.getElementById('reset').style.display = 'flex';
    document.getElementById('flex-boxes').style.display = 'flex';
    document.getElementById('start-btn').style.display = 'none';
    random =  Math.floor(Math.random() * 10 + 1);
    document.getElementById('btn-box1').innerHTML = random;

    document.getElementById('btn-box2').innerHTML = Math.floor(Math.random() * 10 + 1);
    document.getElementById('btn-box3').innerHTML = Math.floor(Math.random() * 10 + 1);
    document.getElementById('btn-box4').innerHTML = Math.floor(Math.random() * 10 + 1);

    document.getElementById('btn1').style.order = Math.floor(Math.random() * 10 + 1);
    document.getElementById('btn2').style.order = Math.floor(Math.random() * 10 + 1);
    document.getElementById('btn3').style.order = Math.floor(Math.random() * 10 + 1);
    document.getElementById('btn4').style.order = Math.floor(Math.random() * 10 + 1);
    setTime = setInterval(timer,1000);
}
var setTime;
var time = 5;
function timer(){
        time--;
        document.getElementById('timer-para').innerHTML =  time;
        if(time < 1){
        clearTimeout(setTime);
        document.getElementById('timeout').style.display = 'block';
        document.getElementById('flex-boxes').style.display = 'none';
        document.getElementById('show-result').style.display = 'none';
        }
        
} 
function box1(){
    document.getElementById('flex-boxes').style.display = 'none';
    var curr = document.getElementById('btn-box1').innerHTML;
    clearTimeout(setTime);
    if(curr == random){
        score += 10;
        document.getElementById('para').innerHTML = score;
        document.getElementById('heading').innerHTML = "Correct Guess!!";
        document.getElementById('result-para').innerHTML = "+10";
        document.getElementById("show-result").style.backgroundColor = "yellow";
        document.getElementById('show-result').style.display = 'block';
        var song = new Audio('score.sound.mp3');
        song.play();

    }
    else{
        score -= 5;
        document.getElementById('para').innerHTML = score;
        document.getElementById('heading').innerHTML = "Wrong Guess!!";
        document.getElementById('result-para').innerHTML = "-5";
        document.getElementById("show-result").style.backgroundColor = "red";
        document.getElementById('show-result').style.display = 'block';
        var song = new Audio('wrng.guess.mp3');
        song.play();
    }
    
}
function box2(){
    document.getElementById('flex-boxes').style.display = 'none';
    var curr = document.getElementById('btn-box2').innerHTML;
    clearTimeout(setTime);
    if(curr == random){
        score += 10;
        document.getElementById('para').innerHTML = score;
        document.getElementById('heading').innerHTML = "Correct Guess!!";
        document.getElementById('result-para').innerHTML = "+10";
        document.getElementById("show-result").style.backgroundColor = "yellow";
        document.getElementById('show-result').style.display = 'block';
        var song = new Audio('score.sound.mp3');
        song.play();
    }
    else{
        score -= 5;
        document.getElementById('para').innerHTML = score;
        document.getElementById('heading').innerHTML = "Wrong Guess!!";
        document.getElementById('result-para').innerHTML = "-5";
        document.getElementById("show-result").style.backgroundColor = "red";
        document.getElementById('show-result').style.display = 'block';
        var song = new Audio('wrng.guess.mp3');
        song.play();
    }
  
}
function box3(){
    document.getElementById('flex-boxes').style.display = 'none';
    var curr = document.getElementById('btn-box3').innerHTML;
    clearTimeout(setTime);
    if(curr == random){
        score += 10;
        document.getElementById('para').innerHTML = score;
        document.getElementById('heading').innerHTML = "Correct Guess!!";
        document.getElementById('result-para').innerHTML = "+10";
        document.getElementById("show-result").style.backgroundColor = "yellow";
        document.getElementById('show-result').style.display = 'block';
        var song = new Audio('score.sound.mp3');
        song.play();
    }
    else{
        score -= 5;
        document.getElementById('para').innerHTML = score;
        document.getElementById('heading').innerHTML = "Wrong Guess!!";
        document.getElementById('result-para').innerHTML = "-5";
        document.getElementById("show-result").style.backgroundColor = "red";
        document.getElementById('show-result').style.display = 'block';
        var song = new Audio('wrng.guess.mp3');
        song.play();
    }
}
function box4(){
    document.getElementById('flex-boxes').style.display = 'none';
    var curr = document.getElementById('btn-box4').innerHTML;
    clearTimeout(setTime);
    if(curr == random){
        score += 10;
        document.getElementById('para').innerHTML = score;
        document.getElementById('heading').innerHTML = "Correct Guess!!";
        document.getElementById('result-para').innerHTML = "+10";
        document.getElementById("show-result").style.backgroundColor = "yellow";
        document.getElementById('show-result').style.display = 'block';
        var song = new Audio('score.sound.mp3');
        song.play();
    }
    else{
        score -= 5;
        document.getElementById('para').innerHTML = score;
        document.getElementById('heading').innerHTML = "Wrong Guess!!";
        document.getElementById('result-para').innerHTML = "-5";
        document.getElementById("show-result").style.backgroundColor = "red";
        document.getElementById('show-result').style.display = 'block';
        var song = new Audio('wrng.guess.mp3');
        song.play();
    }
   
}
function goBack(){
    document.getElementById('flex-boxes').style.display = 'flex';
    start();
}


