/**
 * Given a string, counts the number of words inside it. Each word is separated by a single space character.
 */
function countWords(inpstr) {
  inpstr = inpstr.trim();

  if (inpstr == "")
      return 0;

  let myArray = inpstr.split(" ");

  return myArray.length;
}

describe('countWords', function() {
  const assert = require("chai").assert;

  it('should work for empty strings', function() {
    assert.equal(countWords(""), 0);
  });

  it('should work for simple strings', function() {
    assert.equal(countWords("a b c"), 3);
    assert.equal(countWords("hello"), 1);
    assert.equal(countWords("hello world"), 2);
  });
});