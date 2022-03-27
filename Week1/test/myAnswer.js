const array = [0,2,1,100,4];
const length = array.length;
const median = (length - 1) / 2;
const array1 = array.sort((a, b) => a - b);
console.log(array1);
console.log(array1[median]);
// 길이가 7 => index[3]
// 길이가 9 => index[4]
// 길이가 11 => index[5]
