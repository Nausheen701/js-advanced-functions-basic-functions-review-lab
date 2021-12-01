// Your code here
function saturdayFun(activity='roller-skate') {
    return(`This Saturday, I want to ${activity}!`);
}

function mondayWork(activity="go to the office") {
    return(`This Monday, I will ${activity}.`);
}

// when initialized with '*' creates a function that, 
// when called, wraps an adjective in a highlight
let wrapAdjective = function(style="*") {
    return function(adjective="special") {
      return `You are ${style}${adjective}${style}!`
    }
  }

//   defines an object called Calculator
//       1) has a JavaScript Object called Calculator as a local variable
//       that has a function called add
//         2) Calculator.add exists
//         3) calculates 1 + 3
//       that has a function called subtract
//         4) Calculator.subtract exists
//         5) calculates 1 - 3
//       that has a function called multiply
//         6) Calculator.multiply exists
//         7) calculates 1 * 3
//       that has a function called divide
//         8) Calculator.divide exists
//         9) calculates 10 / 5

const Calculator = {
    add: function(a,b) {
        return a + b;
    },

    subtract: function(a,b) {
        return a - b;
    },

    multiply: function(a,b) {
        return a * b;
    },
    
    divide: function(a,b) {
        return a / b;
    }
}


// Defines a function called actionApplyer
// 1) exists
// receives two arguments: a starting integer and an array of functions
//   2) returns the given starting point, unchanged, when the array is empty
//   3) Given 13, returns 4 after being acted on by several functions

function actionApplyer(candy, array=[]) {
    let a = candy
    for (let i = 0; i < array.length; i++ ){
        a = array[i](a)
      }
      return a
}
