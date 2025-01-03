// FUNCTIONS: Early return
// BEFORE YOU START: please read the /exercises-info/e3.md file.

/**
 * ====================================================
 * Create a function that works as follows:
 * The function name is 'doesArrayIncludeItemsBetweenVals'
 * given an array of numbers. You can use it as the arr for testing purposes
 * The function take an arr (array), val1 (number) and val2 (number) as arguments.
 * The function returns a boolean if array includes an item that is greater than val1 and less than val2
 * The function MUST have 2 return statements: make an early return if the item is found and use the default return otherwise
 * The function MUST be written with NAMED function syntax.
 * doesArrayIncludeItemsBetweenVals([2, 4, 2], 3, 5) => true
 * doesArrayIncludeItemsBetweenVals([2, 4, 2], 5, 10) => false
 */

// Your code goes here...


function doesArrayIncludeItemsBetweenVals([arr],val1,val2){

  if (Math.max.apply(arr) > val1 && Math.min.apply(arr) < val2) {
         console.log(true);
       } else {
        console.log(false);
       }

      console.log(doesArrayIncludeItemsBetweenVals([2,4,2],3,5))
      console.log(doesArrayIncludeItemsBetweenVals([2,4,2],5,10))
  }

//   let x = arr[0];
// let y = arr[1];
// let z = arr[2];

// function arrayHigh(x,y,z) {
//   if (x > y && x > z) {
//     console.log(x);
//   } else if (y > x && y > z){
//     console.log(y);
//   }
//   else {
//     console.log(z);
//   }
// }

// function arrayLow(x,y,z) {
//   if (x < y && x < z) {
//     console.log(x)
//   } else if (y < x && y < z){
//     console.log(y);
//   }
//   else {
//     console.log(z);
//   }
// }

//   if (arrayHigh(x,y,z) > val1 && arrayLow(x,y,z) < val2) {
//     console.log(true);
//   } else {
//     console.log(false);
//   }



/**
 * ====================================================
 * Please read the /exercises-info/e4.md file. It describes different types of syntax to write functions
 * Create three functions using 3 types of syntax: named, arrow and function expression (with anonymous function)
 * Named function: getValueWithConditionOne;
 * Arrow Function name: getValueWithConditionTwo;
 * Variable name for the function expression: getValueWithConditionThree;
 * All three functions resolve the same task:
    * The function takes two numbers as arguments
    * If the numbers are both equal to 40, return the sum of them
    * Else return the doubled sum of them
 * getValueWithConditionOne(40, 40) => 80;
 * getValueWithConditionOne(20, 30) => 100;
 */

// Your code goes here...

function getValueWithConditionOne(x,y){
  let sum = x+y;
  if (sum == 40) {
    return sum;
  } else {
    return sum * 2;
  }
}

console.log(getValueWithConditionOne(22,18))
console.log(getValueWithConditionOne(20,25))



let getValueWithConditionTwo = (x,y) =>{
  let sum = x+y;
  if (sum == 40) {
    return sum;
  } else {
    return sum * 2;
  }
}

console.log(getValueWithConditionTwo(22,18))
console.log(getValueWithConditionTwo(20,25))



let getValueWithConditionThree = function (x,y){
  let sum = x+y;
  if (sum == 40) {
    return sum;
  } else {
    return sum * 2;
  }
}

console.log(getValueWithConditionThree(22,18))
console.log(getValueWithConditionThree(20,25))

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-3"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function


// Do not delete or change the lines beneath
// const f = {
//   doesArrayIncludeItemsBetweenVals: doesArrayIncludeItemsBetweenVals || undefined,
//   getValueWithConditionOne: getValueWithConditionOne || undefined,
//   getValueWithConditionTwo: getValueWithConditionTwo || undefined,
//   getValueWithConditionThree: getValueWithConditionThree || undefined,
// }
// export { f };
