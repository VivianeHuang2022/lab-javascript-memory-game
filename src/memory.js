class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    // add the rest of the class properties here
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }

  shuffleCards() {
    // ... write your code here
    if(!Array.isArray(this.cards)){
      return undefined;
    }

   
    for (let i = this.cards.length - 1; i >= 0; i--){
      const j = Math.floor(Math.random()*(i + 1));
      [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]]
    }
    return this.cards;

  }

/*
checkIfPair method
should be declared
should add 1 to `pairsClicked` when we call it
should return true when comparing cards that are the same
should return false when the comparing cards are not the same
should add 1 to pairsGuessed if they are the same card
should not add to pairsGuessed if the cards are not the same
*/


  checkIfPair(card1, card2) {

    if(this.pairsClicked){
      return this.pairsClicked + 1;
    }else if(card1 === card2){
      this.pairsGuessed += 1;
      return true;
    }else{
      return false;
    }
    // ... write your code here
  }

  checkIfFinished() {
    if(this.pairsClicked === 0 || this.pairsGuessed != 0){
      return false;
    }else{
      return true;
    }
    // ... write your code here
  }
}


/*

we need a MemoryGame class,
we need a method to shuffle cards,
we need a method to compare cards, and
we need a method to check if the game is finished.

*/
