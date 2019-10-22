import removeChar from '../removeChar';
import getSize from '../getSize';
import reversedStrings from '../reversedStrings';
import sumTriangularNumbers from '../sumTriangularNumbers';
import { assert } from 'chai';

describe('removeChar', () => {
  it('basic tests', () => {
    assert.equal(removeChar('eloquent'), 'loquen');
    assert.equal(removeChar('country'), 'ountr');
    assert.equal(removeChar('person'), 'erso');
    assert.equal(removeChar('place'), 'lac');
  });
});

describe('getSize', () => {
  it('basic tests', () => {
    assert.equal(getSize(4, 2, 6)[1], 48);
    assert.equal(getSize(4, 2, 6)[0], 88);
  });
});

describe("reversedStrings", function(){
  it("basic tests", function() {
    assert.equal(reversedStrings('world'), 'dlrow');
    assert.equal(reversedStrings('hello'), 'olleh');
    assert.equal(reversedStrings(''), '');
    assert.equal(reversedStrings('h'), 'h');
  });
});

describe("sumTriangularNumbers", function(){
  it("basic tests", function(){
    assert.equal(sumTriangularNumbers(6), 56);
    assert.equal(sumTriangularNumbers(34), 7140);
    assert.equal(sumTriangularNumbers(-291), 0);
    assert.equal(sumTriangularNumbers(943), 140205240);
    assert.equal(sumTriangularNumbers(-971), 0);
  });
});
