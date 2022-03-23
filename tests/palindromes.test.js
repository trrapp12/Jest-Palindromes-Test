/***
 * Excerpted from "Test-Driven React",
 * published by The Pragmatic Bookshelf.
 * Copyrights apply to this code. It may not be used to create training material,
 * courses, books, articles, and the like. Contact us if you are in doubt.
 * We make no guarantees that this code is fit for any purpose.
 * Visit http://www.pragmaticprogrammer.com/titles/tbreact for more book information.
***/

const palindromes = require('../palindromes')

const { prepareStr, isPalindrome, stringStartPalindrome } = palindromes; 

// notice this is a good example of using chained it statements where the same test performs multiple functions
describe('prepareStr()', () => {
  it('returns string to lowercase', () => {
    expect(prepareStr('aAaA')).toBe('aaaa')
  });
  it('removes all non-letter characters', () => {
    expect(prepareStr('To infinity and Beyond')).toBe('toinfinityandbeyond')
  });
});
// note this is a good example of chaining expect statements in  a test where you are test the same test against different conditions
describe('stringStartPalindrome()', () => {
  it('returns the longest palindrome at the start of the string', () => {
    expect(stringStartPalindrome('wow')).toBe('wow');
    expect(stringStartPalindrome('ahha')).toBe('ahha');
  });
  
});
// note this is a good example of using a test to return a boolean, true/false value and a test to test against negative conditions
describe('isPalindrome()', () => {
  it('returns true when given a palindrome', () => {
    expect(isPalindrome('aba')).toBe(true);
    expect(isPalindrome('abba')).toBe(true);
  });
  it('returns false when given a non-palindrome', () => {
    expect(isPalindrome('abb')).toBe(false);
    expect(isPalindrome('aaba')).toBe(false)
  });
});
// notice this is a good example of testing against a null value
describe('stringStartPalindrome()', () => {
  it('returns the longest palindrome at the start of the string', () => {
    expect(stringStartPalindrome('wow')).toBe('wow');
    expect(stringStartPalindrome('ahha')).toBe('ahha');
    expect(stringStartPalindrome('hohoho')).toBe('hohoh')
  });
  it('returns null if length of 3+ palindrome starts the string', () => {
    expect(stringStartPalindrome('ww')).toBe(null);
    expect(stringStartPalindrome('abcda')).toBe(null);
    expect(stringStartPalindrome('bananarama')).toBe(null);
  })
});
// note how this example is defining the outcome as an array with only the word in it, which is important for describing the results of only finding one result, versus finding more than one

// Also, note that as we switch from .toBe => .toEqual, the outcome changes from a simple string to the expected string inside an array

// From "Frontend Testing with Jest – Assertions deep dive" Posted by Anna Maier on April 29, 2019
// As always in Javascript, when you want to test for equality, you have to ask yourself “Which kind of equality?”. This is reflected by several equality assertion methods in Jest: toBe, toEqual and toStrictEqual.
// toBe compares the referential identity of values, while toEqual does a deep comparison of the properties of the values (using Object.is). toEqual is therefore better suited for objects, unless it is really crucial that an object is the same instance. toStrictEqual goes one step further than toEqual and also checks that two objects have the same type.


describe('palindromes()', ()=> {
  it('correctly identifies one-word palindromes', () => {
    expect(palindromes('racecar')).toEqual(['racecar']);
  })
  it('finds and returns words that are spelled the same forwards and backwards', () => {
    expect(palindromes('madam')).toEqual(['madam']);
  })
  it('returns and empty array when given no palindromes', () => {
    expect(palindromes('tic tac toe')).toEqual([]);
  })
  it('ignores casing', () => {
    expect(palindromes('WoW')).toEqual(['wow']);
  })
  it('ignores punctuation', () => {
    expect(palindromes('yo, banana boy!')).toEqual(['yobananaboy']);
  })
  it('detects multi-word palindromes', () => {
    expect(palindromes('A man, a plan, a canal, Panama')).toEqual(['amanaplanacanalpanama'])
  })
})