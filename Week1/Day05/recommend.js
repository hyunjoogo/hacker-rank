/*
* replaceAll 이 안되어서 for문으로 대체
*
*
*
*
* */


function processData(input) {
  const inputArray = input.split("\r\n");

  for (const element of inputArray) {
    const splitSample = element.split(";");

    const firstOperation = splitSample[0];
    const secondOperation = splitSample[1];
    const textOriginal = splitSample[2];

    if (firstOperation === "S") {
      let changedText = "";
      changedText = upperCaseChangeToSpacePlusLowerCase(textOriginal);

      if (secondOperation === "M") {
        changedText = removeBracket(changedText);
      } else if (secondOperation === "C") {
        changedText = changedText.trim();
      } else if (secondOperation === "V") {
      }
      console.log(changedText);
    } else if (firstOperation === "C") {
      let changedText = "";
      changedText = spacePlusLowerCaseChangeToUpperCase(textOriginal);

      if (secondOperation === "M") {
        changedText = changedText + "()";
      } else if (secondOperation === "C") {
        changedText = changedText.charAt(0).toUpperCase() + changedText.slice(1);
      } else if (secondOperation === "V") {
      }
      console.log(changedText);
    }
  }


  function upperCaseChangeToSpacePlusLowerCase(value) {
    let result = "";
    for (let i = 0; i < value.length; i++) {
      if (value[i].match(/([A-Z])/g)) {
        result += " " + value[i].toLowerCase();
      } else {
        result += value[i];
      }
    }
    return result;

  }

  function removeBracket(value) {
    let result = "";
    for (let i = 0; i < value.length; i++) {
      if (value[i].match(/([(,)])/g)) {
        result += "";
      } else {
        result += value[i];
      }
    }
    return result;
  }

  function spacePlusLowerCaseChangeToUpperCase(value) {
    let result = "";

    for (let i = 0; i < value.length; i++) {
      if (value[i] === " ") {
        result += "";
      } else if (value[i - 1] === " ") {
        result += value[i].toUpperCase();
      } else {
        result += value[i];
      }
    }
    return result;
  }
}
