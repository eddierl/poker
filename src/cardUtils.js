export const compareCards = (card1, card2) => {
  const cardsVal = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
  const card1Val = cardsVal.indexOf(getCardValue(card1));
  const card2Val = cardsVal.indexOf(getCardValue(card2));
  if (card1Val === card2Val) return 0;
  return card1Val > card2Val ? 1 : -1;
}

export const getCardValue = card => card.slice(0, -1);

export const getPairValues = hand => {
  const values = hand.map(getCardValue);
  return values.filter(val => values.indexOf(val) !== values.lastIndexOf(val)).reduce(() => {}, []);
};


