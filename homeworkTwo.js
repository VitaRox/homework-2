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

/*
- Homework: without using filter function from array, write a function that will filter out a list of strings that are palindrome from the array. Try not to use online examples to know how to find if a string is palindrome.

- Homework: write a function that helps me find out how many unique numbers are in an array. Unique numbers can at most only have one occurrence in the array.(Non-duplicate numbers)
*/
