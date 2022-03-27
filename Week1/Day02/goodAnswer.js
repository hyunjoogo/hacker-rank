function miniMaxSum(arr) {
  // Write your code here
  let sum = arr.reduce((a, b) => a + b);
  let maxVal = Math.max(...arr);
  let minVal = Math.min(...arr);
  console.log((sum - maxVal) + ' ' + (sum - minVal));
}


function miniMaxSum(arr) {
  // Write your code here
  arr.sort();
  let sumMin = 0
  for (let i = 0; i < arr.length - 1; i++) {
    sumMin += arr[i];
  }
  let sumMax = 0
  for (let i = 1; i < arr.length; i++) {
    sumMax += arr[i];
  }
  console.log(sumMin + " " + sumMax);
}

