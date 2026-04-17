// Getting sum of two array element and returning these index if equal to target like [3, 3] = [2, 3] 
let nums = [3, 1, 3, 3];
let target = 6;
let arr = [];
for (let i = 0; i < nums.length; i++) {
  for (let j = i + 1; j < nums.length; j++) {
    if (nums[i] + nums[j] == target) {
      arr[0] = i;
      arr[1] = j;
    }
  }
}

console.log(arr);

// n-j: n-1, n-2, n-3,... n = (n-1)n = (n)n = n^2
//Time Complexity: O(n^2) 
//Space Complexity: O(1)
