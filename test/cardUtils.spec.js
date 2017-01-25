import {expect} from 'chai';
import {compareCards, getPairValues} from '../src/cardUtils';

describe('cardUtils', () => {
  describe('compareCards', () => {

    it('should return 1 if card 1 is higher', () => {
      const card1 = '3C';
      const card2 = '2H';
      expect(compareCards(card1, card2)).to.equal(1);
    });

    it('should return -1 if card 2 is higher', () => {
      const card1 = '2H';
      const card2 = '3C';
      expect(compareCards(card1, card2)).to.equal(-1);
    });

    it('should return 0 for a tie', () => {
      const card1 = '2H';
      const card2 = '2H';
      expect(compareCards(card1, card2)).to.equal(0);
    });

    it('should return 0 for a tie of cards with same value different shape', () => {
      const card1 = '2H';
      const card2 = '2C';
      expect(compareCards(card1, card2)).to.equal(0);
    });

    it('should return 1 when card 1 is 10D card2 is 2K', () => {
      const card1 = '10D';
      const card2 = '2K';
      expect(compareCards(card1, card2)).to.equal(1);
    });

    describe('Royal Family', () => {
      it('should return 1 if card1 is higher', () => {
        const card1 = 'AH';
        const card2 = 'KC';
        expect(compareCards(card1, card2)).to.equal(1);
      });

      it('should return -1 if card2 is higher', () => {
        const card1 = '2H';
        const card2 = 'AC';
        expect(compareCards(card1, card2)).to.equal(-1);
      });
    });
  });
  describe('getPairValues', () => {
    it('should return pair values when has pair', () => {
      expect(getPairValues(['2H', '3D', '5S', '9C', '9D'])).to.deep.equal(['9']);
    });

    it('should return empty array if has no pair', () => {
      expect(getPairValues(['2H', '3D', '5S', '8C', '9D'])).to.deep.equal([]);
    });
  })
});
