let one = generateCards()
let two = generateCards()
let three = generateCards()
let cards = [one,two,three]
let show = document.getElementById("cards")
let summ = document.getElementById("sum")
let sum = cards[0]+cards[1]
let displayy = document.getElementById("display")
let message = null
let isAlive = true
const playerName = getParameterByName('name');
document.getElementById("player").textContent= playerName

const player={
    name: playerName,
    coins:5000,
    win:null
}



function startGame(){
    show.textContent = "card1 = "+ cards[0] + "card2 = " + cards[1]
    summ.textContent = sum
    displayy.textContent = display(sum)
}

function display(sum){
    if(sum===21){
        message="WOO HOO You Won A BlackJack"
        player.coins=player.coins+5000
    }
    else if(sum<21){
        message="you want to draw a new card"
    }
    else if(sum>21){
        message="Nahhh better luck next time"
        isAlive = false
        player.coins=0;
    }
    return message
}

function newCard(){
    //Draw New card
    if(isAlive===true){
    sum = sum + cards[2]
    show.textContent = "card1 = "+ cards[0] + "card2 = " + cards[1] + "card3 = " + cards[2]
    summ.textContent = sum
    displayy.textContent = display(sum)
    }
}



function getParameterByName(name) {
    // Get the player name from the URL query parameter
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}





function generateCards(){
    //cardgenerator random 
    let i = Math.floor((Math.random() * 15) +1);
    // console.log(i)
    return i;
}

  