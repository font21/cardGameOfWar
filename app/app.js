console.log('JavaScript connected.')

/* =================================================
======================================================
==		Arrays and game options		==================
======================================================
  =================================================*/

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

/* =================================================
======================================================
==		Main Functions		==========================
======================================================
  ================================================ */

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
		console.log('Initial cardDeckArray: \n\n' + JSON.stringify(cardDeckArray));
		return cardDeckArray;
	}



// Function to render the card deck
	renderDeck = (renderInputArray) => {
		
		// assign jQuery object
		let $deck = $('#deck');
		$deck.children().remove();
		for (let iRendr = 0; iRendr < renderInputArray.length; iRendr++ ) {

			let $card = $("<div>").addClass("card");
			
			let $topRank = $("<div>").addClass("topRank").html(renderInputArray[iRendr].Rank).appendTo($card);
			
			let $suit = $("<div>").addClass("suit" + deck[iRendr].suit).html(renderInputArray[iRendr].Suit).appendTo($card);
			
			let $botRank = $("<div>").addClass("botRank").html(renderInputArray[iRendr].Rank).appendTo($card);

			$deck.append( $card );

			// Attempt to append topRank, suit, and botRank to card, before appending to the Deck.
			// https://api.jquery.com/append/
			// $deck.append( $card, [$topRank, $suit, $botRank] );
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
	dealCardsFunction = (dealInputArray, player1ExportArray, player2ExportArray) => {
		for ( let iDeal = 0; iDeal < dealInputArray.length; iDeal++ ) {
			player1ExportArray.push(dealInputArray[iDeal]);
			player2ExportArray.push(dealInputArray[iDeal]);

			console.log(player1ExportArray);
			console.log(player2ExportArray);

			return;
		}
	}

/* =================================================
======================================================
==	sub-Function that action and Button Presses		==
======================================================
  ================================================ */

// on page load Function that Generates the Deck, shuffles those cards and Displays them.
	pageLoad = () => {
		deck = deckGenerator();
		shuffleCards(cardDeckArray);
		renderDeck(cardDeckArray);
		console.log('pageLoad() ran.');
	}

// Same as page load but without deck setup
	buttonPressFunction = () => {
		shuffleCards(cardDeckArray);
		renderDeck(cardDeckArray);
		console.log('buttonPressFunction() ran.');
	}

	playWithYourself = () => {
		dealCardsFunction(cardDeckArray, player1HandArray, player2HandArray);
	}

// When page loads, run initial setup stuffs
	window.onload = pageLoad;