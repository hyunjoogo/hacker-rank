const n = 6;
const k = 3;
const ar = [1, 3, 2, 6, 1, 2];

let outCount = 0;

for (let i = 0; i < ar.length; i++) {
  for (let j = 0; j < ar.length; j++) {
    if (i < j) {
      const pairsCombine = ar[i] + ar[j];
      if (pairsCombine % k === 0) {
        outCount++
      }
    }
  }
}

console.log(outCount);
