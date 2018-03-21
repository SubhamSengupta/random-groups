Make any number of random groups from an array of elements.

Usage:
  const groups = require('random-groups);
  var array = ["Apple", "Banana", "Mango", "Orange"];
  var numberOfGroups = 2;
  console.log(groups(array, numberOfGroups));
  // [ ["Banana", "Mango"], ["Apple", "Orange"] ]