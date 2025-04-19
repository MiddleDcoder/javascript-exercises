const palindromes = function (str) {
  // accept only this characters
  const alphanumericalOnly = "abcdefghijklmnopqrstuvwxyz0123456789";

  // clean the characters to avoid having none alphanumeric
  const filteredStr = str
    .toLowerCase()
    .split("")
    .filter((character) => {
      return alphanumericalOnly.includes(character);
    })
    .join("");

  // Reverse the string from filtered characters
  const reversedStr = filteredStr.split("").reverse().join("");

  // return boolean - true or false
  return filteredStr === reversedStr;
};

// Do not edit below this line
module.exports = palindromes;
