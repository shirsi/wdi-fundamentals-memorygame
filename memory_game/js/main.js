const cards = [
{ rank: "queen"	,
suit:"hearts" ,
cardImage: "images/queen-of-hearts.png"
},
{ rank:"queen"	,
suit:"diamonds" ,
cardImage:"images/queen-of-diamonds.png" 
},
{ rank: "king",
suit: "hearts",
cardImage:"images/king-of-hearts.png"
},
{ rank: "king",
suit:"diamonds" ,
cardImage:"images/king-of-diamonds.png" ,
}
];



let cardsInPlay = [];
function checkForMatch (){
if (cardsInPlay.length === 2 && cardsInPlay[0] === cardsInPlay[1]) {
		console.log ("You found a match!");
} else  if (cardsInPlay.length === 2 )
	{console.log("Sorry, try again.");} 
}
let cardId = cards.length;
function flipCard (cardId) {
 cardsInPlay.push (cards[cardId].rank)
 console.log ("User flipped " + cards[cardId].rank);
 console.log(cards[cardId].cardImage);
 console.log(cards[cardId].suit);
 checkForMatch();
	}


flipCard(0);
flipCard(2);