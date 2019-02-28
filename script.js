// 
// Blackjack
// by Kyle Souther-Bruno

let suits = ['Hearts', 'Clubs', 'Diamonds', 'Spades'],
    values = ['Ace', 'King', 'Queen', 'Jack',
    'Ten', 'Nine', 'Eight', 'Seven', 'Six',
    'Five', 'Four', 'Three', 'Two'];

let textArea = document.getElementById('text-area'),
    newGameButton = document.getElementById('newGameButton'),
    hitButton = document.getElementById('hitButton'),
    stayButton = document.getElementById('stayButton');

let gameStarted = false,
    gameOver = false,
    playerWon = false,
    dealerCards = [],
    playerCards = [],
    dealerScore = 0,
    playerScore = 0,
    deck = [];

newGameButton.addEventListener('click', function () {

    hitButton.style.display = 'none';
    stayButton.style.display = 'none';
    showStatus();

    deck = createDeck();
    dealerCards = [getNextCard(), getNextCard()];
    playerCards = [getNextCard(), getNextCard()];


    textArea.innerText = 'Started...';
    newGameButton.style.display = 'none';
    hitButton.style.display = 'inline';
    stayButton.style.display = 'inline';

});


function createDeck() {
    let deck = [];
    for (let suitIdx = 0; suitIdx < suits.length; suitIdx++) {
        for (let valueIdx = 0; valueIdx < values.length; valuesIdx++)
            let card = {
                suit: suits[suitIdx],
                Value: values[valueIdx]
            };
        createDesk.push(card);
    }
    return deck;
}

function getNextCard() {
    return deck.shift()
}

for (let i = 0; i < deck.length; i++) {
    console.log(deck[i]);
}

let playerCards = [deck[0], deck[2]];

console.log('Welcome to Blackjack!');
console.log('You are dealt: ');
console.log(' ' + playerCards[0]);
console.log(' ' + playerCards[1]);
