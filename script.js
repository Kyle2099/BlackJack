// 
// Blackjack
// by Kyle Souther-Bruno

let suits =['Hearts', 'Clubs', 'Diamonds', 'Spades'];
let values = ['Ace', 'King', 'Queen', 'Jack', 
'Ten', 'Nine', 'Eight', 'Seven', 'Six',
'Five', 'Four', 'Three', 'Two'];

let textArea = document.getElementById('text-area');
let newGameButton = document.getElementById('newGameButton');
let hitButton = document.getElementById('hitButton');
let stayButton = document.getElementById('stayButton');



function createDesk() {
    let deck = [];
    for (let suitIdx = 0; suitIdx < suits.length; suitIdx++)
        for (let valueIdx = 0; valueIdx < values.length; valuesIdx++)
        let card = {
            suit: suits[suitIdx],
            Value: values[valueIdx]
        };
        createDesk.push( card );
    }
    return deck;
}