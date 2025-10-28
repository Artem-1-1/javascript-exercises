const palindromes = function (str) {
    const alphanumerical = 'abcdefghijklmnopqrstuvwxyz0123456789';

    const clearString = str
      .toLowerCase()
      .split('')
      .filter((character) => alphanumerical.includes(character))
      .join('');

    const reverseStr = clearString.split('').reverse().join('');
    
    return clearString === reverseStr;
}

// Do not edit below this line
module.exports = palindromes;
