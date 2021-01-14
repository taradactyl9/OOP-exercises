/* ## Hand constructor
A hand is simply represented as a collection of cards, but it would also be convenient for a hand to be able to return it's point value. We would like to be able to do this with a Hand constructor:

```js
> var myHand = new Hand()
> myHand.addCard(new Card(5, 'diamonds'))
> myHand.addCard(new Card(13, 'spades'))
> myHand.getPoints()
15
```

Implement a Hand class that will allow the code above to work. Hint: you will want to store as a property of a hand object - an array of card objects. */

class Card {
    constructor(point, suit) {
        this.point = point;
        this.suit = suit;
    };
};

class Hand {
    constructor(){
        this.Hand = ;
        
    }
}

var myHand = new Hand()
    myHand.addCard(new Card(5, 'diamonds'))
    myHand.addCard(new Card(13, 'spades'))
    myHand.getPoints()
    15