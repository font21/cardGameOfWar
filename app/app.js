console.log('JavaScript connected.')

// Setup the groups of card parts and shove them into an aray
	// Source: https://en.wikipedia.org/wiki/Standard_52-card_deck
	const suitsArray = ['&diams;', '&hearts;', '&spades;', '&clubs;'];

	const rankArray = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];

	const cardDeckArray = [];

// Function to create an new array with cards as objects
	function deckGenerator() {
		for ( let i = 0; i < rankArray.length; i++ ) {
			for (let x = 0;  x < suitsArray.length; x++) {
				let cardObj = {Value: suitsArray[x], Suit: rankArray[i]};
				cardDeckArray.push(cardObj);			
			}
		}
		return cardDeckArray;
	}

// Function to shuffle a bazillion times.
	function shuffleCards() {
	}