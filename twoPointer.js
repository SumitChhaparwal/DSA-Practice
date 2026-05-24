//Using two pointers approach [arr[left]+arr[right] == target] to return index of array value which is equal to target... And its only work on sorted array..

const arr = [2, 3, 5, 6, 6];
let target = 12;

function twoPointers(arr) {
  let left = 0;
  let right = arr.length;
  while (left < right) {
    let currentSum = arr[left] + arr[right];
    if (currentSum == target) {
      return [left, right];
    } else if (currentSum < target) {
      left++;
    } else {
      right--;
    }
  }
  return -1;
}

let fResult = twoPointers(arr);
console.log(fResult);
