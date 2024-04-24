let fn = function (arr, i = 0) {
  return i + arr;
};

var map = function (arr, fn) {
  let returnedArray = [];
  for (let i = 0; i < arr.length; i++) {
    returnedArray[i] = fn(arr[i], 1);
  }
  return returnedArray;
};

var map = function (arr, fn) {
  let returnedArray = [];
  for (let i = 0; i < arr.length; i++) {
    returnedArray.push(fn(arr[i], i));
  }
  return returnedArray;
};

console.log(map([10, 20, 30]));
