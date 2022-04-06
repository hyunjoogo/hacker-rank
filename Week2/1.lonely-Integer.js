// 유일한 엘리먼트만 찾아라

let a = [0, 0, 1, 2, 1];
let count = 0;
a.forEach((value, index)=> {
  if (!checkSameValue(value, index)) {
    count = value
  }
})

function checkSameValue(value, index) {
  return a.some((item, i) => {
    if (index === i) {

    } else {
      return item === value;
    }
  })
}

console.log(count);
