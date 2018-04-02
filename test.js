const expect = require('chai').expect;

const writeName = require('./lib').default;

describe('WRITE NAME', () => {
  it('should return name', () => {
    const input = {
      firstName: 'Jack',
      surName: 'Sparrow'
    };

    const output = writeName(input);
    const expected = 'Jack Sparrow';

    expect(output).to.equal(expected);
  });

  it('should return name with title', () => {
    const input = {
      title: 'Captain',
      firstName: 'Jack',
      surName: 'Sparrow'
    };

    const output = writeName(input);
    const expected = 'Captain Jack Sparrow';

    expect(output).to.equal(expected);
  });

  it('should return name with suffix', () => {
    const input = {
      suffix: 'Jr.',
      surName: 'Turner',
      firstName: 'Bill',
    };

    const output = writeName(input);
    const expected = 'Bill Turner Jr.';

    expect(output).to.equal(expected);
  });

  it('should return name with title and suffix', () => {
    const input = {
      suffix: 'Jr.',
      surName: 'Turner',
      firstName: 'Bill',
      title: 'Bootstrap'
    };

    const output = writeName(input);
    const expected = 'Bootstrap Bill Turner Jr.';

    expect(output).to.equal(expected);
  });

  it('should return name with suffix separator', () => {
    const input = {
      suffix: 'the Old.',
      surName: 'Turner',
      firstName: 'Bill',
      suffixSeparator: ','
    };

    const output = writeName(input);
    const expected = 'Bill Turner, the Old.';

    expect(output).to.equal(expected);
  });

  it('should return name with suffix separator and title', () => {
    const input = {
      suffix: 'the Old.',
      surName: 'Turner',
      firstName: 'Bill',
      title: 'Bootstrap',
      suffixSeparator: ','
    };

    const output = writeName(input);
    const expected = 'Bootstrap Bill Turner, the Old.';

    expect(output).to.equal(expected);
  });

  it('should return name with suffix separator and no suffix', () => {
    const input = {
      surName: 'Turner',
      firstName: 'Bill',
      suffixSeparator: ','
    };

    const output = writeName(input);
    const expected = 'Bill Turner';

    expect(output).to.equal(expected);
  });

  it('should return name with title, suffix separator and no suffix', () => {
    const input = {
      surName: 'Turner',
      firstName: 'Bill',
      title: 'Bootstrap',
      suffixSeparator: ','
    };

    const output = writeName(input);
    const expected = 'Bootstrap Bill Turner';

    expect(output).to.equal(expected);
  });

  it('should return name with middlename', () => {
    const input = {
      firstName: 'Jack',
      surName: 'Sparrow',
      middleName: '"Johhny Depp"'
    };

    const output = writeName(input);
    const expected = 'Jack "Johhny Depp" Sparrow';

    expect(output).to.equal(expected);
  });

  it('should return name in lexical order', () => {
    const input = {
      lexicalOrder: true,
      firstName: 'Justin',
      middleName: 'Randall',
      surName: 'Timberlake',
    }

    const output = writeName(input);
    const expected = 'Timberlake, Justin Randall';

    expect(output).to.equal(expected);
  });
});
