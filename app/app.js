console.log('JavaScript connected.')

// Setup the groups of card parts and shove them into an aray
	// Source: https://en.wikipedia.org/wiki/Standard_52-card_deck
	const suitsArray = ['&diams;', '&hearts;', '&spades;', '&clubs;'];

	const rankArray = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];

	const cardDeckArray = [];

// Function to create an new array with cards as objects
	deckGenerator = () => {
		for ( let iSuit = 0; iSuit < suitsArray.length; iSuit++ ) {

			for (let iRank = 0;  iRank < rankArray.length; iRank++) {

				let cardObj = {Value: rankArray[iRank], Suit: suitsArray[iSuit]};

				cardDeckArray.push(cardObj);
			}
		}
		return cardDeckArray;
	}



// Function to render the card deck
	renderDeck = () => {

		
		let $deck = $('#deck');
		$deck.children().remove();
		for (let itw = 0; itw < cardDeckArray.length; itw++) {

			let $card = $("<div>").addClass("card");
			
			let $topValue = $("<div>").addClass("value").html(cardDeckArray[itw].Value).appendTo($card);
			
			let $suit = $("<div>").addClass("suit" + deck[itw].suit).html(cardDeckArray[itw].Suit).appendTo($card);
			
			let $botValue = $("<div>").addClass("value").html(cardDeckArray[itw].Value).appendTo($card);

			// https://api.jquery.com/append/
			// $deck.append( $card, [$topValue, $suit, $botValue] );
			$deck.append( $card );
		}
	}



// Function to shuffle a bazillion times.
	function shuffleCards() {
		{
			cardDeckArray.sort(() => Math.random() - 0.5);
			cardDeckArray.sort(() => Math.random() - 0.5);
			cardDeckArray.sort(() => Math.random() - 0.5);
		/* My second attempt at finding a way to randomize the cardDeckArray
		OR shuffle the deck of cards.
		Source:
		https://javascript.info/task/shuffle
		*/
		}
	}




	pageLoad = () => {
		deck = deckGenerator();
		shuffleCards();
		renderDeck();
		console.log(cardDeckArray);
	}

	buttonPressFunction = () => {
		shuffleCards();
		renderDeck();
		console.log(cardDeckArray);
	}

	window.onload = pageLoad;
