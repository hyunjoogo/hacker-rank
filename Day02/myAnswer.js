function miniMaxSum(arr) {
  // Write your code here
  const newArray = [];
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  for (let i = 0; i < arr.length; i++) {
    newArray.push(sum - arr[i]);
  }
  console.log(`${Math.min(...newArray)} ${Math.max(...newArray)}`)
}
