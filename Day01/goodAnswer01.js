function plusMinus(arr) {
  // Write your code here
  const totalLength = arr.length;

  let positiveLength = 0;
  let negativeLength = 0;
  let zerosLength = 0;
  for (const value of arr) {
    if (value > 0) {
      positiveLength++;
    } else if (value <0) {
      negativeLength++;
    } else {
      zerosLength++;
    }
  }
  console.log((positiveLength / totalLength).toFixed(6));
  console.log((negativeLength / totalLength).toFixed(6));
  console.log((zerosLength / totalLength).toFixed(6));
}
