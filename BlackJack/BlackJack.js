var cardValue = {
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
  seven: 7,
  eight: 8,
  nine: 9,
  ten: 10,
  jack: 10,
  queen: 10,
  king: 10,
};

function BlackjackHighest(strArr) {
  strArr = hand;
  // Set variable for sum of hand
  var sum = 0;
  // Set variable for highest card in hand to two
  var highest = "two";
  // Set a result variable (what we"ll return)
  var result;
  // Set two variables for dealing with an ace in the hand
  var acePresent;
  var aceValue;
  // Determine the highest card in the hand including hierarchy of face cards
  for (var i = 0; i < hand.length; i++) {
    // Set them both to lowercase so I don"t have to worry about that
    var currentCard = hand[i].toLowerCase();
    highest = highest.toLowerCase();

    // We want to know if the card values are equal so we can establish hierarchy
    var cardsEqual = function () {
      if (cardValue[currentCard] == cardValue[highest]) {
        return true;
      }
    };

    if (cardValue[currentCard] > cardValue[highest]) {
      highest = currentCard;
    } else if (
      (cardsEqual() && highest == "ten" && currentCard == "jack") ||
      currentCard == "queen" ||
      currentCard == "king"
    ) {
      highest = currentCard;
    } else if (cardsEqual() && cardValue == "queen" && highest == "jack") {
      highest = currentCard;
    } else if (cardsEqual() && cardValue == "king" && highest == "jack") {
      highest = currentCard;
    } else if (cardsEqual() && cardValue == "king" && highest == "queen") {
      highest = currentCard;
    }

    // If there is an ace, let’s know that and move on
    if (currentCard == "ace") {
      var acePresent = true;
    } else {
      sum += cardValue[currentCard];
    }
  }

  // If an ace was present and the sum is less than 11
  if (acePresent == true && sum < 11) {
    // The ace is worth 11 and it’s the highest card
    aceValue = 11;
    highest = "ace";
    // Add the ace value to the sum
    sum += aceValue;
  } else if (acePresent == true) {
    // Otherwise, it’s worth one
    aceValue = 1;
    sum += aceValue;
  }

  // Determine if we busted
  if (sum < 21) {
    result = "below";
  } else if ((sum = 21)) {
    result = "blackjack";
  } else {
    result = "above";
  }

  // Build the result and return it
  result += " " + highest;
  return result;
}
