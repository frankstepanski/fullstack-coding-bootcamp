/*
    Create an automated version of the classic card game WAR.
     -	Deal 26 Cards to two Players from a Deck.
     -	Iterate through the turns where each Player plays a Card
     -	The Player who played the higher card is awarded a point
     -	Ties result in zero points for either Player
     -	After all cards have been played, display the score.
*/

class Card {
  
    constructor(rank, suit, value) {
        this.rank = rank;
        this.suit = suit;
        this.value = value;
    }
}

class Deck {
  
      constructor() {
          this._cards = []; // 52 card objects
      };
    
      // getter
      get cards() {
        return 	this._cards;
      }
      
      buildDeck() {
        this._populate(); // _ is a convention to indicate a private method
        this._shuffle(); // _ is a convention to indicate a private method
        return this._cards;
      }
      
      _populate() {
        const suits = ['♠', '♣', '♥', '♦'];
        const ranks = ['A','2','3','4','5','6','7','8','9','10','J','Q','K'];
        const values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
    
        for (let i = 0; i < suits.length; i++) { // ♠ suits
           for (let j = 0; j < ranks.length; j++) { // A, 2, 3, 4, 5, 6, 7, 8, 9, 10, J, Q, K
              // [{ rank: 'A', suit: '♠', value: 1}, { rank: '2', suit: '♠', value: 2}] => 52 card objects
              this._cards.push(new Card(ranks[j], suits[i], values[j])); 
           }
        }
      }

      // cards [ { rank: 'A', suit: '♠', value: 1}, { rank: '2', suit: '♠', value: 2}]

      _shuffle() {

        if (this._cards.length > 0) {
          // https://flaviocopes.com/how-to-shuffle-array-javascript/
          const shuffledDeck = this._cards.sort(() => Math.random() - 0.5)
          this._cards = [...shuffledDeck];
        }
     }
      
}

class Player {

    constructor(name) {
		this._playerName = name;
		this._playerScore = 0;
		this._playerDeck = [];
	}

    get name() {
        return this._playerName;
    }

    get deck() {
        return this._playerDeck;
      }
      
    get score() {
        return this._playerScore;
    }

    set deck(newDeck) {
        if (Array.isArray(newDeck)) { // check if newDeck is an array
          this._playerDeck = newDeck;
        }
    }
    
    set score(newScore) {
        if (!isNaN(newScore)) { // check if newScore is a number
          this._playerScore = newScore;
        }
    }

}

class Dealer {

    constructor() {
        this._players = [];
        this._deck = [];
    }

    start() {
      console.log("\t\t\t\t**** Game Master Menu ****")
      let input = prompt("0- exit; 1- play");
        while (input != '0') {
            switch (input) {
                case '0':
                    exit;
                case '1':
	                this._createGame();
                    break;
			      }  
				    input = prompt("0- exit; 1- play");
		    }
    }

    _createGame() {

        // step 1: create 2 instances of Player
        this._players[0] = new Player("Player 1");
        this._players[1] = new Player("Player 2");
    
        // step 2: create 1 instance of Deck and populate cards
        //         note: do not need a class property for cards, only temporary
        const cards = new Deck().buildDeck();
    
        // step 3: assign 26 cards to each player)
        this._players[0].deck = [...cards.slice(0,26)]; // create a copy of the first 26 cards
        this._players[1].deck = [...cards.slice(26,52)]; // create a copy of the last 26 cards
    
        // step 4: deal card from each player until done    
        console.log("\t\t\t\t**** Dealing Hands ****")
        for (let i = 0; i < this._players[0].deck.length; i++) {
            if (this._players[0].deck[i].value > this._players[1].deck[i].value) {
                this._players[0].score +=1;
                // Showing which player won and their hand (26 hands)
                let winningHand = `${this._players[0].deck[i].rank} of ${this._players[0].deck[i].suit}`;
                console.log(`Player 1 won with a ${winningHand}`);
            } else {
                this._players[1].score +=1;
                let winningHand = `${this._players[1].deck[i].rank} of ${this._players[0].deck[i].suit}`;
                console.log(`Player 2 won with a ${winningHand}`);
            }
        }

        // step 5: show winner
        console.log("\t\t\t\t**** Hands Finished ****")
        if (this._players[0].score > this._players[1].score) {
          console.log(`${this._players[0].name.toUpperCase()} WON WAR with a score of ${this._players[0].score}`);
        } else if (this._players[0].score < this._players[1].score){
           console.log(`${this._players[1].name.toUpperCase()} WON WAR with a score of ${this._players[1].score}`);
        } else {
          console.log("PLAYER 1 AND PLAYER 2 TIED!");
        }
      }
}

const dealer = new Dealer();
dealer.start();