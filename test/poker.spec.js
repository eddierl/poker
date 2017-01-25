import {expect} from 'chai';
import pokerJudge from '../src/poker';

describe('Poker Judge', () => {

  describe('Higher card', () => {
    it('should return 1 if hand1 has higher card', () => {
      const hand1 = ['2H', '3D', '5S', '9C', '8D'];
      const hand2 = ['2C', '3H', '4S', '5C', '6H'];
      expect(pokerJudge(hand1, hand2)).to.equal(1);
    });

    it('should return 2 if hand2 has higher card', () => {
      const hand1 = ['2H', '3D', '5S', '8C', '6D'];
      const hand2 = ['2C', '3H', '4S', '8C', '9H'];
      expect(pokerJudge(hand1, hand2)).to.equal(2);
    });

    it('should return 0 for a tie', () => {
      const hand1 = ['2H', '3D', '5S', '8C', '9D'];
      const hand2 = ['2C', '3H', '4S', '8C', '9D'];
      expect(pokerJudge(hand1, hand2)).to.equal(0);
    });

    it('should return 1 for if hand1 has higher card (with royalty)', () => {
      const hand1 = ['2H', '3D', '5S', '8C', 'AD'];
      const hand2 = ['2C', '3H', '4S', '8C', 'KD'];
      expect(pokerJudge(hand1, hand2)).to.equal(1);
    });
  });
  describe('Pair', () => {
    it('should return 1 when only hand1 has a pair', () => {
      const hand1 = ['2H', '3D', '5S', '9C', '9D'];
      const hand2 = ['2C', '3H', '4S', '5C', '9H'];
      expect(pokerJudge(hand1, hand2)).to.equal(1);
    });

    it('should return 2 when only hand2 has a pair', () => {
      const hand1 = ['2H', '3D', '5S', '9C', '8D'];
      const hand2 = ['2C', '3H', '4S', '5C', '5H'];
      expect(pokerJudge(hand1, hand2)).to.equal(2);
    });

    it('should return 2 when hand2 has a higher pair', () => {
      const hand1 = ['2H', '3D', '5S', '8C', '8D'];
      const hand2 = ['2C', '3H', '4S', '9C', '9H'];
      expect(pokerJudge(hand1, hand2)).to.equal(2);
    });
  })
});
