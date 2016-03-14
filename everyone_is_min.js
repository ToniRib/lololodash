'use strict';

var _ = require("lodash");

function checkTemp(temp) {
  return temp > 19;
}

var sortTowns = function(towns) {
  var result = {
    hot: [],
    warm: []
  };

  _.forEach(towns, function(town, townName) {
    if (_.every(town, checkTemp)) {
      result.hot.push(townName);
    } else if (_.some(town, checkTemp)) {
      result.warm.push(townName);
    }
  });

  return result;
};

module.exports = sortTowns;
