var wordMatch = require('./words');

module.exports = {
  formalitate: function (string) {
    wordMatch.words.forEach(function (word) {
      var key = Object.keys(word)[0];
      var value = word[key];
      string = string.replace(value, key);
    });
    return string;
  }
};
