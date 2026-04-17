//finding maximum and minimum value of an array.. 
//max
const arr = [23, 3, 32, 5, 21, 2, 23, 233];
var max = arr[0];
for (let i = 0; i < arr.length; i++) {
  if (arr[i] > max) {
    max = arr[i];
  }
}
console.log("maximum value of an array:", max);

//min
var min = arr[0];
for(let i=0 ; i<arr.length; i++){
  if(arr[i] < min){
    min = arr[i];
  }
}
console.log("minimum value of an array:", min);

//TimeComplexity: O(n)
//SpaceComplexity: O(1)