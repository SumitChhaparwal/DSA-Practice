let arr = [36, 0, 2, 1, 34, 6];

function inSort() {
  for (i = 0; i < arr.length; i++) {
    for (j = 0; j < i; j++) {
      let keyEle = arr[i];
      if (arr[j] > keyEle) {
        arr[i] = arr[j];
        arr[j] = keyEle;
      }
    }
  }
  return arr;
}

let sortedArr = inSort();
console.log("Final Sorted Array by InsertionSort:", sortedArr);

//Time Complexity: O(n^2)
//Space Complexity: O(1)
