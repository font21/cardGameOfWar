console.log('JavaScript connected.')

// Setup the groups of card parts and shove them into an aray
	// Source: https://en.wikipedia.org/wiki/Standard_52-card_deck
	const suitsArray = ['&diams;', '&hearts;', '&spades;', '&clubs;'];

	const rankArray = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];

	const cardDeckArray = [];

// Function to create an new array with cards as objects
	deckGenerator = () => {
		for ( let iti = 0; iti < rankArray.length; iti++ ) {
			for (let ity = 0;  ity < suitsArray.length; ity++) {
				let cardObj = {Value: suitsArray[ity], Suit: rankArray[iti]};
				cardDeckArray.push(cardObj);
			}
		}
		return cardDeckArray;
	}



// Function to render the card deck
	renderDeck = () => {

		document.getElementById('deck').innerHTML = '';
		for (let itw = 0; itw < cardDeckArray.length; itw++) {

			let card = document.createElement("div");
			let value = document.createElement("div");
			let suit = document.createElement('div');

			card.className = "card";
			value.className = "value";
			suit.className = 'suit' + deck[itw].suit;

			value.innerHTML = cardDeckArray[itw].Value;
			card.appendChild(value);
			card.appendChild(suit);

			document.getElementById("deck").appendChild(card);
		}
	}



// Function to shuffle a bazillion times.
	shuffleCards = () => {
		// Work through cardDeckArray grabbing two random cards and swapping them for 999.
		for (let itz = 0; itz < 1000; itz++) {
			let CardPositionOne = Math.floor((Math.random() * cardDeckArray.length));
			let CardPositionTwo = Math.floor((Math.random() * cardDeckArray.length));
			
			let CardPositionThree = cardDeckArray[CardPositionTwo];
			
			cardDeckArray[CardPositionOne] = cardDeckArray[CardPositionTwo];
			cardDeckArray[CardPositionTwo] = CardPositionThree;
		}
		/* renderDeck(); */
	}

// Do things Functions
	function PageloadFunction() {
		deck = deckGenerator();
		shuffleCards();
		renderDeck();
		console.log(cardDeckArray);
	}


	function buttonPressFunction() {
		shuffleCards();
		renderDeck();
		console.log(cardDeckArray);
	}


	window.onload = PageloadFunction;