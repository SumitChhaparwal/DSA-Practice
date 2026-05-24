//String & Array Manipulation
//Challenge: Title case a sentence (ignoring specific preposition)
// Sample Input: "the dynamic routing and state management of react"
// Sample Output: "The Dynamic Routing and State Management of React"

function titleCaseSentense(sentence){
  const minorWords = ["and", "or", "the", "to", "of"];
  if(!sentence){
    return "";
  }
  const sWords = sentence.toLowerCase().split(" ");
  const finalResult = sWords.map((item, i) => {
    if(i === 0){
      return item.charAt(0).toUpperCase() + item.slice(1);
    }
    if(minorWords.includes(item)){
      return item;
    }
    return item.charAt(0).toUpperCase()+item.slice(1);
  });
  return finalResult.join(" ");
}
console.log(titleCaseSentense("the dynamic routing and state management of react"));