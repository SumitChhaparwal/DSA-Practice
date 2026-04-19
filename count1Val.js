arr = [0, 0, 0, 0, 0, 1, 1, 1, 1];
let left = 0;
let count = 0;
let right = arr.length;

function countValue() {
  while (left < right) {
    let mid = left + Math.floor((right - left) / 2);
    if (arr[mid] === 0) {
      left += 1;
    }
    if (arr[mid] === 1) {
      count += 1;
      right -= 1;
    }
  }
  return count;
}

let result = countValue();
console.log("Total 1s:", result);
