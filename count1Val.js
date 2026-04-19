//Count 1s in sorted array using binary search..
arr = [0, 0, 0, 0, 0, 1, 1];
let left = 0;
let right = arr.length;
function countValue() {
  while (left < right) {
    let mid = left + Math.floor((right - left) / 2);
    if (arr[mid] === 1) {
      right = mid;
      return arr.length - mid;
    } else {
      left++;
    }
  }
  return count;
}

let result = countValue();
console.log("Total 1s:", result);

//Time Complexity: O(log n)
//Space Complexity: O(1)