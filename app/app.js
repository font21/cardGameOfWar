console.log('JavaScript connected.')

/* =====================================
==========================================
==		Arrays and game options		======
==========================================
  =====================================*/

// Setup the groups of card parts and shove them into an aray
	// Source: https://en.wikipedia.org/wiki/Standard_52-card_deck

	// params for card objects
		const suitsArray = ['&diams;', '&hearts;', '&spades;', '&clubs;'];

		const rankArray = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];

		const cardDeckArray = [];

	// Players bits
		const player1HandArray = [];
		const player2HandArray = [];

		var player1Score = 0;
		var player2Score = 0;

/* =====================================
==========================================
==		Functions		==================
==========================================
  =====================================*/

// Function to create an array of objects as cards
	deckGenerator = () => {
		let cardValue = 0;
		for ( let iSuit = 0; iSuit < suitsArray.length; iSuit++ ) {

			for (let iRank = 0;  iRank < rankArray.length; iRank++) {

				// console.log(rankArray[iRank]);
				// console.log(suitsArray[iSuit]);

				let cardObj = { Rank: rankArray[iRank], Suit: suitsArray[iSuit] };

				cardDeckArray.push(cardObj);
			}
		}
		console.log('Initial cardDeckArray: \n\n' + cardDeckArray);
		return cardDeckArray;
	}



// Function to render the card deck
	renderDeck = () => {
		
		let $deck = $('#deck');
		$deck.children().remove();
		for (let iRendr = 0; iRendr < cardDeckArray.length; iRendr++ ) {

			let $card = $("<div>").addClass("card");
			
			let $topRank = $("<div>").addClass("topRank").html(cardDeckArray[iRendr].Rank).appendTo($card);
			
			let $suit = $("<div>").addClass("suit" + deck[iRendr].suit).html(cardDeckArray[iRendr].Suit).appendTo($card);
			
			let $botRank = $("<div>").addClass("botRank").html(cardDeckArray[iRendr].Rank).appendTo($card);

			// https://api.jquery.com/append/
			// $deck.append( $card, [$topRank, $suit, $botRank] );
			$deck.append( $card );
		}
	}



// Function to shuffle a bazillion times.
	function shuffleCards(arrayToShuffle) {
		{
			arrayToShuffle.sort(() => Math.random() - 0.5);
			arrayToShuffle.sort(() => Math.random() - 0.5);
			arrayToShuffle.sort(() => Math.random() - 0.5);
		/* My second attempt at finding a way to randomize the cardDeckArray or shuffle the deck of cards.
		Source: https://javascript.info/task/shuffle */
		}
	}

// Function to deal cards into two (player 1's and player 2's) arrays
	dealFunction = () => {
		for ( let iDeal = 0; iDeal < cardDeckArray.length; iDeal++ ) {
			player1HandArray.push(cardDeckArray[iDeal]);
			player2HandArray.push(cardDeckArray[iDeal]);

			console.log(player1HandArray);
			console.log(player2HandArray);
		}
	}

/* =====================================
==========================================
==	sub-Function that action and Button Presses
==========================================
  =====================================*/

// on page load Function that Generates the Deck, shuffles those cards and Displays them.
	pageLoad = () => {
		deck = deckGenerator();
		shuffleCards(cardDeckArray);
		renderDeck();
		console.log('pageLoad() ran.');
	}

// Same as page load but without deck setup
	buttonPressFunction = () => {
		shuffleCards(cardDeckArray);
		renderDeck();
		console.log('buttonPressFunction() ran.');
	}

	playWithYourself = () => {
		dealCardsFunction();
	}

// When page loads, run initial setup stuffs
	window.onload = pageLoad;