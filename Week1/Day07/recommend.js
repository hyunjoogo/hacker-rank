const strings = ["aba", "baba", "aba", "xzxb",];
const queries = ["aba", "xzxb", "ab",]

let results = [];

for (let q of queries) {
  let count = 0;
  for (let s of strings) {
    if (q=== s) {
      count++;
    }
  }
  results.push(count);
}

console.log(results);
