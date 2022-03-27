const input = "S;V;iPad\n" +
  "C;M;mouse pad\n" +
  "C;C;code swarm\n" +
  "S;C;OrangeHighlighter"
const inputArray = input.split("\n");
for (const element of inputArray) {
  const splitSample = element.split(";");
  const firstOperation = splitSample[0];
  const secondOperation = splitSample[1];
  const textOriginal = splitSample[2];

  if (firstOperation === "S") {
    let changedText = "";
    // text 값의 대문자를 만나면 공백 만들고 소문자로 변경
    changedText = UpperCaseChangeToSpacePlusLowerCase(textOriginal);
    if (secondOperation === "M") {
      // 브라켓지우기
      changedText = removeBracket(changedText);
    } else if (secondOperation === "C") {
      // 앞뒤 공백 지우기
      changedText = changedText.trim();
    } else if (secondOperation === "V") {
      // 그대로 사용
    }
    console.log(changedText);
    // return changedText;
  } else if (firstOperation === "C") {
    // text 값 공백지우고 공백 다음칸 대문자 만들기
    let changedText = "";
    changedText = SpacePlusLowerCaseChangeToUpperCase(textOriginal);
    if (secondOperation === "M") {
      // 마지막에 브라켓 생성
      changedText = changedText + "()";
    } else if (secondOperation === "C") {
      // 맨 앞만 대문자
      changedText = changedText.charAt(0).toUpperCase() + changedText.slice(1);
    } else if (secondOperation === "V") {
      // 그대로 사용
    }
    console.log(changedText)
  }
}


// "S"(split) => "대문자" 만나면 "빈칸 + 소문자"로 변경하는 함수
// plasticCup => plastic cup
function UpperCaseChangeToSpacePlusLowerCase(value) {
  const spacePlusLowerCase = value.replaceAll(/([A-Z])/g, (target) => " " + target.toLowerCase());
  console.log('대문자를 빈칸+소문자 : ', spacePlusLowerCase);
  return spacePlusLowerCase;
  // replaceAll 이 안되면
  // let result = "";
  // for (let i = 0; i < value.length; i++) {
  //   if (value[i].match(/([A-Z])/g)) {
  //     result += " " + value[i].toLowerCase();
  //   } else {
  //     result += value[i];
  //   }
  // }
  // return result;



}

// "S", "M"(method) => () 브라킷 만나면 삭제하는 함수
function removeBracket(value) {
  const noBracket = value.replaceAll(/([(,)])/g, "");
  console.log('브라킷 삭제한 것 : ', noBracket);
  return noBracket;
  // replaceAll 이 안되면

  // let result = "";
  // for (let i = 0; i < value.length; i++) {
  //   if (value[i].match(/([(,)])/g)) {
  //     result += "";
  //   } else {
  //     result += value[i];
  //   }
  // }
  // return result;
}

// "C"(combine) => "빈칸 + 소문자" 만나면 "대문자"로 변경하는 함수
// plastic cup => plasticCup
function SpacePlusLowerCaseChangeToUpperCase(value) {
  const upperCase = value.replaceAll(/( [a-z])/g, (target) => target.toUpperCase().trim());
  console.log('빈칸+소문자를 대문자로 : ', upperCase);
  return upperCase;

  // replaceAll 이 안되면

  // let result = "";
  //
  // for (let i = 0; i < value.length; i++) {
  //   if (value[i] === " ") {
  //     result += "";
  //   } else if (value[i - 1] === " ") {
  //     result += value[i].toUpperCase();
  //   } else {
  //     result += value[i];
  //   }
  // }
  // return result;

}
