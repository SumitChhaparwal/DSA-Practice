//Implementing sorting through Selection Sort algorithm
let arr = [23, 2, 1, 5, 3, 60, 4];
let len = arr.length;

function sSort() {
  for (let i = 0; i < len - 1; i++) {
    let minIndex = i;
    let temp;
    for (let j = i + 1; j < len; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    if (i !== minIndex) {
      temp = arr[minIndex];
      arr[minIndex] = arr[i];
      arr[i] = temp;
    }
  }
  return arr;
}

let sortedArr = sSort();
console.log("Sorted Array by Selection_Sort: ", sortedArr.join(", "));

//Time Complexity: O(n^2);
//Space Complexity: O(1);