import {compareCards, getCardValue, hasPair} from './cardUtils';

function pokerJudge(hand1, hand2) {
  const judgePair = checkPair(hand1, hand2);
  if(judgePair) return judgePair;
  const highCard1 = hand1.sort(compareCards).pop();
  const highCard2 = hand2.sort(compareCards).pop();

  const compareResult = compareCards(highCard1, highCard2);
  return compareResult === -1 ? 2 : compareResult;
}

function checkPair(hand1, hand2) {
  if (hasPair(hand1)) return 1;
  if (hasPair(hand2)) return 2;
  return 0;
}
export default pokerJudge;
