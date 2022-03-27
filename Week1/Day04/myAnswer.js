const score = [10, 5, 20, 20, 4, 5, 2, 25, 1];
const scoreLength = score.length;
const result = [];


let maximum = score[0];
let minimum = score[0];

let maximumCount = 0;
let minimumCount = 0;

// 0번째 인덱스
// maximum, minimum

// n번째 인덱스
// maximum < value 이면 maximum (10 < 4 false)
// maximumCount++
// minimum > value 이면 minimum (5 > 4 true 4)
// minimumCount++

function compareScore(value) {
  if (maximum < value) {
    maximumCount++;
    maximum = value;
    console.log('비교값 : ', value, '최고점수갱신 : ', maximum, "최고점수갱신횟수 : ", maximumCount);
  } else if (minimum > value) {
    minimumCount++;
    minimum = value;
    console.log('비교값 : ', value, '최저점수갱신 : ', minimum, "최저점수갱신횟수 : ", minimumCount);
  } else {
    return;
  }
}

for (let i = 1; i < scoreLength; i++) {
  compareScore(score[i]);
}

result.push(maximumCount, minimumCount);

