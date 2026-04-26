//Insertion Sort..
let arr = [36, 0, 2, 1, 34, 6];

function inSort() {
  for (let i = 1; i < arr.length; i++) {
    let keyEle = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > keyEle) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = keyEle;
  }
  return arr;
}

let sortedArr = inSort();
console.log("Final Sorted Array by InsertionSort:", sortedArr);

//Time Complexity: O(n^2)
//Space Complexity: O(1)
