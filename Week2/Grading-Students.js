// grade는 0~100
// 40점 미만은 과락

// 등급과 5의 다음 배수 사이의 차이가
// 3보다 작으면 5의 다음 배수까지 반올림합니다.

// 84점 => 85 (85-84 is less than 3)
// 29 => 그냥 낙제
// 57 => 60-57 is 3 or higher
// 56 => 60-56 is 4 (3보다 크므로 그대로 유지)
// 54 => 55-54 is 1 (3보다 작으니까 55로 반올림)
// 53 => 55-53 is 2 (3보다 작으니까 55로 반올림)
// 52 => 55-52 is 3 (3 반올림 안함)


let grade = 38;

// 점수가 37보다 크면
// function checkGrade(value) {
//
//   let remainder = value % 5;
//   let n = (value - remainder) / 5;
//   let nextMultiple = (n + 1) * 5;
//   let gap = nextMultiple - value;
//   if (0 < gap && gap < 3) {
//     // 0 < aa < 3
//     // 다음 5배수로 업
//     return nextMultiple;
//   } else {
//     // 0, 3, 4일 때
//     // 값 그래도 리턴
//     return value;
//   }
// }

console.log(checkGrade(grade));

let grades = [4, 73, 67, 38, 33];

const filter = grades.filter(value => value > 37);
const result = filter.map(checkGrade);

function checkGrade(grades) {
  let remainder = grades % 5;
  let n = (grades - remainder) / 5;
  let nextMultiple = (n + 1) * 5;
  let gap = nextMultiple - grades;
  if (0 < gap && gap < 3) {
    return nextMultiple;
  } else {
    return grades;
  }
}

console.log(result);


