const strings = ["aba", "baba", "aba", "xzxb",];
const queries = ["aba", "xzxb", "ab",]

let count = 0;
let result = [];

for(let item of queries) {
  count = 0;
  strings.map((value)=>{
    if (value === item) {
      count++;
    }
  })
  result.push(count);
}



console.log(result);

console.log(count);
