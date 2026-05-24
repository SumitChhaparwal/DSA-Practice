//moving all 0 to the end..
//Its test comfort with the pointer..

const arr = [2, 0, 2, 1, 0, 0, 5];

function movingZero(arr) {
  let cPointer = 0;
  for(let i=0; i<arr.length; i++){
    let reBase = i;
    if(arr[reBase] !== 0){
      [arr[cPointer], arr[reBase]] = [arr[reBase], arr[cPointer]];
      // above, similar to == 
      // let temp = arr[cPointer];
      // arr[cPointer] = arr[reBase];
      // arr[reBase] = temp;
      cPointer++;
    }
  }
  return arr;
}
console.log(movingZero(arr).join(","));