const formatFullname = require('../formatFullname.js');
const expect = require('chai').expect;

describe('formatFullname', () => {
  it('should return an error if "fullName" arg is not a string" ', () => {
    expect(formatFullname(undefined)).to.equal('Error');
    expect(formatFullname(12)).to.equal('Error');
    expect(formatFullname({})).to.equal('Error');
    expect(formatFullname([])).to.equal('Error');
    expect(formatFullname(function () {})).to.equal('Error');
  });

  it('should return "fullName" with only first letters capitalized', () => {
    expect(formatFullname('JoHn doE')).to.equal('John Doe');
    expect(formatFullname('JoHn doE')).to.equal('John Doe');
    expect(formatFullname('john doe')).to.equal('John Doe');
  });

  it('should return "Error" if "fullName" has more then firstname and lastname', () => {
    expect(formatFullname('John Doe Smith')).to.equal('Error');
    expect(formatFullname('JoHn doE SMith Jr.')).to.equal('Error');
  });

  it('should return "Error" if "fullName" is empty', () => {
    expect(formatFullname('')).to.equal('Error');
  });

  it('should return "Error" if "fullName" has only first name or lastname', () => {
    expect(formatFullname('John')).to.equal('Error');
    expect(formatFullname('Smith')).to.equal('Error');
  });

  it('should return "Error" if "firstName" or "lastName" will have numbers', () => {
    expect(formatFullname('123 Smith')).to.equal('Error');
    expect(formatFullname('John 123')).to.equal('Error');
  });
});
