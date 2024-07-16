// Flick switch
// https://www.codewars.com/kata/64fbfe2618692c2018ebbddb/train/javascript
// Task
// Create a function that always returns True/true for every item in a given list.
// However, if an element is the word 'flick', switch to always returning the opposite boolean value.

// Examples
// ['codewars', 'flick', 'code', 'wars'] ➞ [True, False, False, False]

// ['flick', 'chocolate', 'adventure', 'sunshine'] ➞ [False, False, False, False]

// ['bicycle', 'jarmony', 'flick', 'sheep', 'flick'] ➞ [True, True, False, False, True]
// Notes
// "flick" will always be given in lowercase.
// A list may contain multiple flicks.
// Switch the boolean value on the same element as the flick itself.

// First solution 

function flickSwitch(arr){
    let counter = 0;
    let result = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === "flick"){
        counter = counter + 1;
      }
      if (counter % 2 === 0){
        result.push(true);
      } else {
        result.push(false);
      }
    }
    return result;
  }