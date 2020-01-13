const cards = ["queen", "queen", "king", "king"];
let cardsInPlay = [];
function checkForMatch (){
if (cardsInPlay.length === 2 && cardsInPlay[0] === cardsInPlay[1]) {
		console.log ("You found a match!");
} else {
	console.log("Sorry, try again.");} 
}
let cardId = cards.length;
function flipCard (cardId) {
 cardsInPlay.push (cards[cardId])
 console.log ("User flipped " + cards[cardId]);
 checkForMatch();
	}


flipCard(0);
flipCard(2);