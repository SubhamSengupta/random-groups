# rand-groups
Make any number of random groups from an array of elements.

### Usage:
Call `groups` with `array` of elements to get randomized groups of length `numberOfGroups`
  ```javascript
  const groups = require('random-groups);
  var array = ["Apple", "Banana", "Mango", "Orange"];
  var numberOfGroups = 2;
  console.log(groups(array, numberOfGroups));
  // [ ["Banana", "Mango"], ["Apple", "Orange"] ]
  ```