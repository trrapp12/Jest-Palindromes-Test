const palindromes = require('./palindromes')

describe('palindromes()', ()=> {
  it('finds and returns words that are spelled the same forwards and backwards', () => {
    expect(palindromes('madam')).toEqual(['madam'])
  })
})