const { expect } = require('chai');
const wrap = require('./wrap');

describe('wrap', () => {
  it('Returns empty string if empty string was provided', () => {
    expect(wrap("", 10)).to.equal("");
  });
  it('Returns the line with no break if it`s less than 20 characters', () => {
      expect(wrap('Hello world', 20)).to.equal("Hello world");
  })
  it('Returns many lines if the number passed as an argument is less than the string length', () => {
      expect(wrap("Lorem ipsum dolor sit eu amet, elit na magna sem amet nulla vel purus ac ligula.", 20)).to.equal(
        'Lorem ipsum dolor' + '\n' +
        'sit eu amet, elit na' + '\n' +
        'magna sem amet nulla' + '\n' +
        'vel purus ac ligula.'
      )
  })
});