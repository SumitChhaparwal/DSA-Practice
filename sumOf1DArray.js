// Calculating sum of 1D array like [1, 2, 3] = [1, 3, 6]
//Approach 1
const nums = new Array(1, 3, 4, 3);
const sum = new Array(nums.length);
for (let i = 0; i < nums.length; i++) {
  sum[i] = 0;
  for (let j = 0; j <= i; j++) {
    sum[i] += nums[j];
  }
}
console.log("1. sum of 1d array: ", sum);
// n=len, n+1, n+2, n+3, ..n = (n)n = n^2  
//Time Complexity: O(n^2)
//Space Complexity: O(n)


//Approach 2
let sum1 = new Array(nums.length);
sum1[0] = nums[0];
for(let i=1; i<nums.length; i++) {
  sum1[i] = sum1[i-1] + nums[i];
}
console.log("2. sum of 1d array: ", sum1);

//Time Complexity: O(n)
//Space Complexity: O(n)