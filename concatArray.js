//Concatenation of twice array...
const nums = [2, 3, 2, 1];
const ans = [];
let numLen = nums.length;
for (let i = 0; i < numLen; i++) {
  nums[numLen + i] = nums[i];
}
for (let j = 0; j < nums.length; j++) {
  ans[j] = nums[j];
}
console.log(ans);

//Time Complexity: O(n)
//Space Complexity: O(n) 
