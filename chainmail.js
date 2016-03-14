'use strict';

var _ = require("lodash");

var chained = function(words) {
  return _.chain(words)
    .map(function(word) {
      return word + 'Chained';
    })
    .map(function(word) {
      return word.toUpperCase();
    })
    .sortBy();
};

module.exports = chained;
