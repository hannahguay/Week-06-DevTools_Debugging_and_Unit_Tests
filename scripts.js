
//STEP 1: Create a deck of cards and shuffle it

//deck class with an empty array property for deck
class Deck {
  constructor() {
    this.deck = [];
  }
  //method to create 52 unique cards
  createDeck() {
    var suits = ["Spades", "Clubs", "Hearts", "Diamonds"];
    var values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
   
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

//create new instance of Deck, call the createDeck and shuffleDeck methods
let myDeck = new Deck;
myDeck.createDeck()
myDeck.shuffleDeck()
// console.log("Create Deck:", myDeck);

//STEP 2: divide the randomized values arrray or object equally between two hands

//create a variable that finds the middle value of the length of the myDeck.deck array
const middlePoint = Math.ceil(myDeck.deck.length / 2);

//use splice to cut from the first index to the middle point value and put that into the variable playerOneHand
let playerOneHand = myDeck.deck.splice(0, middlePoint);

//use splice to cut from the last index to the middle point value and put that into the variable playerTwoHand
let playerTwoHand = myDeck.deck.splice(-middlePoint);

console.log("playerOneHand", playerOneHand);
console.log("playerTwoHand", playerTwoHand);

//STEP 3: pull a single value from each playerHand and compare the two values

//create variables to hold score count
let playerOneScore = 0;
let playerTwoScore = 0;

//this function
function drawCard() {
  
  //this loop iterates through the players' decks 26 times to pull a value from each hand per iteration
  //compare those values, keep a total score and then log the highest score
  for (let i = 0; i < 26 ; i++) {

    //variables to display the suit and value of each card drawn
    let playerOneCard = playerOneHand[i].Value + " of " + playerOneHand[i].Suit;
    let playerTwoCard = playerTwoHand[i].Value + " of " + playerTwoHand[i].Suit;

    //variables that will use the value of i each time through the loop to pull the corresponding
    //index number of the players' hands
    let playerOneCardValue = playerOneHand[i].Value;
    let playerTwoCardValue = playerTwoHand[i].Value;

      //compares the drawn cards' values and adds a point to the playerScore that the higher value belonged to
      console.log(`Round # ${i + 1}, Player One Card: ${[playerOneCard]}, Player Two Card: ${playerTwoCard}`);
      if(playerOneCardValue > playerTwoCardValue) {
        playerOneScore++;
        console.log(`Player One Wins! Player One Total Points: ${playerOneScore}`);
      } else if(playerTwoCardValue > playerOneCardValue) {
        playerTwoScore++;
        console.log(`Player Two Wins! Player Two Points: ${playerTwoScore}`);
      } else {
        console.log(`Round # ${i + 1}, Draw`)
      }
  }
  //after the loop completes, display the final score.
  console.log(`----------------------
  Final Scores: Player One: ${playerOneScore}, Player Two: ${playerTwoScore}`);  
}

//calling drawCard function to start the game
drawCard();

// STEP 4: compare the final scores for each player and declare the player with highest points the winner.

if(playerOneScore > playerTwoScore) {
  console.log('Player One Wins the Game!');
} else if(playerTwoScore > playerOneScore) {
  console.log('Player Two Wins the Game!')
} else {
  console.log('We Have a Tie!')
}



