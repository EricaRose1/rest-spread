// function filterOutOdds() {
//   var nums = Array.prototype.slice.call(arguments);
//   return nums.filter(function(num) {
//     return num % 2 === 0
//   });
// }
const filterOdds = (...args) => args.filter((n) => n % 2 === 0);

// create function that accepts ver num of args and returns the smallest argument.
function findMin(...nums) {
  return Math.min(...nums);
}
// const findMin = (...nums) => Math.min(...nums);

// write function that accepts two objects and returns a new object which contains
// all the keys and values of the first and second together
function mergeObjects(obj1, obj2) {
  return { ...obj1, ...obj2 };
}

// const mergeObjects = (obj1, obj2) => ({ ...obj1, ...obj2 });

// Write a function called doubleAndReturnArgs which accepts an array
// and a variable number of arguments. The function should return a
// new array with the original array values and all of
// additional arguments doubled.
const doubleAndReturnArgs = (arrays, ...arguments) =>
  arrays.map((arr, arguments), arr + arguments * 2);

/** remove a random element in the items array
and return a new array without that item. */
const removeRandom = (items) => {
  const idx = Math.floor(Math.random() * items.length);
  return [...items.slice(0, idx), ...items.slice(idx + 1)];
};

/** Return a new array with every item in array1 and array2. */
const extend = (arr1, arr2) => [...arr1, ...arr2];

/** Return a new object with all the keys and values
from obj and a new key/value pair */
const addKeyVal = (obj, key, val) => {
  let obj1 = { ...obj };
  new [key]() = val;
  return obj1;
};

/** Return a new object with a key removed. */
const removeKey = (obj, key) => {
  let keys = { ...obj };
  delete keys[key];
  return keys;
};

/** Combine two objects and return a new object. */
const combine = (obj1, obj2) => {
  return { ...obj1, ...obj2 };
};

/** Return a new object with a modified key and value. */
const update = (obj, key, val) => {
  let obj1 = { ...obj };
  obj1[key] = val;
  return obj1;
};
