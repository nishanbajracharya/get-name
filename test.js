const expect = require('chai').expect;

const getName = require('./index');

describe('GET NAME', () => {
  it('should return first name and surname', () => {
    const input = {
      firstName: 'Jack',
      surName: 'Sparrow',
    };

    const output = getName(input);
    const expected = 'Jack Sparrow';

    expect(output).to.equal(expected);
  });

  it('should return name with title', () => {
    const input = {
      title: 'Captain',
      firstName: 'Jack',
      surName: 'Sparrow',
    }

    const output = getName(input);
    const expected = 'Captain Jack Sparrow';

    expect(output).to.equal(expected);
  })
});
