/**
 * Determines whether the given string is a palindrome, i.e. if you were to reverse the order of the characters inside the string, you would get back the original string.
 */
 function reverseString(inpstr) {
  let outstr = "";

  for (let i = inpstr.length - 1; i >= 0; i--)
      outstr = outstr + inpstr[i]; 

  return outstr;
}

function isPalindrome(inpstr) {
  let revstr = reverseString(inpstr);

  if (inpstr === revstr)
    return true;
  else
    return false;
}

describe('isPalindrome', function() {
  const assert = require("chai").assert;

  it('works for empty string', function() {
    assert.isTrue(isPalindrome(''));
  });

  it('works for single characters', function() {
    assert.isTrue(isPalindrome('x'));
    assert.isTrue(isPalindrome('c'));
  });

  it('works for double characters', function() {
    assert.isTrue(isPalindrome('xx'));
    assert.isTrue(isPalindrome('gg'));
    assert.isFalse(isPalindrome('af'));
    assert.isFalse(isPalindrome('yt'));
  });

  it('works for words', function() {
    assert.isTrue(isPalindrome('racecar'));
    assert.isFalse(isPalindrome('potato'));
  });
});