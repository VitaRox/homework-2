const numArr = [1,2,3];
const strArr = ["hello", "world"];

/*
 - swapping elemnts
 - retrieving elements
 - updating elements
 - delete elements
 - cloning or copy array
*/

/*
- push: add a new element to the end of an array

numArr.push(4);//gives us [1,2,3,4]

- unshift: adds one or more elements to the beginning of the array

numArr.unshift(5,6,7)//gives us [5,6,7,1,2,3,4]
numArr.unshift(100)//gives us [100,5,6,7,1,2,3,4]


- pop: delete last element from the array
- shift: delete first element from the array

numArr.shift();//will change the array and delete the first element. If numArr was [1,2,3,4] then we will have [2,3,4]

numArr.pop();//will give you the deleted item and modifies
numArr to [1,2,3]

-includes: checks if the element exist in the list
-indexOf: checks for the first occurrence of the element in the list. Returns the index or -1 if the element does not exist.
-lastIndexOf: same as IndexOf exist return the last occurent of
an element

*/

// Helper function; it made sense to me to extract this logic into a separate, recursive function
// for determining whether a given string is a palindrome
function isPalindrome(str) {
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== str[str.length - 1]) {
      return false;
    } else {
      str = str.slice(i + 1, str.length - 1);
      return isPalindrome(str);
    }
  }
  return true;
}

// Test cases:

// console.log(isPalindrome('racecar')); // should be true
// console.log(isPalindrome('madam'));  // should be true
// console.log(isPalindrome('uniform'));  // should be false
// console.log(isPalindrome('scabs'));  // should be false
// console.log(isPalindrome('deified'));  // should be true
// console.log(isPalindrome('refer'));  // should be true
// console.log(isPalindrome('spoon'));  // should be false
// console.log(isPalindrome('crumbs'));  // should be false
console.log('It works!');

/*
  Part II
  - Write a function that will filter out a list of strings that are palindrome from the array.
  Try not to use online examples to know how to find if a string is palindrome.
*/
function filterNonPalindromes(filterArray) {
  let finalArray = [];
  for (let item of filterArray) {
    if (isPalindrome(item)) {
      finalArray.push(item);
    }
  }
  console.log(`The final, filtered array consists of ${finalArray.toString()}`);
  let msg = "That's all, folks!";
  return msg;
}


let stringTestArray = ['racecar', 'zamboni', 'madam', 'madamoiselle', 'monsieur', 'refer', 'deified'];
console.log(filterNonPalindromes(stringTestArray));


/*
  Part II
- Homework: write a function that helps me find out how many unique numbers are in an array.
  Unique numbers can at most only have one occurrence in the array.(Non-duplicate numbers)
*/
function countUniqueNumbers(inArray) {
  let count = 0;
  for (let num of inArray) {
    if (inArray.indexOf(num) === inArray.lastIndexOf(num)) {
      count++;
    }
  }
  return count;
}

// Test cases
let numTestArray1 = [2, 2, 5, 4, 56, 87, 9999, 32, 1, 4, 5, 6, 7];
console.log(`There are ${countUniqueNumbers(numTestArray1)} unique values in our test array`);
console.log(`There should be 7 unique values in our test array.`)

let numTestArray2 = [1, 1, 1, 4, 55, 100, 1];
console.log(`There are ${countUniqueNumbers(numTestArray2)} unique values in our test array`);
console.log(`There should be 3 unique values in our test array.`);
