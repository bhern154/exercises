// Maps and Sets Exercise

// Quick Question #1

// What does the following code return?

new Set([1,1,2,2,3,4]);

// It returns {1,2,3,4} because it removes duplicates

//------------------------------

// Quick Question #2

// What does the following code return?

[...new Set("referee")].join("");

//It returns 'ref' because the set ignores duplicates and join merges them as a string

//------------------------------

// Quick Questions #3

// What does the Map m look like after running the following code?

let m = new Map();
m.set([1,2,3], true);
m.set([1,2,3], false);

// m will return: {[1,2,3] => true, [1,2,3] => false}

//------------------------------

// hasDuplicate

// Write a function called hasDuplicate which accepts an array and returns true or false if that array contains a duplicate

//I compare the size of the original array to the size of the set
const hasDuplicate = (arr) => (!(arr.length == new Set(arr).size));

hasDuplicate([1,3,2,1]) // true
hasDuplicate([1,5,-1,4]) // false

//------------------------------

// vowelCount

// Write a function called vowelCount which accepts a string and returns a map where the keys are numbers and the values are the count of the vowels in the string.

const vowelCount = (str) => {
  const map = new Map();
  [...str].forEach(val => {
    if("aeiouAEIOU".indexOf(val) != -1){
      if(map.has(val)) map.set(val, map.get(val)+1);
      else map.set(val, 1);
    }
  });
  return map;
}

// vowelCount('awesome') // Map { 'a' => 1, 'e' => 2, 'o' => 1 }
// vowelCount('Colt') // Map { 'o' => 1 }

//------------------------------