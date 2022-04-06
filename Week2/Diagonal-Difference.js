// 1 2 3
// 4 5 6
// 7 8 9



const arr = [
  [-1, 2, 3],
  [4, -5, 6],
  [-9, 8, -9]
];
const n = 3;
// 대각선 값 더하기
// 차이 구해서 절대값 구해서 리턴하기
let leftToRight = 0; // n-3, n-2, n-1 // arr[0][0] + arr[1][1] + arr[2][2];
let rightToLeft = 0; // n-3, n-1 / n-2,n-2 / n-1, n-3 // arr[0][2] + arr[1][1] + arr[2][0];

for (let i = 0; i < arr.length; i++) {
  leftToRight += arr[i][i];
  rightToLeft += arr[i][(arr.length - i) - 1];
}


console.log(leftToRight, rightToLeft);
console.log(Math.abs(leftToRight - rightToLeft));

