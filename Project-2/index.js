
let cards = [];
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el");
//let sumEl = document.getElementById("sum-el");
// More efficient way is to do with the querrySelector
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");


// let playerName = "Siddhant"
// let playerChips = 77
// formation objects
let player = {
    name: "Siddhant",
    chips: 77
}

let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips;

function getRandomCard(){
    let randomNumber = Math.floor(Math.random() * 14);
    if(randomNumber === 1){
        return 11;
    }
    else if(randomNumber > 10){
        return 10;
    }
    else{
        return randomNumber;
    }
} 


function startGame(){
    isAlive = true
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard;
    renderGame();
}

function renderGame(){
    // render out firstcard and second card
    cardsEl.textContent = "Cards: ";
    //render out all the cards we have
    for(let i = 0; i < cards.length; i++){
        cardsEl.textContent += cards[i] + " ";
    }
    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card?";
    } else if (sum === 21) {
        message = "Wohoo! You've got Blackjack!";
        hasBlackJack = true;
    } else {
        message = "You're out of the game!";
        isAlive = false;
    }
    messageEl.textContent = message;
}

function newCard(){
    //console.log("Drawing a new card from the deck")

    if(isAlive === true && hasBlackJack === false){
    let card = getRandomCard();
    sum += card;
    cards.push(card);
    console.log(cards);
    renderGame();
    }
}



// let randomNumber =  Math.floor(Math.random() * 7);
// console.log(randomNumber);
