const expect = require('chai').expect;

const getName = require('./index');

describe('GET NAME', () => {
  it('should return full name', () => {
    const input = {
      surName: 'Sparrow',
      firstName: 'Jack',
    };

    const output = getName(input);
    const expected = 'Jack Sparrow';

    expect(output).to.equal(expected);
  });
});
