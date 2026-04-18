// finding targetVal from an array using BinarySearch algorithm..
var search = function (nums, target) {
  let start = 0;
  let end = nums.length - 1;
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (nums[mid] == target) {
      return mid;
    }
    if (nums[mid] > target) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return -1;
};

let nums = new Array(2, 3, 4, 6, 8, 9);
let target = 3;
let result = search(nums, target);
if (result == -1) {
  console.log("Element is not found in array..");
} else {
  console.log(`Element is found in array at ${result} index..`);
}

//Time Complexity: O(log n)
//Space Complexity: O(1)
