'use strict';

var _ = require("lodash");

var sortByQuantity = function(items) {
  return _.sortBy(items, function(item) {
    return -item.quantity;
  });
};

module.exports = sortByQuantity;
