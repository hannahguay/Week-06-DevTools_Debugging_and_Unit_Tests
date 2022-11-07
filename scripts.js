
//STEP 1: Create a deck of cards and shuffle it

//deck class with an empty array property for deck
class Deck {
  constructor() {
    this.deck = [];
  }
  //method to create 52 unique cards
  createDeck() {
    var suits = ["Spade", "Club", "Heart", "Diamond"];
    var values = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
    //loop through the length of the suits array and length of values array,
    //pairing a suit with a value, calling each pair a newCard and pushing the 
    //pair to the deck array
    for (let i = 0; i < suits.length; i++) {
      for (let x = 0; x < values.length; x++) {
        let newCard = { Value: values[x], Suit: suits[i] };
        this.deck.push(newCard);
      }
    }
  }

  //method to shuffle the deck
  //loop through the length of the deck, 
  //take the index of a random card and move it to the current index
  shuffleDeck() {
    for (let i = this.deck.length - 1; i > 0; i--) {
      //creates a random number index with a value before the card we are on
      const newIndex = Math.floor(Math.random() * (i + 1));
      //placeholder value
      const oldValue = this.deck[newIndex];
      //swap the card we are currently on with the new card we just picked
      this.deck[newIndex] = this.deck[i];
      this.deck[i] = oldValue;
    }
  }
}

//create new instance of Deck
let myDeck = new Deck;
myDeck.createDeck()
myDeck.shuffleDeck()
console.log("call createDeck, shuffleDeck methods on myDeck", myDeck);

//STEP 2: divide the randomized values arrray or object equally between two hands

//create a variable that finds the middle value of the length of the myDeck.deck array
const middlePoint = Math.ceil(myDeck.deck.length / 2);

//use splice to cut from the first index to the middle point value and put that into the variable playerHand1
let playerOneHand = myDeck.deck.splice(0, middlePoint);

//use splice to cut from the last index to the middle point value and put that into the variable playerHand1
let playerTwoHand = myDeck.deck.splice(-middlePoint);

console.log("playerOneHand", playerOneHand);
console.log("playerTwoHand", playerTwoHand);

//STEP 3: pull a single value from each playerhand and compare the two values


//create variables to hold score count
let playerOneScore = 0;
  let playerTwoScore = 0;

//this function
function drawCard() {
 
  for (let i = 0; i < 26 ; i++) {
    let playerOneCard = playerOneHand[i].Value;
    let playerTwoCard = playerTwoHand[i].Value;
      console.log(`Round # ${i + 1}, Player One Card: ${playerOneCard}, Player Two Card: ${playerTwoCard}`);
      if(playerOneCard > playerTwoCard) {
        playerOneScore++;
        console.log(`Player One Wins! Player One Total Points: ${playerOneScore}`);
      } else if(playerTwoCard > playerOneCard) {
        playerTwoScore++;
        console.log(`Player Two Wins! Player Two Points: ${playerTwoScore}`);
      } else {
        console.log(`Round # ${i + 1}, Draw`)
      }
  }
  console.log(`----------------------
  Final Scores: Player One: ${playerOneScore}, Player Two: ${playerTwoScore}`);  
}

//this function
drawCard();

if(playerOneScore > playerTwoScore) {
  console.log('Player One Wins the Game!');
} else if(playerTwoScore > playerOneScore) {
  console.log('Player Two Wins the Game!')
} else {
  console.log('We Have a Tie!')
}



