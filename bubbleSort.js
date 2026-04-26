//Perform sorting through bubble sort..
let arr = [64, 34, 2, 3, 31, 90];
let len = arr.length;
function bSort() {
  let temp;
  for (let i = 0; i < len - 1; i++) {
    let swap = false;
    for (let j = 0; j < len - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        swap = true;
      }
    }
    if (!swap) {
      break;
    }
  }
  return arr;
}

let sortedArr = bSort();
console.log("Sorted array by Bubble Sort", sortedArr);

//Time Complexity: O(n^2)
//Space Complexity: O(1)