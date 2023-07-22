let one = generateCards()
let two = generateCards()
let three = generateCards()
let cards = [one,two,three]
let summ = document.getElementById("sum")
let sum = cards[0]+cards[1]
let displayy = document.getElementById("display")
let s1 = document.getElementById("imgcard1")
let s2 = document.getElementById("imgcard2")
let s3 = document.getElementById("imgcard3")
let windisplay = document.getElementById("winplayer")
let lostdisplay = document.getElementById("lostplayer")
displayy.style.visibility='hidden'
s1.src="/images/BJ.png"
s2.src="/images/RJ.png"
let array = ["/images/1.png","images/1A.png",
            "images/2C.png","images/2D.png","images/2S.png","images/2H.png",
            "images/3C.png","images/3D.png","images/3H.png","images/3S.png",
            "images/4C.png","images/4D.png","images/4H.png","images/4S.png",
            "images/5C.png","images/5D.png","images/5H.png","images/5S.png",
            "images/6C.png","images/6D.png","images/6H.png","images/6S.png",
            "images/7C.png","images/7D.png","images/7H.png","images/7S.png",
            "images/8C.png","images/8D.png","images/8H.png","images/8S.png",
            "images/9C.png","images/9D.png","images/9H.png","images/9S.png",
            "images/10C.png","images/10D.png","images/10H.png","images/10S.png",
            "images/11C.png","images/11D.png","images/11H.png",
            "/images/BJ.png","/images/RJ.png"]

const playerName = getParameterByName('name');
let message = null
let isAlive = true
let started = null
let lost = null
const player={
    name: playerName,
    coins:5000,
    win:null
}
lostdisplay.textContent=playerName


function startGame(){
    summ.textContent = sum
    displayy.textContent = display(sum)
    showCard1()
    showCard2()
    started=true
    displayy.style.visibility='visible'
}

function display(sum){
    if(sum===21){
        message="WOO HOO You Won A BlackJack"
        player.coins=player.coins+5000
        player.win=true
        result()
        setTimeout(result, 10000);
    }
    else if(sum<21){
        message="you want to draw a new card"
    }
    else if(sum>21){
        message="Nahhh better luck next time"
        isAlive = false
        player.coins=0;
        lost=true
        // loose()
        setTimeout(loose, 5000);
    }
    return message
}

function newCard(){
    //Draw New card
    if(isAlive===true && started===true){
    sum = sum + cards[2]
    summ.textContent = sum
    displayy.textContent = display(sum)
    showCard3()
    s3.style.visibility="visible"
    isAlive=false
    started=false
    if(sum<21){
        displayy.textContent = "Nahhh better luck next time"
        lost = true
        // loose()
        setTimeout(loose, 5000);
    }
    }
}


function result(){
    window.location.href="result.html"
    windisplay.textContent=playerName
}

 

function loose(){
    window.location.href="lost.html"
   
}




// FUNCTIONS---------------------------------------------------------------------------------------
function showCard1(){
    if(one===1){
        let i = Math.floor(Math.random() * (1 - 0 + 1)) + 0;
        s1.src=array[i]
    }
    else if(one===2){
        let i = Math.floor(Math.random() * (5 - 2 + 1)) + 2;
        s1.src=array[i]
    }
    else if(one===3){
        let i = Math.floor(Math.random() * (9 - 6 + 1)) + 6;
        s1.src=array[i]
    }
    else if(one===4){
        let i = Math.floor(Math.random() * (13 - 10 + 1)) + 10;
        s1.src=array[i]
    }
    else if(one===5){
        let i = Math.floor(Math.random() * (17 - 14 + 1)) + 14;
        s1.src=array[i]
    }
    else if(one===6){
        let i = Math.floor(Math.random() * (21 - 18 + 1)) + 18;
        s1.src=array[i]
    }
    else if(one===7){
        let i = Math.floor(Math.random() * (25 - 22 + 1)) + 22;
        s1.src=array[i]
    }else if(one===8){
        let i = Math.floor(Math.random() * (29 - 26 + 1)) + 26;
        s1.src=array[i]
    }
    else if(one===9){
        let i = Math.floor(Math.random() * (33 - 30 + 1)) + 30;
        s1.src=array[i]
    }
    else if(one===10){
        let i = Math.floor(Math.random() * (37 - 34 + 1)) + 34;
        s1.src=array[i]
    }else if(one===11){
        let i = Math.floor(Math.random() * (40 - 38 + 1)) + 38;
        s1.src=array[i]
    }
}

function showCard2(){
    if(two===1){
        let i = Math.floor(Math.random() * (1 - 0 + 1)) + 0;
        s2.src=array[i]
    }
    else if(two===2){
        let i = Math.floor(Math.random() * (5 - 2 + 1)) + 2;
        s2.src=array[i]
    }
    else if(two===3){
        let i = Math.floor(Math.random() * (9 - 6 + 1)) + 6;
        s2.src=array[i]
    }
    else if(two===4){
        let i = Math.floor(Math.random() * (13 - 10 + 1)) + 10;
        s2.src=array[i]
    }
    else if(two===5){
        let i = Math.floor(Math.random() * (17 - 14 + 1)) + 14;
        s2.src=array[i]
    }
    else if(two===6){
        let i = Math.floor(Math.random() * (21 - 18 + 1)) + 18;
        s2.src=array[i]
    }
    else if(two===7){
        let i = Math.floor(Math.random() * (25 - 22 + 1)) + 22;
        s2.src=array[i]
    }else if(two===8){
        let i = Math.floor(Math.random() * (29 - 26 + 1)) + 26;
        s2.src=array[i]
    }
    else if(two===9){
        let i = Math.floor(Math.random() * (33 - 30 + 1)) + 30;
        s2.src=array[i]
    }
    else if(two===10){
        let i = Math.floor(Math.random() * (37 - 34 + 1)) + 34;
        s2.src=array[i]
    }else if(two===11){
        let i = Math.floor(Math.random() * (40 - 38 + 1)) + 38;
        s2.src=array[i]
    }
}
function showCard3(){
    if(three===1){
        let i = Math.floor(Math.random() * (1 - 0 + 1)) + 0;
        s3.src=array[i]
    }
    else if(three===2){
        let i = Math.floor(Math.random() * (5 - 2 + 1)) + 2;
        s3.src=array[i]
    }
    else if(three===3){
        let i = Math.floor(Math.random() * (9 - 6 + 1)) + 6;
        s3.src=array[i]
    }
    else if(three===4){
        let i = Math.floor(Math.random() * (13 - 10 + 1)) + 10;
        s3.src=array[i]
    }
    else if(three===5){
        let i = Math.floor(Math.random() * (17 - 14 + 1)) + 14;
        s3.src=array[i]
    }
    else if(three===6){
        let i = Math.floor(Math.random() * (21 - 18 + 1)) + 18;
        s3.src=array[i]
    }
    else if(three===7){
        let i = Math.floor(Math.random() * (25 - 22 + 1)) + 22;
        s3.src=array[i]
    }else if(three===8){
        let i = Math.floor(Math.random() * (29 - 26 + 1)) + 26;
        s3.src=array[i]
    }
    else if(three===9){
        let i = Math.floor(Math.random() * (33 - 30 + 1)) + 30;
        s3.src=array[i]
    }
    else if(three===10){
        let i = Math.floor(Math.random() * (37 - 34 + 1)) + 34;
        s3.src=array[i]
    }else if(three===11){
        let i = Math.floor(Math.random() * (40 - 38 + 1)) + 38;
        s3.src=array[i]
    }
}

function playAgain() {
    // Redirect to the start page or any other page as needed
    window.location.href = "startgame.html";
}




function toggleMute() {
    const musicPlayer = document.getElementById("musicPlayer");
    musicPlayer.muted = !musicPlayer.muted;
}

function getParameterByName(name) {
    // Get the player name from the URL query parameter
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}

function generateCards(){
    //cardgenerator random 
    let i = Math.floor((Math.random() * 11) +1);
    // console.log(i)
    return i;
}


  