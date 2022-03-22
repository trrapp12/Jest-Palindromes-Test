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


describe('palindromes()', ()=> {
  it('finds and returns words that are spelled the same forwards and backwards', () => {
    expect(palindromes('madam')).toEqual(['madam'])
  })
})