let nums = new Array(1, 3, 4, 3);
let sum = new Array(nums.length);
for (let i = 0; i < nums.length; i++) {
  sum[i] = 0;
  for (let j = 0; j <= i; j++) {
    sum[i] += nums[j];
  }
}
console.log(sum);

// n=len, n+1, n+2, n+3, ..n = (n)n = n^2  
//Time Complexity: O(n^2)
//Space Complexity: O(n)