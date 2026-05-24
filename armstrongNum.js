//Armstrong number is number that is sum of its own number each raised to total number of digits. if final sum is equal to num such as 
// true, (1³ + 5³ + 3³ = 153)  === 153) 

function isArmstrongNumber(num) {
  let numStr = String(num);
  const numStrArr = numStr.split("");
  let power = numStrArr.length;
  let finalR=0;
  for(let i=0; i<numStrArr.length; i++){
    finalR += Math.pow(Number(numStrArr[i]), power);
  }
  if(finalR === num){
    return finalR;
  }
}
console.log("This number is Armstrong number: ",isArmstrongNumber(153));

//output: This number is Armstrong number: 153